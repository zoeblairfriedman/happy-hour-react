import {Link} from 'react-router-dom'


export default function NavBar() {
    return (
        <div class="nav">
        <Link to="/bars" className="navli">Bars
        </Link>
        <Link to="/bars/new" className="navli">Add Bar
        </Link>
        <Link to="/bars/now" className="navli">Now
        </Link>
        </div>
    )
}