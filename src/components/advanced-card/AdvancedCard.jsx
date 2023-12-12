import './advancedcard.scss';
import {HeartOutlined , SwapOutlined , ShoppingCartOutlined , EyeOutlined } from '@ant-design/icons';
const AdvancedCard = ({title,price,img1,img2,reduction,newItem,reductionValue, sizes}) => {
  const newOrReduction = () => {
    if(newItem){
      return "new-item";
    }
    if(reduction){
      return "reduction";
    }
    return "";
  }
  
  return (
    <div className={'advanced-card '+ newOrReduction()} data-reduction = {reductionValue?reductionValue:"0"}>
      <div className="top-side">
        <img src={img1} alt=""className = "image-1" />
        <img src={img2} alt=""className = "image-2" />
        <div className="advanced-card__btns">
          <a className="btn__primary">
            <span className='btn__text'>Quick view</span>
            <EyeOutlined  className='btn-icons'/>
          </a>
          <a className="btn__secondary">
            <span className='btn__text'>Quick shop</span>
            <ShoppingCartOutlined className='btn-icons'/>
          </a>
        </div>
        <div className="product-sizes">
          <span>{sizes}</span>
        </div>
        <div className="advanced-card__icons">
          <HeartOutlined  className='card-icon icon-1'/>
          <SwapOutlined className='card-icon icon-2' />
        </div>
      </div>
      <div className="bottom-side">
        <a href="">{title}</a>
        <span>{price}</span>
      </div>

    </div>
  )
}

export default AdvancedCard;
