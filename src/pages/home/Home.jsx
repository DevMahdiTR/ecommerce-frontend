import './home.scss';
import {Carouselle ,SlideTemp1,Header} from  '../../components/index';
const Home = () => {
  return (
    <div className='home'>
        <Carouselle slides = {[<SlideTemp1/>,<SlideTemp1/>]}/>
    </div>
  )
}

export default Home;
