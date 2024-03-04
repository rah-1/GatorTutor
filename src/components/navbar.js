export const Navbar = () => {
    return (
        <nav className="navbar cont test navbar-expand-lg navbar-dark navbar-color my-0 py-0 pl-0">
    <img className="logo mr-0 py-0 my-0" src="uf.png" alt="UF Logo" />
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="cont2 item collapse navbar-collapse flex-column align-items-end my-0"
      id="navbarCollapse"
    >
      {/* navbar1 */}
      <div
        className="item2  title-background mr-auto "
        style={{ paddingLeft: "1%" }}
      >
        <div className="  navbar-nav mb-lg-0 mr-auto ">
          <h2 className="pgtitle">CISE ACADEMIC TUTORING CENTER</h2>
        </div>
      </div>
      {/* navbar2 */}
      <div className="item2 d-flex " style={{ paddingLeft: "1%" }}>
        <ul className=" navbar-nav mt-0 mr-auto ">
          <li className="nav-item dropdown">
            <a
              className="navop nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Waitlist{" "}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Enter Waitlist
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                View Waitlist{" "}
                <span className="badge bg-primary rounded-pill ms-auto">4</span>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link navop" href="#">
              Calendar{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link navop"
              href="#"
              style={{ backgroundColor: "#f37021" }}
            >
              Tutors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navop" href="#">
              Resources
            </a>
          </li>
        </ul>
        <form className="ms-auto d-flex form-inline pe-3 my-2">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        {/* 
                          <form class="ml-auto form-inline pr-3 my-2 my-lg-0">
                              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                          </form> */}
      </div>
    </div>
  </nav>
    )
}