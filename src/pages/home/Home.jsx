import './home.scss';
import { Carouselle, SlideTemp, SectionLayout, AdvancedCard,Section } from '../../components/index';
import { img_slider1, img_slider2, img_slider3, img_product_1_1, img_product_1_2 } from '../../assets/index';
const Home = () => {
  return (
    <div className='home'>
      <Carouselle slides={
        [
          <SlideTemp
            position="left"
            animation="animation-1"
            image={img_slider1}
            smallTitle="SUMMBER 2023"
            bigTitle="New Arrival Collection" />,
          <SlideTemp
            position="right"
            animation="animation-2"
            image={img_slider3}
            smallTitle="NEW SEASON"
            bigTitle="Lookbook Collection" />,
          <SlideTemp
            position="left"
            animation="animation-3"
            image={img_slider2}
            smallTitle="SUMMBER SALE"
            bigTitle="Save up to 70%" />
        ]
      } />

      <SectionLayout />
      <AdvancedCard 
        img1={img_product_1_1}
        img2={img_product_1_2}
        title="Cotton T-Shirt"
        price="$29.99"
        reduction={true}
        reductionValue="20%"
        sizes="XS, S, M, L, XL"
      />

      <Section/>
    </div>

  )
}

export default Home;
