import './advancedcard.scss';
import {img_product_1_1 , img_product_1_2} from '../../assets/index';
import {HeartOutlined , SwapOutlined , ShoppingCartOutlined , EyeOutlined } from '@ant-design/icons';
const AdvancedCard = () => {
  return (
    <div className='advanced-card'>
      <div className="top-side">
        <img src={img_product_1_1} alt=""className = "image-1" />
        <img src={img_product_1_2} alt=""className = "image-2" />
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
          <span>XS, S, M, L, XL</span>
        </div>
        <div className="advanced-card__icons">
          <HeartOutlined  className='card-icon'/>
          <SwapOutlined className='card-icon' />
        </div>
      </div>
      <div className="bottom-side">
        <a href="">Analogue Resin Strap</a>
        <span>$99.00</span>
      </div>

    </div>
  )
}

export default AdvancedCard;
