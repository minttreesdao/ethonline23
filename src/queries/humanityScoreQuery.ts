// src/queries/humanityScoreQuery.ts
import { gql } from '@apollo/client';

export const HUMANITY_SCORE_QUERY = gql`
  query findIdentitySources($identity: String!) {
    identity(platform: "ethereum", identity: $identity) {
      neighbor(depth: 5) {
        sources
      }
    }
  }
`;
