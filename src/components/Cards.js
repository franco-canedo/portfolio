import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id="down" className='cards'><a href="down"></a>
      <h1>Check out my Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/eclat.png'
              text='Freelance prodcut for a homebuilder client where he can showcase his projects'
              label='React.js | Ruby on Rails'
              path='http://www.homesbyeclat.com/'
            />
            <CardItem
              src='images/colorSpeed.png'
              text='A game where players speed and ability to think quick will be tested'
              label='React.js'
              path='https://color-speed.herokuapp.com/'
            />
            <CardItem
              src='images/trivia.png'
              text='A timed Trivia quiz. Test your knowledge! Questions pulled from opentdb.com API'
              label='React.js'
              path='https://t-quiz.herokuapp.com/'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/trivia.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
