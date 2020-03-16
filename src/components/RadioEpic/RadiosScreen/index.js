import React, {useEffect} from 'react';
import TrackPlayer from 'react-native-track-player';
import {useQuery} from '@apollo/react-hooks';

import ListScreen from '../../_Shared/ListScreen';
import _queries from '../../../api/radios';
import _const from '../../../lib/const';
import IntermedScreen from '../../_Shared/IntermedScreen';

export default function RadiosScreen({navigation}) {
  useEffect(() => {
    TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  }, []);

  const {loading, error, data, fetchMore, refetch} = useQuery(
    _queries.GET_ALL_RADIOS,
    {
      variables: {
        limit: _const.PAGINATION_LIMIT,
        offset: 0,
      },
    },
  );

  const onPressItem = async ({id, link, title, image}) => {
    TrackPlayer.reset().then(() => {
      TrackPlayer.add({
        id: id,
        url: link,
        title: title,
        artiste: 'moi',
        artwork: image,
      });
    });
  };

  const onLoadNextPage = cb => {
    fetchMore({
      variables: {
        offset: data && data.feeds.length,
        limit: 15,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        cb && cb();
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          feeds: [...prev.feeds, ...fetchMoreResult.feeds],
        });
      },
    });
  };

  const onRefresh = () => {
    refetch && refetch();
  };

  return (
    <IntermedScreen navigation={navigation}>
      <ListScreen
        data={(data && data.radios) || []}
        isFetching={loading}
        error={error}
        count={(data && data.radios_aggregate.aggregate.count) || 0}
        navigation={navigation}
        onLoadNextPage={onLoadNextPage}
        onRefresh={onRefresh}
        onPressItem={onPressItem}
      />
    </IntermedScreen>
  );
}

RadiosScreen.navigationOptions = {
  title: 'Playlist Example',
};
