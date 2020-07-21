import React from 'react';
import propTypes from 'prop-types';
/* import Potato from './Potato';

function Chicken(){                    //컴포넌트, 컴포넌트 이름은 Chicken
  return <h1> I like Chicken </h1>;
}
*/

function Food({name, picture, rating}){                  //fav는 props? 아무튼 유용하게 사용될 수 있다.
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating} / 5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

const foodILike = [
  {
    id:1,
    name: 'Chicken',
    image: 'http://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/223/112/491996285.jpg',
    rating: 5.0,      /* 5.0은 5로 표현되네? */
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 4.9,
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'http://www.koreadailyus.com/wp-content/uploads/2016/01/vegetarian-bibimpbap.jpg',
    rating: 4.8,
  },
  {
    id:4,
    name: 'Doncasu',
    image: 'http://www.sky7food.or.kr/data/item/0000001305/thumb-7ZS87Lm07LiE_300x360.jpgㄴ',
    rating: 4.7,
  },
  {
    id:5,
    name: 'Kimbap',
    image: 'https://i.ytimg.com/vi/O-MoqCVb73g/maxresdefault.jpg',
    rating: 4.6,
  },
];

function App() {
  return  (
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} 
        rating={dish.rating} />
    ))}
    {/*
    <h1>HEll o!!!!~!</h1>
    */}
    {/*{foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image} />
      ))}
    */}
    {/*
    <Potato />  
    <Chicken />  
    <Food fav="Kimchi"/>             Food 컴포넌트 여기서는 주석도 이렇게만 만들 수 있다.
    <Food fav="ramen" />             Food 컴포넌트
    <Food fav="samgiopsal" />        Food 컴포넌트
    <Food fav="Chukumi" />           Food 컴포넌트
    */}
    </div>
  );
}
Food.propTypes ={
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating:propTypes.number
}
export default App;
