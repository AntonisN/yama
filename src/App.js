import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import Navbarr from './components/Navbar'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const POPULAR_API =
	'http://api.themoviedb.org/3/movie/popular?api_key=7953178cf3f206567f7b3ea5f2942f01'

// const SEARCH_MOVIES =
// 	'https://api.themoviedb.org/3/search/movie?api_key=7953178cf3f206567f7b3ea5f2942f01&language=en-US&query='

const App = () => {
	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		const getMovie = async () => {
			const results = await axios.get(POPULAR_API)
			setMovies(results.data.results)
			console.log(results.data)
		}
		getMovie()
	}, [])

	// useEffect(() => {
	// 	const searchMovie = async () => {
	// 		const results = await axios.get(SEARCH_MOVIES + search)
	// 		setSearch(results.data.results)
	// 		console.log(setSearch)
	// 	}
	// 	searchMovie()
	// }, [search])

	return (
		<>
			<Container>
				<Navbarr search={search} setSearch={setSearch} />
			</Container>

			<Container>
				<Row>
					<Movie movies={movies} />
				</Row>
			</Container>
		</>
	)
}

export default App
