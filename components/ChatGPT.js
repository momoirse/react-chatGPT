import React, { useState } from 'react';
import { generateResponse } from '../utils/chat_gpt_utils';

function ChatGPT() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [model, setModel] = useState('text-davinci-002');

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleModelChange(event) {
    setModel(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    generateResponse(input, model).then((response) => {
      setOutput(response);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Model:
          <select value={model} onChange={handleModelChange}>
            <option value="text-davinci-002">text-davinci-002</option>
            <option value="text-babbage-001">text-babbage-001</option>
            <option value="text-curie-001">text-curie-001</option>
          </select>
        </label>
        <br />
        <button type="submit">Generate</button>
      </form>
      <br />
      <label>Output:</label>
      <br />
      <textarea value={output} rows="4" cols="50" readOnly />
    </div>
  );
}

export default ChatGPT;
