import React from 'react';

const Other = React.lazy(() => new Promise(resolve =>
    setTimeout(() =>
      resolve(
        // 模拟ES Module
        {
          // 模拟export default 
          default: function render() {
            return <div style={{color: 'green'}}>data loaded</div>
          }
        }
      ),
      1500
    )
  ));

function App() {
    return (
        <React.Suspense fallback={<h1 style={{color: 'red'}}>data loading</h1>}>
            <Other />
        </React.Suspense>
    );
}

export default App;