import UF_Logo from '../images/uf.png';

export const Navbar = () => {
    return (
        <>
        <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n.team-member {\n            border: 1px solid #ccc;\n            border-radius: 8px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            margin: 20px;\n            padding: 20px;\n            display: flex;\n            flex-direction: column;\n        \n        }\n        .team-member row {\n            display: flex;\n        }\n\n    .nav-tabs .nav-item .nav-link{\n        padding-right: 0.75rem; /* Adjust the right margin */\n        padding-left: 0.75rem;\n        color: #00529b !important;\n    }\n        \n        .team-member col {\n            flex: 1;\n            padding: 20px;\n        }\n        .grid {\n        display: grid;\n        grid-auto-rows: auto;\n        max-width: 100vw;\n        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n        }\n        .team-member img {\n            width: 50%;\n            height: 9.5rem;\n            border-radius: 50%;\n            margin-bottom: 10px;\n        }\n\n        .team-member .tab-content{\n\n          margin-top: 0.75rem;\n\n        }\n\n        .team-member h2 {\n            margin-top: 0;\n        }\n\n  .navop2 {\n          border: 3px solid black;\n        }\n\n\n        .logo {\n            width: 8% !important;\n            height: auto !important;\n        }\n\n        .test {\n            padding-left: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n            padding-right: 0px !important;\n        }\n\n        .pgtitle {\n            color: #00529b;\n        }\n\n        .cont {\n            align-items: stretch;\n            }\n\n        .item {\n            flex:  1;\n            /* Optional: Add additional styling as needed */\n            }\n\n        .cont2 {\n            align-items: stretch;\n        }\n\n        .item2 {\n            flex:  1;\n            display: flex;\n            align-items: center;\n            flex-grow: 1;\n            width: 100%;\n            /* Optional: Add additional styling as needed */\n            }\n\n            .navbar-color {\n                background: #00529b;\n            }\n\n            .navop {\n            /* border: 2px solid black; */\n            margin-right: 30px;\n            border-radius: 6px;\n            color: #fff !important;\n            background-color: #00529b ;\n            \n            }\n\n            .rounded-pill {\n              background-color: #00529b !important;\n            }\n\n        .navop:hover {\n           transition: 0s ;\n           background-color: #f37021 ;\n           /* color: #00529b !important; */\n         }\n\n         .navop:active {\n           /* background-color: #f37021; */\n           transition: 0s ;\n           background-color: rgba(243, 112, 33, 0.7);\n           /* color: #00529b !important; */\n         }\n\n        .navbar {\n            \n            font-weight: bold;\n        }\n\n        .badge.bg-dark {\n          \n          background-color: #00529b !important;\n        }\n\n        .badge.btn.btn-outline-dark\n        {\n          color: #00529b;\n          border-color: #00529b;\n        }\n\n        .badge.btn.btn-outline-dark:hover\n        {\n          color: white;\n          background-color: #00529b;\n        }\n\n        .title-background {\n      background: white;\n    }\n        \n\n\n\n\n"
    }}
  />
        <nav className="navbar cont test navbar-expand-lg navbar-dark navbar-color my-0 py-0 pl-0">
    <img className="logo mr-0 py-0 my-0" src={UF_Logo} alt="UF Logo" />
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
  </>
    )
}