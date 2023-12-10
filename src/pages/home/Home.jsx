import './home.scss';
import { Carouselle, SlideTemp1 } from '../../components/index';
import { img_slider1 , img_slider2 ,img_slider3} from '../../assets/index';
const Home = () => {
  return (
    <div className='home'>
      <Carouselle slides={
        [
          <SlideTemp1 
              position="left" 
              animation="animation-1" 
              image={img_slider1} 
              smallTitle = "SUMMBER 2023"
              bigTitle = "New Arrival Collection"/>,
          <SlideTemp1 
              position="right"
              animation="animation-2" 
              image={img_slider3}
              smallTitle = "NEW SEASON"
              bigTitle = "Lookbook Collection"/>,
          <SlideTemp1 
              position="left" 
              animation="animation-3" 
              image={img_slider2}
              smallTitle = "SUMMBER SALE"
              bigTitle = "Save up to 70%"/>
        ]
      } />
    </div>
  )
}

export default Home;
