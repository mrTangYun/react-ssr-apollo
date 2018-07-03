import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/hi" component={() => 'Hi'} />
            <Route path="/exchangeRates" component={ExchangeRates} />
        </div>
    );
};

const ExchangeRates = () => (
    <Query
        query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.rates.map(({ currency, rate }) => (
                <div key={currency}>
                    <p>{`${currency}: ${rate}`}</p>
                </div>
            ));
        }}
    </Query>
);