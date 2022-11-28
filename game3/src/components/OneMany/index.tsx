import React from 'react';
import { oneManyItems } from './oneManyData';
import OneManyItem from './oneManyItem';
import './oneMany.css';

const OneMany: React.FC = () => {

  return (
    <div className='one-many-page'>
      <h1>Один-много</h1>
      <div className='one-many-game-container'>
        {oneManyItems.map(item =>
          <OneManyItem
            key={item.id + 'parent'}
            src1={item.src1}
            src2={item.src2}
          />)
        }
      </div>
    </div>
  )
}

export default OneMany