import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import _const from '../../../lib/const';
import ListScreen from '../../_Shared/ListScreen';
import _queries from '../../../api/feeds/queries';

export default function SourceScreen({navigation}) {
  const {loading, error, data, fetchMore, refetch} = useQuery(
    _queries.GET_ALL_FEEDS_FILTER_BY_SOURCE,
    {
      variables: {
        limit: _const.PAGINATION_LIMIT,
        offset: 0,
        source_id: navigation.state.params.id,
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
        limit: _const.PAGINATION_LIMIT,
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
  );
}

SourceScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
