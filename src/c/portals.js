import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>toogle modal</p>
                
                {this.state.show && 
                <Modal>
                    <div style={{width: '200px', height: '100px', color: 'red', border: '1px solid green', position: 'fixed', left: '600px', top: '300px'}}>this is a modal box</div>
                </Modal>}
            </div>
        );
    }
}

  

  export default Parent;