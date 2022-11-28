import React from 'react';
import { riddlesItems } from './riddlesData';
import OneManyItem from './riddlestem';
import './riddles.css';

const Riddles: React.FC = () => {

  return (
    <div className='one-many-page'>
      <h1>Отгадай загадки и назови детёныша</h1>
      <div className='one-many-game-container'>
        {riddlesItems.map(item =>
          <OneManyItem
            key={item.id + 'parent'}
            src1={item.src2}
            src2={item.src1}
          />)
        }
      </div>
    </div>
  )
}

export default Riddles