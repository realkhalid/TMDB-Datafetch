import React, {useState, useEffect} from 'react'
import './row.css'
import axios from './axios'


const base_URL = "http://image.tmdb.org/t/p/original";

const Row = ({fetchUrl}) => {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])

  return (
    <div className='row'>{movies.map(movie => {
      return (
        <img key={movie.id} src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
      )
    })}</div>
  )
}

export default Row