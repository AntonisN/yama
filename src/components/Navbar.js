import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Navbarr = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<Navbar bg="dark" fixed="top">
				<Navbar.Brand href="#home">YAMA</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#popular">Popular</Nav.Link>
						<Nav.Link href="#trending">Trending</Nav.Link>
						<Nav.Link href="#favs">Favorites</Nav.Link>
					</Nav>
					<Form inline onSubmit={handleSubmit}>
						<FormControl
							type="search"
							placeholder="Search"
							className="mr-sm-2"
							value={props.value}
							onChange={(e) => props.setSearch(e.target.value)}
						></FormControl>
						<Button
							variant="outline-success"
							type="submit"
							onClick={(e) => props.setSearch(e.target.value)}
						>
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default Navbarr
