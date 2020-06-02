import React from 'react';

const ThemeContext = React.createContext({
  background: 'red',
  color: 'white'
});

class App extends React.Component {
    render () {
        return (
            <ThemeContext.Provider value={{background: 'red', color: 'white'}}>
                <Title>
                    hello world
                </Title>
            </ThemeContext.Provider>
        );
    }
}
   
class Title extends React.Component {
    render () {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <h1 style={{background: context.background, color: context.color}}>
                        {this.props.children}
                    </h1>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default App;
