import './slidetemp1.scss';
const SlideTemp1 = ({position , animation , image , smallTitle , bigTitle}) => {
  const style = position === "right" ? { alignItems: 'flex-end', right: '18%' } : { alignItems: 'flex-start', left: '15%' };
  const animations = ["animation-1" , "animation-2" , "animation-3"];
  const animationInStore = () => {
    for(let i = 0 ; i < animations.length ; i++){
      if(animation === animations[i]){ 
        return animations[i]
      }
    }
    return animations[0];
  }
  return (
    <div className='slide-temp'>
        <div className="slide-temp__img">
            <img src={image} alt="" />
        </div>
        <div className={`slide-temp__content ${animationInStore()}`} style={style}>
            <p className='first'>{smallTitle}</p>
            <p className='second'>{bigTitle}</p>
            <a href="" className='slide-btn'>
                <span>Explore Now</span>
                </a>
        </div>
    </div>
  )
}

export default SlideTemp1
