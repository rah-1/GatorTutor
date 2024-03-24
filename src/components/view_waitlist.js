import { Navbar } from "./navbar"

export const ViewWaitlist = () => {
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
        "\n.team-member {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin: 20px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n\n}\n.team-member row {\n  display: flex;\n}\n\n.nav-tabs .nav-item .nav-link{\npadding-right: 0.75rem; /* Adjust the right margin */\npadding-left: 0.75rem;\ncolor: #00529b !important;\n}\n\n.team-member col {\n  flex: 1;\n  padding: 20px;\n}\n.grid {\ndisplay: grid;\ngrid-auto-rows: auto;\nmax-width: 100vw;\ngrid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n.team-member img {\n  width: 50%;\n  height: 9.5rem;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\n\n.team-member .tab-content{\n\nmargin-top: 0.75rem;\n\n}\n\n.team-member h2 {\n  margin-top: 0;\n}\n\n.navop2 {\nborder: 1px solid black;\n}\n\n\n.logo {\n  width: 8% !important;\n  height: auto !important;\n}\n\n.waitlist > * {\n  text-align: center;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  border: 1px solid black;\n}\n\n.waitlist {\n  margin-top: 0.5rem;\n  border-radius: 6px;\n}\n\n.test {\n  padding-left: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-right: 0px !important;\n}\n\n.pgtitle {\n  color: #00529b;\n}\n\n.cont {\n  align-items: stretch;\n  }\n\n.item {\n  flex:  1;\n  /* Optional: Add additional styling as needed */\n  }\n\n.cont2 {\n  align-items: stretch;\n}\n\n.item2 {\n  flex:  1;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  width: 100%;\n  /* Optional: Add additional styling as needed */\n  }\n\n  .navbar-color {\n      background: #00529b;\n  }\n\n  .navop {\n  /* border: 2px solid black; */\n  margin-right: 30px;\n  border-radius: 6px;\n  color: #fff !important;\n  background-color: #00529b ;\n  \n  }\n\n  .rounded-pill {\n    background-color: #00529b !important;\n  }\n\n.navop:hover {\n transition: 0s ;\n background-color: #f37021 ;\n /* color: #00529b !important; */\n}\n\n.navop:active {\n /* background-color: #f37021; */\n transition: 0s ;\n background-color: rgba(243, 112, 33, 0.7);\n /* color: #00529b !important; */\n}\n\n.navbar {\n  \n  font-weight: bold;\n}\n\n.badge.bg-dark {\n\nbackground-color: #00529b !important;\n}\n\n.badge.btn.btn-outline-dark\n{\ncolor: #00529b;\nborder-color: #00529b;\n}\n\n.badge.btn.btn-outline-dark:hover\n{\ncolor: white;\nbackground-color: #00529b;\n}\n\n.title-background {\nbackground: white;\n}\n"
    }}
  />
  <Navbar/>
  <div className="container-md " style={{ width: "70%" }}>
    {/* List group */}
    <div className="container mt-4">
      <h1 className="display-3" style={{ margin: 20, textAlign: "center" }}>
        Active Waitlist
      </h1>
      <div className="row waitlist navop2" style={{ borderRadius: 0 }}>
        <div className="col-1">Position</div>
        <div className="col-1">Initials</div>
        <div className="col-2">Check-In Time</div>
        <div className="col">Requested Tutor</div>
        <div className="col">Requested Course</div>
        <div className="col-2">Estimated Time of Session</div>
      </div>
      <div className="waitlist row navop2">
        <div className="col-1">#1</div>
        <div className="col-1">A.T.</div>
        <div className="col-2">12:38 PM</div>
        <div className="col">Rahul Chari</div>
        <div className="col">Operating Systems</div>
        <div className="col-2">20 minutes</div>
      </div>
      <div className="waitlist row navop2">
        <div className="col-1">#2</div>
        <div className="col-1">R.C.</div>
        <div className="col-2">12:42 PM</div>
        <div className="col">Boe Zoe</div>
        <div className="col">Programming Fundamentals 1</div>
        <div className="col-2">10 minutes</div>
      </div>
      <div className="waitlist row navop2">
        <div className="col-1">#3</div>
        <div className="col-1">J.W.</div>
        <div className="col-2">12:45 PM</div>
        <div className="col">Abby Pen</div>
        <div className="col">Software Engineering Principles</div>
        <div className="col-2">30 minutes</div>
      </div>
      <div className="waitlist row navop2">
        <div className="col-1">#4</div>
        <div className="col-1">A.P.</div>
        <div className="col-2">12:50 PM</div>
        <div className="col">Rahul Chari</div>
        <div className="col">Data Structures and Algorithms</div>
        <div className="col-2">90 minutes</div>
      </div>
    </div>
  </div>
</>
)}