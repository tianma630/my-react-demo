import React from 'react';
import PropTypes from 'prop-types'

class Parent extends React.Component {

  // 声明context字段类型
  static childContextTypes = {
    name:  PropTypes.string,
  }

  // 获取context字段内容
  getChildContext() {
    return {
      name: this.props.name,
    }
  }

  render() {
    return (
      <div>
        parent: {React.Children.only(this.props.children)}
      </div>
    )
  }
}

class Middle extends React.Component {

  static childContextTypes = {
    age: PropTypes.number,
  }

  getChildContext() {
    return {
      age: this.props.age,
    }
  }

  // 声明需要用到的context字段类型
  static contextTypes = {
    name: PropTypes.string,
  }

  render() {
    return (
      <div>
        middle:  from parent: {this.context.name} {React.Children.only(this.props.children)}
      </div>
    );
  }
}

class Child extends React.Component {

  static contextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  }

  render() {
    const {name, age} = this.context;

    return (
      <div>child: from parent: {name} - from middle: {age}</div>
    );
  }
}

class App extends React.Component {

  render() {
    return (
      <Parent name={'wjwjwj'}>
        <Middle age={121212}>
          <Child />
        </Middle>
      </Parent>
    )
  }

}

export default App;
