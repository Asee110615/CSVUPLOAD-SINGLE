import React, { useState } from 'react';
import { publicRequest } from './utils/publicRequest';

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append('file', e.target.file.files[0]); // Updated to access file input using name 'file'
    await publicRequest.post('/importUser', formData);

    console.log('try')
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <form encType="multipart/form-data" onSubmit={handleSubmit} action="/importUser" method="post">
        <input type="file" name="file" />
        <button type='submit'>UPLOAD</button>
      </form>
    </div>
  );
}

export default App;
