import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./sobreMi.scss"
import StyledComponentSVG from "./StyledComponentSVG"

const SobreMi = () => {
  return (
    <div className="about-page">
      <div className="about-text">
        <h2>Sobre mí</h2>
        <p align="LEFT">
          Soy graduado Full Stack Web Developer del bootcamp Soy Henry, con
          ganas de seguir avanzando en mundo de la programación, adquiriendo
          nuevos conocimientos y experiencia en el desarrollo de aplicaciones
          que satisfagan las necesidades requeridas.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1 face">
            <StyledComponentSVG width="150" fill="palevioletred" />
          </div>
          <div className="face2 face">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3 face">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4 face">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5 face">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6 face">
            <FontAwesomeIcon icon={faBootstrap} color="#7211f6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreMi
