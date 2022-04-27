import { Link } from "react-router-dom"
import "./home.scss"
import imageProfile from "../../assets/images/55744494_135134994286627_5748672726214639616_n.jpg"

const Home = () => {
  return (
    <div className="home-page">
      <div className="text-image">
        <article>
          <h1>Hola! Soy Franco</h1>
          <h2>Web Developer</h2>
          <h3>ReactJS | Redux | NodeJS </h3>
        </article>
        <img src={imageProfile} alt="Franco" />
      </div>
      <Link to="/contacto" className="flat-button">
        CONTACTAME
      </Link>
    </div>
  )
}

export default Home
