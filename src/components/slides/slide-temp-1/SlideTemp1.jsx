import './slidetemp1.scss';
import {img_slider1} from '../../../assets/index';
const SlideTemp1 = () => {
  return (
    <div className='slide-temp-1'>
        <div className="slide-temp-1__img">
            <img src={img_slider1} alt="" />
        </div>
        <div className="slide-temp-1__content">
            <p className='first'>SUMMBER 2023</p>
            <p className='second'>New Arriavla Collection</p>
            <a href="" className='slide-btn'>
                <span>Explore Now</span>
                </a>
        </div>
    </div>
  )
}

export default SlideTemp1
