import gql from "graphql-tag";
export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      name
    }
  }
`;
