import { Navbar } from "./navbar"
export const Resources = () => {
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
              "\n.team-member {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin: 20px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.team-member row {\n  display: flex;\n}\n\n.nav-tabs .nav-item .nav-link{\n  padding-right: 0.75rem; /* Adjust the right margin */\n  padding-left: 0.75rem;\n  color: #00529b !important;\n}\n\n.team-member col {\n  flex: 1;\n  padding: 20px;\n}\n\n.grid {\n  display: grid;\n  grid-auto-rows: auto;\n  max-width: 100vw;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n.team-member img {\n  width: 50%;\n  height: 9.5rem;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\n\n.team-member .tab-content{\n  margin-top: 0.75rem;\n}\n\n.team-member h2 {\n  margin-top: 0;\n}\n\n.navop2 {\n  border: 3px solid black;\n}\n\n\n.logo {\n  width: 8% !important;\n  height: auto !important;\n}\n\n.test {\n  padding-left: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-right: 0px !important;\n}\n\n.pgtitle {\n  color: #00529b;\n}\n\n.cont {\n  align-items: stretch;\n}\n\n.item {\n  flex:  1;\n}\n\n.cont2 {\n  align-items: stretch;\n}\n\n.item2 {\n  flex:  1;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  width: 100%;\n}\n\n.navbar-color {\n  background: #00529b;\n}\n\n.navop {\n  margin-right: 30px;\n  border-radius: 6px;\n  color: #fff !important;\n  background-color: #00529b ;\n}\n\n.rounded-pill {\n  background-color: #00529b !important;\n}\n\n.navop:hover {\n  transition: 0s ;\n  background-color: #f37021 ;\n}\n\n.navop:active {\n  transition: 0s ;\n  background-color: rgba(243, 112, 33, 0.7);\n}\n\n.navbar {\n  font-weight: bold;\n}\n\n.badge.bg-dark {\n  background-color: #00529b !important;\n}\n\n.badge.btn.btn-outline-dark\n{\n  color: #00529b;\n  border-color: #00529b;\n}\n\n.badge.btn.btn-outline-dark:hover\n{\n  color: white;\n  background-color: #00529b;\n}\n\n.title-background {\n  background: white;\n}\n"
          }}
        />
        <Navbar />
        <div className="container-md" style={{ width: "70%" }}>
          {/* List group */}
          <ul className="nav nav-tabs">
            <li className="nav-item ">
              <a
                data-bs-toggle="tab"
                className="nav-link display-6 "
                style={{ fontSize: "2rem" }}
                aria-current="page"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="tab"
                className="nav-link display-6 "
                style={{ fontSize: "2rem" }}
                href="#avail"
              >
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="tab"
                className="nav-link display-6 "
                style={{ fontSize: "2rem" }}
                href="#course"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="about" className="tab-pane fade in">
              <p className="mt-4 ml-2">
                The premier tutoring service... For Free.
              </p>
            </div>
            <div id="avail" className="tab-pane fade">
              {/* Your FAQs content */}
            </div>
            <div id="course" className="tab-pane fade">
              {/* Your contact content */}
            </div>
          </div>
        </div>
      </>
    );
  };
  