const heading = React.createElement(
  'h1',
  { xyz: 'abc.' },
  'Hello zoya 11/08/2024'
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// console.log(heading);

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
console.log(heading);
