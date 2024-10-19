import "./Card.css";

interface Props {
    name: string;
    description: string;
    price: number;
    img: string;
}

const Card = ({name, description, price, img}: Props) => {
  return (
    <div className="card">
        <img
            src={img}
            alt="Image"
        />
    <div className='details'>
        <h2>{name}</h2>
        <p>${price}</p>
    </div>
    <p className='info'>{description}</p>
    </div>
  )
}

export default Card
