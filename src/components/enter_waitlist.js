import { Navbar } from "./navbar"
import { Link } from 'react-router-dom';

export const EnterWaitlist = () => {
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
        "\n.team-member {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin: 20px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n\n}\n.team-member row {\n  display: flex;\n}\n\n.nav-tabs .nav-item .nav-link{\npadding-right: 0.75rem; /* Adjust the right margin */\npadding-left: 0.75rem;\ncolor: #00529b !important;\n}\n\n.team-member col {\n  flex: 1;\n  padding: 20px;\n}\n.grid {\ndisplay: grid;\ngrid-auto-rows: auto;\nmax-width: 100vw;\ngrid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n.team-member img {\n  width: 50%;\n  height: 9.5rem;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\n\n.team-member .tab-content{\n\nmargin-top: 0.75rem;\n\n}\n\n.team-member h2 {\n  margin-top: 0;\n}\n\n.navop2 {\nborder: 1px solid black;\n}\n\n\n.logo {\n  width: 8% !important;\n  height: auto !important;\n}\n\n.waitlist > * {\n  text-align: center;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  border: 1px solid black;\n}\n\n.waitlist {\n  margin-top: 0.5rem;\n  border-radius: 6px;\n}\n\n.test {\n  padding-left: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-right: 0px !important;\n}\n\n.pgtitle {\n  color: #00529b;\n}\n\n.cont {\n  align-items: stretch;\n  }\n\n.item {\n  flex:  1;\n  /* Optional: Add additional styling as needed */\n  }\n\n.cont2 {\n  align-items: stretch;\n}\n\n.item2 {\n  flex:  1;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  width: 100%;\n  /* Optional: Add additional styling as needed */\n  }\n\n  .navbar-color {\n      background: #00529b;\n  }\n\n  .navop {\n  /* border: 2px solid black; */\n  margin-right: 30px;\n  border-radius: 6px;\n  color: #fff !important;\n  background-color: #00529b ;\n  \n  }\n\n  .rounded-pill {\n    background-color: #00529b !important;\n  }\n\n.navop:hover {\n transition: 0s ;\n background-color: #f37021 ;\n /* color: #00529b !important; */\n}\n\n.navop:active {\n /* background-color: #f37021; */\n transition: 0s ;\n background-color: rgba(243, 112, 33, 0.7);\n /* color: #00529b !important; */\n}\n\n.navbar {\n  \n  font-weight: bold;\n}\n\n.badge.bg-dark {\n\nbackground-color: #00529b !important;\n}\n\n.badge.btn.btn-outline-dark\n{\ncolor: #00529b;\nborder-color: #00529b;\n}\n\n.badge.btn.btn-outline-dark:hover\n{\ncolor: white;\nbackground-color: #00529b;\n}\n\n.btn.btn-outline-dark\n        {\n          color: #00529b;\n          border-color: #00529b;\n        }\n\n        .btn.btn-outline-dark:hover\n        {\n          color: white;\n          background-color: #00529b;\n        }\n\n.title-background {\nbackground: white;\n}\n"
    }}
  />
  <Navbar/>
  <div className="container-md " style={{ width: "70%" }}>
    {/* List group */}
    <div className="container mt-4">
      <h1 className="display-3" style={{ margin: 20, textAlign: "center" }}>
        Enter Waitlist
      </h1>
      <div className="input-group mb-3">
        <span className="input-group-text">Full Name</span>
        <input type="text" aria-label="First name" className="form-control" />
        <input type="text" aria-label="Last name" className="form-control" />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Student Email"
          aria-label="Student Email"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @ufl.edu
        </span>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Requested Tutor
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected="">No preference</option>
          <option value={1}>Boe Zoe</option>
          <option value={2}>Abby Pen</option>
          <option value={2}>Rahul Chari</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect02">
          Requested Course
        </label>
        <select className="form-select" id="inputGroupSelect02">
          <option selected="">Programming Fundamentals 1</option>
          <option value={1}>Programming Fundamentals 2</option>
          <option value={2}>Data Structures and Algorithms</option>
          <option value={3}>Software Engineering Principles</option>
          <option value={4}>Operating Systems</option>
          <option value={5}>Other</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Estimated Length of Session</span>
        <input
          type="text"
          aria-label="First name"
          placeholder="in minutes"
          className="form-control"
        />
      </div>
      <div className="text-end">
        <Link to="/waitlist" className="btn btn-outline-dark ms-auto">Enter Waitlist</Link>
        </div>
    </div>
  </div>
</>





    )}