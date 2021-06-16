import {NavLink} from 'react-router-dom'


export default function NavBar() {
    return (
        <div className="nav">
        <NavLink to="/bars" className="navli">Bars
        </NavLink>
        <NavLink to="/bars/new" className="navli">Add Bar
        </NavLink>
        <NavLink to="/bars/now" className="navli">Now
        </NavLink>
        </div>
    )
}