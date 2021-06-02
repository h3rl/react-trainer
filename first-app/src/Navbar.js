import {Link} from "react-router-dom";

const Navbar = () => {

  const createStyleNav = {
    color: "white",
    backgroundColor: "#f1356d",
    borderRadius: '8px',
  }

  return (
    <nav className="navbar">
      <h1>My Personal Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create" style={createStyleNav}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;