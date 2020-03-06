import {gql} from 'apollo-boost';

const GET_ALL_FEEDS = gql`
  query GetAllFeeds($limit: Int!, $offset: Int!) {
    feeds(limit: $limit, offset: $offset, order_by: {pubDate: desc}) {
      author
      body
      categorie
      id
      image
      link
      pubDate
      readTime
      summary
      title
      type
      source {
        name
        id
      }
    }
    feeds_aggregate {
      aggregate {
        count(distinct: true)
      }
    }
  }
`;

const GET_ALL_FEEDS_FILTER_BY_TYPE = gql`
  query GetAllFeedsByType($limit: Int!, $offset: Int!, $type: String!) {
    feeds(
      limit: $limit
      offset: $offset
      order_by: {pubDate: desc}
      where: {type: {_eq: $type}}
    ) {
      author
      body
      categorie
      id
      image
      link
      pubDate
      readTime
      summary
      title
      type
      source {
        name
        id
      }
    }
    feeds_aggregate {
      aggregate {
        count(distinct: true)
      }
    }
  }
`;

const GET_ALL_FEEDS_FILTER_BY_SOURCE = gql`
  query GetAllFeedsBySource($limit: Int!, $offset: Int!, $source_id: Int!) {
    feeds(
      limit: $limit
      offset: $offset
      order_by: {pubDate: desc}
      where: {source_id: {_eq: $source_id}}
    ) {
      author
      body
      categorie
      id
      image
      link
      pubDate
      readTime
      summary
      title
      type
      source {
        name
        id
      }
    }
    feeds_aggregate {
      aggregate {
        count(distinct: true)
      }
    }
  }
`;

export default {
  GET_ALL_FEEDS,
  GET_ALL_FEEDS_FILTER_BY_TYPE,
  GET_ALL_FEEDS_FILTER_BY_SOURCE,
};
