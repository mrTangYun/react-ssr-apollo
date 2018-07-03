import React from 'react';
import {Link} from "react-router-dom";
const Home = () => {
    return (
         <div>
            <div>This is Home Component3</div>
             <Link to={'/exchangeRates'}>
                 路径
             </Link>
            <button onClick={() => console.log('Hi there!')}>Press Me!</button>
            </div>
        );
};
export default Home;