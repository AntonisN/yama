import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const IMG_API = 'https://image.tmdb.org/t/p/w500/'

const Movie = (props) => {
	
	return (
		<>
			{props.movies.map((movie) => (
				<div key={movie.id} className="d-flex justify-content-start m-3">
					<Card style={{ width: '15rem' }}>
						<Card.Img
							variant="top"
							src={IMG_API + movie.poster_path}
							alt={movie.title}
						/>
						<Card.Body>
							<Card.Title>{movie.title}</Card.Title>
							<Card.Text>
								<p> Release Date : {movie.release_date}</p>
								<span>Score : {movie.vote_average}</span>
								{/* <p>{movie.overview}</p> */}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<div className="d-flex justify-content-center">
								<Button variant="outline-dark">Trailer</Button>
							</div>
						</Card.Footer>
					</Card>
				</div>
			))}
		</>
	)
}

export default Movie
