/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagePanel, setImagePanel] = useState('');

  const handleApi = async (e) => {
    setImage(e.target.files[0]);
    // call the api
    const url = `${process.env.REACT_APP_API_KEY}/api/v1/accounts/edit-user/${userInfo.id}/`;

    const formData = new FormData();
    formData.append('avatarUrl', image);
    setLoading(true);

    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    axios
      .post(url, formData, config)
      .then((result) => {
        const imageUrl = result.data.avatarUrl;
        setImagePanel(`${process.env.REACT_APP_API_KEY}${imageUrl}`);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(true);
  };

  return (
    <div className="App">
      <h1>Upload Image</h1>
      <input type="file" name="file" placeholder="Upload an image" onChange={handleApi} />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={`${process.env.REACT_APP_API_KEY}${image}`} style={{ width: '300px' }} alt="" />
      )}
    </div>
  );
}

export default App;
