import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Lovelist from '../components/file/Lovelist';
import Page from '../components/Page';
import { FilesContext } from '../Contexts/filesContext';

const Searched = () => {
  const [searchVal, setSearchVal] = useState([]);
  const { searchInput } = useContext(FilesContext);

  const getSearched = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-search/?q=${searchInput}`);
    setSearchVal(response.data.results);
  };
  useEffect(() => {
    getSearched();
  }, [searchInput]);
  return (
    <Page title="Search">
      <div className="x">
        <h2>Searched Files</h2>
        <div className="Maingallery">
          {searchVal?.map((file, index) => (
            <div className="pics" key={index}>
              <div key={file.id}>
                <a href={`/file/${file.id}`}>
                  <img src={file.image} style={{ width: '100%' }} alt={file.title} />
                </a>
                <div className="Filesumb">
                  <div className="imgc">
                    <a href="">
                      <img src={file.owner.profileimage} alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <h4>{file.title}</h4>
                    <h6>
                      {file.owner.username} , in {file.date}{' '}
                    </h6>
                  </div>
                </div>
              </div>
              <Lovelist fileId={file.id} />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Searched;
