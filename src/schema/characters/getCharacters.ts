import { gql } from '@apollo/client';

const getCharacters = gql`
  query getCharacters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
      }
    }
  }
`;

export default getCharacters;
