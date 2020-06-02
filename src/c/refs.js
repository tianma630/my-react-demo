import React from 'react';

// ref转发 用于在父组件中获取子组件节点的ref
const FancyButton = React.forwardRef((props, ref) => (
    <p ref={ref} style={{width: '100px', height: '30px', backgroundColor: 'yellow', textAlign: 'center'}}>
      {props.children}
    </p>
  ));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.ref1, this.ref2);

        this.ref1.current.style.backgroundColor = 'green';
        this.ref2.current.style.backgroundColor = 'purple';
    }

    render() {
        return (
            <>
                <div ref={this.ref1} style={{width: '100px', height: '100px', backgroundColor: 'red'}} onClick={this.handleClick}>
                    click to change color
                </div>
                <FancyButton ref={this.ref2}>
                    submit
                </FancyButton>
            </>
        )
        
    }
}



export default App;