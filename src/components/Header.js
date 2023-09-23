const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Brand Logo</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            {/* <li className="nav-item"><a className="nav-link" href="/about">About</a></li> */}
            {/* ... Add other navigation links similarly ... */}
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Header;