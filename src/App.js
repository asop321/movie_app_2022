import React from 'react';
import propTypes from 'prop-types';


/* function Fruit(props){
  console.log(props);
  return (
    <h1>{props.fav} 맛있어요</h1>
  )
} */

/* 구조분해할당 */
function Fruit({ name, picture ,rating }) {
  console.log(name)
  return (
    <div>
      <h2>
        {name}맛있어요
      </h2>
      <h4>{rating} / 5.0</h4>
      <img src= {picture} alt={name}/>
    </div>
  )
}
const FruitLike = [
  {
    id:1,
    name: '바나나',
    image: 'http://qwerew.cafe24.com/images/banana.png',
    rating:5,
  },
  {
    id:2,
    name: '오렌지',
    image: 'http://qwerew.cafe24.com/images/orange.png',
    rating:4.9,

  },
  {
    id:3,
    name: '사과',
    image: 'http://qwerew.cafe24.com/images/apple.png',
    rating:3,

  },
  {
    id:4,
    name: '메론',
    image: 'http://qwerew.cafe24.com/images/melon.jpg',
    rating:4.8,

  },
]

/* function renderFruit(dish){
    return <Fruit key={dish.id} name={dish.name} picture={dish.image}/>
} */

function App() {
  return (
   
   <div>
      {FruitLike.map((dish) => (
        <Fruit key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div> 
  
  )
}

Fruit.propTypes={
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
}


export default App
