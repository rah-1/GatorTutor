//import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar } from "./navbar"
import Abhi from '../images/abhi.png';
import Rah from '../images/rahjpg.jpg';
import Siddhi from '../images/UF_SUPRATIK_ID__01.jpg';


export const Tutors = () => {
  return (
    <>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link
    href="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    rel="stylesheet"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossOrigin="anonymous"
  />
  <link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
    rel="stylesheet"
    integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
    crossOrigin="anonymous"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    rel="stylesheet"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossOrigin="anonymous"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n.team-member {\n            border: 1px solid #ccc;\n            border-radius: 8px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            margin: 20px;\n            padding: 20px;\n            display: flex;\n            flex-direction: column;\n        \n        }\n        .team-member row {\n            display: flex;\n        }\n\n    .nav-tabs .nav-item .nav-link{\n        padding-right: 0.75rem; /* Adjust the right margin */\n        padding-left: 0.75rem;\n        color: #00529b !important;\n    }\n        \n        .team-member col {\n            flex: 1;\n            padding: 20px;\n        }\n        .grid {\n        display: grid;\n        grid-auto-rows: auto;\n        max-width: 100vw;\n        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n        }\n        .team-member img {\n            width: 50%;\n            height: 9.5rem;\n            border-radius: 50%;\n            margin-bottom: 10px;\n        }\n\n        .team-member .tab-content{\n\n          margin-top: 0.75rem;\n\n        }\n\n        .team-member h2 {\n            margin-top: 0;\n        }\n\n  .navop2 {\n          border: 3px solid black;\n        }\n\n\n        .logo {\n            width: 8% !important;\n            height: auto !important;\n        }\n\n        .test {\n            padding-left: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n            padding-right: 0px !important;\n        }\n\n        .pgtitle {\n            color: #00529b;\n        }\n\n        .cont {\n            align-items: stretch;\n            }\n\n        .item {\n            flex:  1;\n            /* Optional: Add additional styling as needed */\n            }\n\n        .cont2 {\n            align-items: stretch;\n        }\n\n        .item2 {\n            flex:  1;\n            display: flex;\n            align-items: center;\n            flex-grow: 1;\n            width: 100%;\n            /* Optional: Add additional styling as needed */\n            }\n\n            .navbar-color {\n                background: #00529b;\n            }\n\n            .navop {\n            /* border: 2px solid black; */\n            margin-right: 30px;\n            border-radius: 6px;\n            color: #fff !important;\n            background-color: #00529b ;\n            \n            }\n\n            .rounded-pill {\n              background-color: #00529b !important;\n            }\n\n        .navop:hover {\n           transition: 0s ;\n           background-color: #f37021 ;\n           /* color: #00529b !important; */\n         }\n\n         .navop:active {\n           /* background-color: #f37021; */\n           transition: 0s ;\n           background-color: rgba(243, 112, 33, 0.7);\n           /* color: #00529b !important; */\n         }\n\n        .navbar {\n            \n            font-weight: bold;\n        }\n\n        .badge.bg-dark {\n          \n          background-color: #00529b !important;\n        }\n\n        .badge.btn.btn-outline-dark\n        {\n          color: #00529b;\n          border-color: #00529b;\n        }\n\n        .badge.btn.btn-outline-dark:hover\n        {\n          color: white;\n          background-color: #00529b;\n        }\n\n        .title-background {\n      background: white;\n    }\n        \n\n\n\n\n"
    }}
  />
  <Navbar />
  <div className="container">
    <h1 className="display-3" style={{ margin: 20 }}>
      Meet Your Tutors!
    </h1>
    <div className="grid">
      <div>
        <div className="team-member ">
          <div className="row " style={{ justifyContent: "center" }}>
            <div className="d-flex">
              <span
                className=" ms-auto badge bg-dark align-self-end"
                style={{ alignSelf: "flex-start !important" }}
              >
                Class of 2024
              </span>
            </div>
            <img
              style={{ alignSelf: "center" }}
              src={Rah}
              alt="Team Member 1"
            />
          </div>
          <div
            className="row"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "2rem" }}>
                  Rahul Chari{" "}
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "1.5rem" }}>
                  Major: Computer Science
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "1.3rem" }}>
                  Minor: Linguistics
                </h1>
              </li>
              {/* <li class="list-group-item"><h1 class="display-6" style="font-size: 1.5rem;">Senior</h1></li>/ */}
            </ul>
          </div>
          <div className="row ">
            {/* List group */}
            <ul className="nav nav-tabs">
              <li className="nav-item ">
                <a
                  data-bs-toggle="tab"
                  className="nav-link "
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="tab" className="nav-link" href="#avail">
                  Availability
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="tab" className="nav-link" href="#course">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="tab" className="nav-link" href="#lang">
                  Languages
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="about" className="tab-pane fade in ">
                <p>
                  My name is Rahul Chari, and I'm a fourth-year student at the
                  University of Florida. I first developed an interest in
                  programming after taking a Java course in high school. I
                  immediately took a liking to it, and decided I would major in
                  computer science in college. During my time at UF, I've
                  successfully completed two internships and one term studying
                  abroad at Kyoto University. In my free time, I enjoy
                  traveling, hiking, weightlifting, and playing basketball. I
                  also spend time creating fun programming projects that blend
                  my personal interests and needs.
                </p>
              </div>
              <div id="avail" className="tab-pane fade">
                None...
              </div>
              <div id="course" className="tab-pane fade">
                <ul className="list-group text-start">
                  <li className="list-group-item">
                    Programming Fundamentals 1
                  </li>
                  <li className="list-group-item">
                    Programming Fundamentals 2
                  </li>
                  <li className="list-group-item">
                    Data Structures and Algorithms
                  </li>
                  <li className="list-group-item d-flex">
                    Software Engnineering Principles{" "}
                    <span className="badge bg-primary rounded-pill ms-auto text-end">
                      TA
                    </span>
                  </li>
                  <li className="list-group-item d-flex">
                    Operating Systems{" "}
                    <span className="badge bg-primary rounded-pill ms-auto text-end">
                      TA
                    </span>
                  </li>
                </ul>
              </div>
              <div id="lang" className="tab-pane fade">
                <table className="table text-start">
                  <thead>
                    <tr>
                      <th scope="col">Language</th>
                      <th scope="col">Proficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>C++</td>
                      <td>★★★★☆ Advanced</td>
                    </tr>
                    <tr>
                      <td>Java</td>
                      <td>★★★☆☆ Intermediate</td>
                    </tr>
                    <tr>
                      <td>Python</td>
                      <td>★★★★★ Proficient</td>
                    </tr>
                    <tr>
                      <td>JavaScript</td>
                      <td>★★☆☆☆ Basic</td>
                    </tr>
                    <tr>
                      <td>HTML/CSS</td>
                      <td>★★★☆☆ Intermediate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="team-member ">
          <div className="row " style={{ justifyContent: "center" }}>
            <div className=" d-flex justify-content-end">
              <span className="badge bg-dark">Class of 2028</span>
            </div>
            <img src={Siddhi} alt="Team Member 2" />
          </div>
          <div
            className="row"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "2rem" }}>
                  Boe Zoe
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "1.5rem" }}>
                  Major: Biology
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "1.3rem" }}>
                  Minor: Linguistics
                </h1>
              </li>
              {/* <li class="list-group-item"><h1 class="display-6" style="font-size: 1.5rem;">Senior</h1></li>/ */}
            </ul>
          </div>
          <div className="row ">
            {/* List group */}
            <ul className="nav nav-tabs">
              <li className="nav-item ">
                <a
                  data-bs-toggle="tab"
                  className="nav-link "
                  aria-current="page"
                  href="#about2"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="tab" className="nav-link" href="#avail2">
                  Availability
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="tab" className="nav-link" href="#course2">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="tab" className="nav-link" href="#lang2">
                  Languages
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="about2" className="tab-pane fade in ">
                <p>
                  My name is Rahul Chari, and I'm a fourth-year student at the
                  University of Florida. I'm pursuing a major in computer
                  science and a minor in linguistics. I first developed an
                  interest in programming after taking a Java course in high
                  school. I immediately took a liking to it, and decided I would
                  major in computer science in college. During my time at UF,
                  I've successfully completed two internships and one term
                  studying abroad at Kyoto University. In my free time, I enjoy
                  traveling, hiking, weightlifting, and playing basketball. I
                  also spend time creating fun programming projects that blend
                  my personal interests and needs.
                </p>
              </div>
              <div id="avail2" className="tab-pane fade">
                None...
              </div>
              <div id="course2" className="tab-pane fade">
                <ul className="list-group text-start">
                  <li className="list-group-item d-flex">
                    Random Excuse Generation{" "}
                    <span className="badge bg-primary rounded-pill ms-auto">
                      TA
                    </span>
                  </li>
                  <li className="list-group-item d-flex">
                    Bandwagoning{" "}
                    <span className="badge bg-primary rounded-pill ms-auto">
                      TA
                    </span>
                  </li>
                  <li className="list-group-item d-flex">
                    One Piece{" "}
                    <span className="badge bg-primary rounded-pill ms-auto">
                      TA
                    </span>
                  </li>
                  <li className="list-group-item">Entomology</li>
                  <li className="list-group-item">Elementary Math</li>
                </ul>
              </div>
              <div id="lang2" className="tab-pane fade">
                <table className="table text-start">
                  <thead>
                    <tr>
                      <th scope="col">Language</th>
                      <th scope="col">Proficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>C++</td>
                      <td>☆☆☆☆☆ None</td>
                    </tr>
                    <tr>
                      <td>Java 🖉</td>
                      <td>★☆☆☆☆ Elementary</td>
                    </tr>
                    <tr>
                      <td>Python</td>
                      <td>☆☆☆☆☆ None</td>
                    </tr>
                    <tr>
                      <td>JavaScript</td>
                      <td>☆☆☆☆☆ None</td>
                    </tr>
                    <tr>
                      <td>HTML/CSS</td>
                      <td>☆☆☆☆☆ None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="team-member ">
          <div className="row " style={{ justifyContent: "center" }}>
            <div className=" d-flex justify-content-end">
              <span className="badge bg-dark">Class of 2024</span>
            </div>
            <img src={Abhi} alt="Team Member 3" />
          </div>
          <div
            className="row"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "2rem" }}>
                  Abby Pen
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "1.5rem" }}>
                  Major: Biology
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="display-6" style={{ fontSize: "1.3rem" }}>
                  Minor: Bioinformatics
                </h1>
              </li>
              {/* <li class="list-group-item"><h1 class="display-6" style="font-size: 1.5rem;">Senior</h1></li>/ */}
            </ul>
          </div>
          <div className="row ">
            {/* List group */}
            <ul className="nav nav-tabs">
              <li className="nav-item  ">
                <a
                  data-bs-toggle="tab"
                  className="nav-link "
                  aria-current="page"
                  href="#about3"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="tab" className="nav-link" href="#avail3">
                  Availability
                </a>
              </li>
              <li className="nav-item">
                <a data-bstoggle="tab" className="nav-link" href="#course3">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a data-bstoggle="tab" className="nav-link" href="#lang3">
                  Languages
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="about3" className="tab-pane fade in ">
                <p>
                  My name is Rahul Chari, and I'm a fourth-year student at the
                  University of Florida. I'm pursuing a major in computer
                  science and a minor in linguistics. I first developed an
                  interest in programming after taking a Java course in high
                  school. I immediately took a liking to it, and decided I would
                  major in computer science in college. During my time at UF,
                  I've successfully completed two internships and one term
                  studying abroad at Kyoto University. In my free time, I enjoy
                  traveling, hiking, weightlifting, and playing basketball. I
                  also spend time creating fun programming projects that blend
                  my personal interests and needs.
                </p>
              </div>
              <div id="avail3" className="tab-pane fade">
                None...
              </div>
              <div id="course3" className="tab-pane fade">
                <ul className="list-group text-start">
                  <li className="list-group-item d-flex">
                    Yappology{" "}
                    <span className="badge bg-primary rounded-pill ms-auto">
                      TA
                    </span>
                  </li>
                  <li className="list-group-item d-flex">
                    Capping{" "}
                    <span className="badge bg-primary rounded-pill ms-auto">
                      TA
                    </span>
                  </li>
                  <li className="list-group-item d-flex">
                    Racism{" "}
                    <span className="badge bg-primary rounded-pill ms-auto">
                      TA
                    </span>
                  </li>
                  <li className="list-group-item">Organic Chemistry</li>
                  <li className="list-group-item">Scribing</li>
                </ul>
              </div>
              <div id="lang3" className="tab-pane fade">
                <table className="table text-start">
                  <thead>
                    <tr>
                      <th scope="col">Language</th>
                      <th scope="col">Proficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>C++</td>
                      <td>☆☆☆☆☆ None</td>
                    </tr>
                    <tr>
                      <td>R</td>
                      <td>★★★☆☆ Intermediate</td>
                    </tr>
                    <tr>
                      <td>Python</td>
                      <td>☆☆☆☆☆ None</td>
                    </tr>
                    <tr>
                      <td>JavaScript</td>
                      <td>☆☆☆☆☆ None</td>
                    </tr>
                    <tr>
                      <td>HTML/CSS</td>
                      <td>☆☆☆☆☆ None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Add more team members as needed */}
</>
)}