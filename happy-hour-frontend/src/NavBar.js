import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <>
        <Link to="/bars">All Bars</Link>
        <Link to="/bars/new">Verify Bar</Link>
        <Link to="/bars/now">Happy Now</Link>
        </>
    )
}