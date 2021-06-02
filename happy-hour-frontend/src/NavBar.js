import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <>
        <Link to="/bars">All Verified Bars</Link>
        <Link to="/bars/new">Verify Bar</Link>
        </>
    )
}