import {gql} from 'apollo-boost';

const ALL_FEEDBACK = gql`
  mutation MyMutation($email: String!, $comment: String!) {
    insert_feedback(objects: {comment: $comment, email: $email}) {
      affected_rows
    }
  }
`;

export default {ALL_FEEDBACK};
