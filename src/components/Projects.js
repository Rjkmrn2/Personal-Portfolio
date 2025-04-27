import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import MitSnaProject from "../assets/img/MitSnaProject.png";
import galleryImage from "../assets/img/galleryImg.png";
import ContactImage from "../assets/img/ContactImage.png";
export const Projects = () => {

  const projects = [
    {
      title: "MitSna Foundation",
      description: "Design & Development",
      imgUrl: MitSnaProject,
      proLink: "https://mitsna.org"
    },
    {
      title: "Image Gallery",
      description: "Front-End and API Integration",
      imgUrl: galleryImage,
      proLink: "https://github.com/Rjkmrn2/Image-Gallery/tree/main/Gallery"
    },
    {
      title: "Contact-Manager",
      description: "React.js,LocalStorage API and UUID Library",
      imgUrl: ContactImage,
      proLink: "https://github.com/Rjkmrn2/Contact-Manager/tree/main/contact"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  These are some of the projects I've built along the way. Each one started as just an idea and taught me something new — about design, coding, and problem-solving.
                </p>


                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
              
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
