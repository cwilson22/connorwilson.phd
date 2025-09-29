import React from 'react';
import data from './data/portfolio.json'
import Pages from './pages'

function App() {
  return (
    <Pages user={data} />
  );
}

export default App;
