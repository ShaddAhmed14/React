import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

/* NOTES
- Using <Link to= ... instead of <a href= ... means that instead of calling to server to send the clicked page, react routes it.
- Traditionally we have 1 page in browser and whene we click for the next we ask server to send us that page. In react we get all 
    components at the same time, and all routing happens inside the browser. This is much faster. To avoid sending to server we
    have tags like Link that forces app to use reacr routing instead of asking server. React intercepts it basically. 
*/