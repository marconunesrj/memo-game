// const part1 = "Hello, ";
// const part2 = "world!";
// console.log(part1 + part2);

import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

// function App() {
//     return React.createElement('div', null,
//         React.createElement('h1', null, 'Hello, World!')
//     );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

