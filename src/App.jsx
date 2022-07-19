import React, { useState, useEffect } from 'react';
import './index.css';
import ItemCount from './components/ItemCount';

export default function App() {

  return (
    <div className="App">
      <ItemCount stock="5" initial="1" />
    </div>
  );
}
