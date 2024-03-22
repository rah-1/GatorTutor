//import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar } from "./navbar"
import Abhi from '../images/abhi.png';
import Rah from '../images/rahjpg.jpg';
import Siddhi from '../images/UF_SUPRATIK_ID__01.jpg';


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
        "\n.team-member {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin: 20px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n\n}\n.team-member row {\n  display: flex;\n}\n\n.nav-tabs .nav-item .nav-link{\npadding-right: 0.75rem; /* Adjust the right margin */\npadding-left: 0.75rem;\ncolor: #00529b !important;\n}\n\n.team-member col {\n  flex: 1;\n  padding: 20px;\n}\n.grid {\ndisplay: grid;\ngrid-auto-rows: auto;\nmax-width: 100vw;\ngrid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n.team-member img {\n  width: 50%;\n  height: 9.5rem;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\n\n.team-member .tab-content{\n\nmargin-top: 0.75rem;\n\n}\n\n.team-member h2 {\n  margin-top: 0;\n}\n\n.navop2 {\nborder: 3px solid black;\n}\n\n\n.logo {\n  width: 8% !important;\n  height: auto !important;\n}\n\n.test {\n  padding-left: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-right: 0px !important;\n}\n\n.pgtitle {\n  color: #00529b;\n}\n\n.cont {\n  align-items: stretch;\n  }\n\n.item {\n  flex:  1;\n  /* Optional: Add additional styling as needed */\n  }\n\n.cont2 {\n  align-items: stretch;\n}\n\n.item2 {\n  flex:  1;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  width: 100%;\n  /* Optional: Add additional styling as needed */\n  }\n\n  .navbar-color {\n      background: #00529b;\n  }\n\n  .navop {\n  /* border: 2px solid black; */\n  margin-right: 30px;\n  border-radius: 6px;\n  color: #fff !important;\n  background-color: #00529b ;\n  \n  }\n\n  .rounded-pill {\n    background-color: #00529b !important;\n  }\n\n.navop:hover {\n transition: 0s ;\n background-color: #f37021 ;\n /* color: #00529b !important; */\n}\n\n.navop:active {\n /* background-color: #f37021; */\n transition: 0s ;\n background-color: rgba(243, 112, 33, 0.7);\n /* color: #00529b !important; */\n}\n\n.navbar {\n  \n  font-weight: bold;\n}\n\n.badge.bg-dark {\n\nbackground-color: #00529b !important;\n}\n\n.badge.btn.btn-outline-dark\n{\ncolor: #00529b;\nborder-color: #00529b;\n}\n\n.badge.btn.btn-outline-dark:hover\n{\ncolor: white;\nbackground-color: #00529b;\n}\n\n.title-background {\nbackground: white;\n}\n"
    }}
  />
  <Navbar/>
  <div className="container-md " style={{ width: "70%" }}>
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
    <div id="about" class="tab-pane fade in show active text-start">
    <div style={{ height: "25px" }}></div>

  <p><strong>Welcome to the CISE Academic Tutoring Center!</strong></p>
  
  <p>At the CISE Academic Tutoring Center, we're dedicated to supporting students like you as you navigate the complexities of computer science coursework at the University of Florida.</p>
  
  <p><strong>What We Offer:</strong></p>
  
  <p>We understand that the challenges of computer science courses can sometimes feel overwhelming. That's why we're here to offer you no-cost tutoring services tailored specifically to your needs. Whether you're grappling with algorithms, struggling with programming languages, or need guidance on complex concepts, our team of highly experienced undergraduate tutors is ready to assist you every step of the way.</p>
  
  <p><strong>Who Are Our Tutors:</strong></p>
  
  <p>Our tutors are not only academically proficient but also deeply passionate about helping their peers succeed. They are handpicked from the ranks of highly accomplished undergraduate students within the computer science department. With their in-depth understanding of the curriculum and their commitment to excellence, our tutors are equipped to provide you with the support and guidance you need to excel in your studies.</p>
  
  <p><strong>Why Choose Us:</strong></p>
  
  <p>The CISE Academic Tutoring Center isn't just a place to get help with your coursework—it's a community of learners dedicated to helping each other thrive. We believe that by fostering a supportive and collaborative environment, we can empower you to achieve your academic goals. Many students who have participated in our tutoring sessions have reported significant progress in their coursework, citing increased confidence, improved understanding of concepts, and better grades.</p>
  
  <p><strong>Get Started:</strong></p>
  
  <p>We highly encourage you to take advantage of our tutoring services. Whether you're struggling with a specific problem set, preparing for an exam, or simply seeking to deepen your understanding of course material, our tutors are here to help you succeed. Don't let academic challenges hold you back—join us at the CISE Academic Tutoring Center and take the first step toward academic excellence.</p>
  <p></p>
  <p>To get started, students can make tutoring session appointments or join the live waitlist. When making an appointment or joining the waitlist, students can specify the class or project they need help with and indicate any tutor preferences. Additionally, students can view information about each tutor on the Tutors page, including their language and class proficiency. For tutoring session availability and updates, students can refer to the interactive calendar on the Calendar page, which also provides contact information and availability updates for tutors.</p>
</div>

      <div id="avail" className="tab-pane fade">
      <div style={{ height: "25px" }}></div>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How long does each tutoring session last?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" >
                <strong>
                  You can specify the desired length of each session when you
                  first enter waitlist. However, that time is not guaranteed to be followed
                  depending on tutor demand and availability.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What subjects can tutors help with?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>All tutors are well-versed in each of the introductory computer science courses. For more advanced courses, please visit the Tutors page for specific tutor proficiency.
                  </strong> 
                
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Can I ask for help with non-course-related work?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong> While the Academic Tutoring Center is intended for UF coursework, some tutors may be able to help with projects and concepts beyond the scope of the computer science curriculum.
                  </strong> 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Can I ask for help with non-course-related work?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong> While the Academic Tutoring Center is intended for UF coursework, some tutors may be able to help with projects and concepts beyond the scope of the computer science curriculum.
                  </strong> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="course" className="tab-pane fade">
      <div style={{ height: "25px" }}></div>

        <ul className="list-group text-start">
          <li className="list-group-item d-flex">
            Random Excuse Generation{" "}
            <span className="badge bg-primary rounded-pill ms-auto">TA</span>
          </li>
          <li className="list-group-item d-flex">
            Bandwagoning{" "}
            <span className="badge bg-primary rounded-pill ms-auto">TA</span>
          </li>
          <li className="list-group-item d-flex">
            One Piece{" "}
            <span className="badge bg-primary rounded-pill ms-auto">TA</span>
          </li>
          <li className="list-group-item">Entomology</li>
          <li className="list-group-item">Elementary Math</li>
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
    <div style={{ height: "100px" }}></div>

  </div>
</>
)}