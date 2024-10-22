import { useEffect, useRef, useState } from 'react'
import './titleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {

  const [apiData, setapiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmRhODBiMzBmMTViOTJmYjYyNjhlZGVhYjEyNWZjOSIsIm5iZiI6MTcyOTM4OTI4My42Mjc4MjYsInN1YiI6IjY3MTQ2MGYxMGNiNjI1MmY5OTA4OGMzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acwdjeu_t-sxaWns2Wzxswjgsu3KPUPCjcUKOo8P8DA'
    }
  };


  const handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(() => {

      
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setapiData(response.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='title-Cards'>
      <h2>{title?title:"popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
         {apiData.map((card, index)=> {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
         })}
      </div>
    </div>
  )
}

export default TitleCards
