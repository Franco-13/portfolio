import "./portfolio.scss"
import projects from "./projects"
import Card from "../Card/Card"
import { useState } from "react"

const Portfolio = () => {
  const [checked, setChecked] = useState("slides1")

  return (
    <div className="portfolio-page">
      <h2>Proyectos</h2>
      <div className="container-project">
        <div className="images-carousel">
          <article className="carousel">
            <input
              type="radio"
              value="slides1"
              id="slide-1"
              checked={checked === "slides1"}
              onClick={() => setChecked("slides1")}
              readOnly
            />
            <input
              type="radio"
              value="slides2"
              id="slide-2"
              checked={checked === "slides2"}
              onClick={() => setChecked("slides2")}
              readOnly
            />
            <input
              type="radio"
              value="slides3"
              id="slide-3"
              checked={checked === "slides3"}
              onClick={() => setChecked("slides3")}
              readOnly
            />
            <input
              type="radio"
              value="slides4"
              id="slide-4"
              checked={checked === "slides4"}
              onClick={() => setChecked("slides4")}
              readOnly
            />
            <ul className="slides">
              {projects?.map((p) => (
                <li key={p.title} className="slide">
                  <Card
                    title={p.title}
                    tools={p.tools}
                    description={p.description}
                    image={p.image}
                    link={p.link}
                  />
                </li>
              ))}
            </ul>
            <aside className="slides-nav">
              <label htmlFor="slide-1" id="dot-1"></label>
              <label htmlFor="slide-2" id="dot-2"></label>
              <label htmlFor="slide-3" id="dot-3"></label>
              <label htmlFor="slide-4" id="dot-4"></label>
            </aside>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
