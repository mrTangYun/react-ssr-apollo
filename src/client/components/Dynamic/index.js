import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default  () => (
    <Query
        query={gql`
      {
        core{
          id
          session{
            isLoggedIn
          }
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return <div>{data.core.session.isLoggedIn ? '已经登录': '未登录'}</div>;
        }}
    </Query>
);