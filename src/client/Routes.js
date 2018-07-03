import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Dynamic from './components/Dynamic';
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default () => {
    return [
            <Route exact path="/" component={Home} key="1" />,
            <Route path="/hi" component={() => 'Hi'} key="2"  />,
            <Route path="/exchangeRates" component={ExchangeRates} key="3"  />,
            <Route path="/dynamic" component={Dynamic} key="4"  />
        ];
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
                <div key={currency} onClick={() => {
                    console.log(rate);
                }}>
                    <p>{`${currency}: ${rate}`}</p>
                </div>
            ));
        }}
    </Query>
);