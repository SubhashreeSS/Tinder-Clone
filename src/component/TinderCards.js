import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {

  return (
    <div className='card-cotainer'>
      {
        CardData.map( card =>(
          <TinderCard
          className='swipe'
          key={card.name}
          preventSwipe={['up','down']}
          >
            <div
              style={{backgroundImage: `url(${card.url})`}}
              className='card'
            >
              <h3>{card.name}, {card.age}</h3>
              <h5>{card.job}</h5>
              
              
            </div>
          </TinderCard>
        ))
      }
    </div>
  )
}

export default TinderCards
