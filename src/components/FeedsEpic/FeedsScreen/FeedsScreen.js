import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from '@apollo/react-hooks';

import ListScreen from '../../_Shared/ListScreen';
import _queries from '../../../api/feeds/queries';
import _const from '../../../lib/const';
import IntermedScreen from '../../_Shared/IntermedScreen';

export default function FeedsScreen({navigation}) {
  const {loading, error, data, fetchMore, refetch} = useQuery(
    _queries.GET_ALL_FEEDS,
    {
      variables: {
        limit: _const.PAGINATION_LIMIT,
        offset: 0,
      },
    },
  );

  const onPressItem = (link, title) => {
    navigation.navigate('FeedScreen', {
      feedUrl: link,
      title: title,
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
    <IntermedScreen>
      <ListScreen
        data={(data && data.feeds) || []}
        isFetching={loading}
        error={error}
        count={(data && data.feeds_aggregate.aggregate.count) || 0}
        navigation={navigation}
        onLoadNextPage={onLoadNextPage}
        onRefresh={onRefresh}
        onPressItem={onPressItem}
      />
    </IntermedScreen>
  );
}

FeedsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
