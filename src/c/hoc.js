import React from 'react';

class InnerComponent1 extends React.Component {
    render() {
        return (
            <span>{this.props.name}</span>
        )
    }
}

class InnerComponent2 extends React.Component {
    render() {
        return (
            <span>{this.props.age}</span>
        )
    }
}

const wrapComponent = function(InnerComponent, data) {
    return class extends React.Component {
        render() {
            return <InnerComponent name={data.name} age={data.age} />
        }
    }
}

function App() {
    const W1 = wrapComponent(InnerComponent1, {name: 'wjwjwj'});
    const W2 = wrapComponent(InnerComponent2, {age: 121212});
    return (
        <>
            InnerComponent1: <W1 />
            <br />
            InnerComponent2: <W2 />
        </>
    );
}

export default App;

// const ConnectedComment = connect(commentSelector, commentActions)(CommentList);