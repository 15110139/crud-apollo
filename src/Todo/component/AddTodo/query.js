import gql from "graphql-tag";
export const addUser = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }
`;
