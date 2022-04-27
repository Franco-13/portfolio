import imgPoke from "../../assets/app-images/pokemon.JPG"
import imgbeefShop from "../../assets/app-images/beef-shop.JPG"
import imgWeather from "../../assets/app-images/app-weather.JPG"
import imgMovies from "../../assets/app-images/app-movies.JPG"

const projects = [
  {
    title: "Pokemon App",
    image: imgPoke,
    link: "https://pokemos-pi-henry.vercel.app/",
    description:
      "Creación de una SPA con la temática de Pokemon, donde se pueden ver distintos pokemones e incluso crear uno.",
    tools: [
      "ReactJS",
      "styled-components",
      "Redux",
      "NodeJS",
      "ExpressJS",
      "postgreSQL",
    ],
  },
  {
    title: "App Weather",
    image: imgWeather,
    link: "https://app-weather-lemon.vercel.app/",
    description:
      "Una aplicación del clima sencilla, implementando local storage",
    tools: ["ReactJS", "CSS", "HTML"],
  },
  {
    title: "Beef Shop - e-commerce",
    image: imgbeefShop,
    link: "https://beefshophenry.vercel.app/",
    description:
      "Creación de un e-commerce orientado a la venta de carnes, el cual cuenta con un listado de productos, carrito de compras, pasarela de pago y una sección para administración",
    tools: [
      "ReactJS",
      "Redux",
      "Framer Motion",
      "Bootstrap",
      "NodeJS",
      "ExpressJS",
      "JSON Web Token",
      "Nodemailer",
      "postgreSQL",
    ],
  },
  {
    title: "Movie App",
    image: imgMovies,
    link: "https://app-movies-psi.vercel.app/",
    description:
      "Aplicación que consume una API de películas donde se implementó el uso de Redux, en la cual se pueden buscar películas y agregarlas a una sección de favoritas",
    tools: ["ReactJS", "Redux", "CSS", "HTML"],
  },
]

export default projects
