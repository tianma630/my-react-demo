import React from 'react';

function Cat(props) {
    return <img src="./cat.jpg" alt="cat" style={{width: '100px', height: '110px', position: 'absolute', left: props.mouse.left, top: props.mouse.right}} />
}

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
            <h1>移动鼠标!</h1>

            {this.props.render({left: this.state.x, right: this.state.y})}
        </div>
        );
    }
}

function App() {
    return <MouseTracker render={mouse => <Cat mouse={mouse} />} />
}

export default App;