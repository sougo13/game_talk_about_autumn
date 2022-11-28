import React from 'react';
import { tenderlyImages } from './tenderlyData';
import TenderlyItem from './TenderlyItem';
import './tenderly.css';

const Tenderly: React.FC = () => {
  return (
    <div className='tenderly-page'>
      <h1>Назови ласково</h1>
      {
        tenderlyImages.map((image, i) =>
          <TenderlyItem key={i} src={image.src} />)
      }
    </div>
  )
}

export default Tenderly;