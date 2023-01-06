import React, { useState } from 'react';
import { generateContent } from '../utils/content_generator_utils';

function ContentGenerator() {
  const [type, setType] = useState('title');
  const [domain, setDomain] = useState('');
  const [keywords, setKeywords] = useState('');
  const [output, setOutput] = useState('');

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleDomainChange(event) {
    setDomain(event.target.value);
  }

  function handleKeywordsChange(event) {
    setKeywords(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    generateContent(type, domain, keywords).then((response) => {
      setOutput(response);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select value={type} onChange={handleTypeChange}>
            <option value="title">Title</option>
            <option value="section_names">Section Names</option>
            <option value="subcontent">Subcontent</option>
            <option value="paragraph">Paragraph</option>
          </select>
        </label>
        <br />
        <label>
          Domain:
          <input type="text" value={domain} onChange={handleDomainChange} />
        </label>
        <br />
        <label>
          Keywords:
          <input type="text" value={keywords} onChange={handleKeywordsChange} />
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

export default ContentGenerator;
