import './home.scss';
import { Carouselle, SlideTemp,SimpleCard } from '../../components/index';
import { img_slider1 , img_slider2 ,img_slider3 , img_women_section} from '../../assets/index';
const Home = () => {
  return (
    <div className='home'>
      <Carouselle slides={
        [
          <SlideTemp
              position="left" 
              animation="animation-1" 
              image={img_slider1} 
              smallTitle = "SUMMBER 2023"
              bigTitle = "New Arrival Collection"/>,
          <SlideTemp 
              position="right"
              animation="animation-2" 
              image={img_slider3}
              smallTitle = "NEW SEASON"
              bigTitle = "Lookbook Collection"/>,
          <SlideTemp
              position="left" 
              animation="animation-3" 
              image={img_slider2}
              smallTitle = "SUMMBER SALE"
              bigTitle = "Save up to 70%"/>
        ]
      } />
      <SimpleCard image = {img_women_section} buttonText = "Women"/>   </div>
  )
}

export default Home;
