import React, {useState} from 'react';
import InputNumber from './Input/index.js';

function App(){
    const [value,setValue] = useState('aaa')
    let dValue = '1'
    return (
        <div>
          <InputNumber value={value}  onChange={(e) => {setValue(e.target.value)}}/>
          <InputNumber defaultValue={dValue} onChange={(e) => {
              dValue = e.target.value
          }}/>
        </div>
    )
   
  }
  

export default App;
