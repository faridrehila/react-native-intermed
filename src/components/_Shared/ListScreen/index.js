import React, {useState} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import _const from '../../../lib/const';
import ListItem from './ListItem';
import EmptyListScreen from './EmptyListScreen';
import FooterListScreen from './FooterListScreen';

export default function ListScreen({
  data,
  isFetching,
  count,
  navigation,
  onLoadNextPage,
  onRefresh,
  onPressItem,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const _renderItem = ({item}) => {
    console.log('ITEM', item);
    return (
      <ListItem
        key={item.id}
        id={item.id}
        title={item.title}
        link={item.link}
        image={item.image}
        pubDate={item.pubDate}
        duration={item.readTime}
        source={item.source}
        navigation={navigation}
        onPressItem={onPressItem}
      />
    );
  };

  const _onEndReach = () => {
    if (
      !loadingNextPage &&
      Math.floor(count / _const.PAGINATION_LIMIT) > currentPage
    ) {
      setLoadingNextPage(true);
      onLoadNextPage(() => {
        setCurrentPage(currentPage + 1);
        setLoadingNextPage(false);
      });
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.id + ''}
      renderItem={_renderItem}
      ListEmptyComponent={() => <EmptyListScreen isFetching={isFetching} />}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      onEndReachedThreshold={0.3}
      onEndReached={_onEndReach}
      ListFooterComponent={() => (
        <FooterListScreen loadingNextPage={loadingNextPage} />
      )}
    />
  );
}

ListScreen.propTypes = {
  data: PropTypes.array.isRequired,
  onLoadNextPage: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  isFetching: PropTypes.bool,
  count: PropTypes.number,
  onPressItem: PropTypes.func,
};
