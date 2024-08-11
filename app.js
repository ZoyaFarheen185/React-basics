import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'hello H1'),
    React.createElement('h1', {}, 'hello H2'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'hello H1'),
    React.createElement('h1', {}, 'hello H2'),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
