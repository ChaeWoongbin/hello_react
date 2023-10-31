import { TextField } from '@mui/material';
import React from 'react';
import {useState} from 'react';



const Menu1_1 = () => {

  const [text, setText] = useState('');

  const f_setText = event => {
    setText(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <div className="App">
        Menu1_1 Page

        

        <div>텍스트 입력 테스트
          <br/>
      <TextField
        type="text"
        id="message"
        name="message"
        onChange={f_setText}
        value={text}
      />

      <h2>입력 텍스트: {text}</h2>
    </div>
    </div>
  );
}

export default Menu1_1;
