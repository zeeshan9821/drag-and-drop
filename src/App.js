import React from 'react';

import './App.css';
import Dropzone from "./dropzone/Dropzone";

function App() {
  return (
    <div>
      <p className="title" style={{color:"purple"}}>React Drag and Drop Image Upload</p>
      <div className="content">
        <Dropzone />
      </div>
    </div>
  );
}

export default App;
