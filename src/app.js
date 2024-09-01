import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
// const title = () => <h1>this is titile</h1>;
// const Header = () => (
//   <div className="header">
//     <h1>hello this is header</h1>
//     {title()}
//   </div>
// );

// RestaurantList is JSON Data for displaying cards

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
