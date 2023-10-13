import React from 'react';
import TextInput from './TextInput';
import MediaInput from './MediaInput';
import { useParams } from 'react-router-dom';

const DisplayAdData = () => {
  const { selectedAd } = useParams();

  return (
    <div>
      {selectedAd === 'text' ? (
        <TextInput />
      ) : selectedAd === 'media' ? (
        <MediaInput />
      ) : null}
    </div>
  );
};

export default DisplayAdData;
