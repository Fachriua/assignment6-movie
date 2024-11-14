import {useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import axios from 'axios'

import { useSelector, useDispatch } from "react-redux";

function App() {
  const [search, setSearch] = useState('batman')

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const getMovies = async () => {
    if(search === '') {
      const { data } = await axios(`https://www.omdbapi.com/?apikey=d7e60fee&s=batman`)
      dispatch({type: 'GET_DATA', payload: {allMovie: data.Search}})
    } else {
      const { data } = await axios(`https://www.omdbapi.com/?apikey=d7e60fee&s=${search}`)
      dispatch({type: 'GET_DATA', payload: {allMovie: data.Search}})
    }
   
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <>
    <div className="container">
      <Header 
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        title="Fachri.net"
      />
      <Movie 
        allMovie={state.allMovie}
      />
      </div>
    </>
  )
}

export default App
