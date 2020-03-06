import React, {useState, useEffect} from 'react';
import {View, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import {useQuery} from '@apollo/react-hooks';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import _const from '../../../lib/const';
import _queries from '../../../api/feeds/queries';

export default function Bookmark({feedId}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const {loading, error, data} = useQuery(_queries.GET_FEED_BY_ID(feedId));

  useEffect(() => {
    AsyncStorage.getItem(`@feeds:${feedId}`)
      .then(data => {
        if (data && data.readTime !== 0) setIsBookmarked(true);
      })
      .done();
  }, []);

  const saveFeed = async () => {
    try {
      await AsyncStorage.setItem(
        `@feeds:${feedId}`,
        JSON.stringify(data.feeds[0]),
      );
      setIsBookmarked(true);
    } catch (e) {
      setIsBookmarked(true);
      console.log('couldnt save feed');
    }
  };

  const deleteFeed = async () => {
    try {
      await AsyncStorage.removeItem(`@feeds:${feedId}`);
      setIsBookmarked(false);
    } catch (e) {
      setIsBookmarked(true);
      console.log('couldnt save feed');
    }
  };

  if (loading || error) return <View />;

  return (
    <TouchableHighlight
      onPress={() => (isBookmarked ? deleteFeed() : saveFeed())}>
      <View>
        {isBookmarked ? (
          <Icon name={'bookmark'} color={_const.COLOR_MAINRED} size={30} />
        ) : (
          <Icon
            name={'bookmark-border'}
            color={_const.COLOR_MAINRED}
            size={30}
          />
        )}
      </View>
    </TouchableHighlight>
  );
}

Bookmark.propTypes = {
  feedId: PropTypes.number,
};
