import React from 'react';

class MyArrayComponent extends React.Component {
    render() {
        return <div key="1">first element</div>;
    }
}
class MyStringComponent extends React.Component {
    render() {
        return "hey there";
    }
}
class MyNumberComponent extends React.Component {
    render() {
        return 2;
    }
}

export default MyArrayComponent;