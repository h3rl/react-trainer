

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
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/create" style={createStyleNav}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;