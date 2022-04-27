import "./card.scss"

const Card = ({ tools, image, title, description, link }) => {
  return (
    <div className="card-project">
      <div className="image-content">
        <img className="image-portfolio" src={image} alt={title} />
      </div>
      <div className="card-info">
        <a href={link} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
        <div>
          {tools?.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
