import React from 'react';
import './App.css';
import Layout from '../src/components/Layout/Layout';
import BurgerBuilder from '../src/containers/Burger-Builder/Burger-Builder'

function App() {
  return (
    <div >
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
