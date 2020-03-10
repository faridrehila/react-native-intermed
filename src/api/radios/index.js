import {gql} from 'apollo-boost';

const GET_ALL_RADIOS = gql`
  query GetAllRadios($limit: Int!, $offset: Int!) {
    radios(limit: $limit, offset: $offset, order_by: {title: desc}) {
      id
      title
      website
      link
      image
    }
    radios_aggregate {
      aggregate {
        count(distinct: true)
      }
    }
  }
`;

export default {
  GET_ALL_RADIOS,
};
