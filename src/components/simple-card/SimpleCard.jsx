import './simplecard.scss'
const SimpleCard = ({ image, buttonText }) => {

  return (
    <div className='simple-card'>
      <img src={image} alt=""  className='simple-card__background'/>
      <a href="" className= "simple-card__btn">{buttonText}</a>
    </div>
  )
}

export default SimpleCard
