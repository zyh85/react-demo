import React, {useState} from 'react';
// import InputNumber from './uncontrolInput/index.js';
import InputNumber from './controlInput/index.js';

	function App(){
      const [value,setValue] = useState('aaa')
      return (
          <div>
          <InputNumber value={value} onChange={e=>{setValue(e)}}/>
          <InputNumber defaultValue={value} onChange={e=>{setValue(e)}}/>
          </div>
      )
  }
  

export default App;
