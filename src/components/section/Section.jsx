import './section.scss';
import { AdvancedCard } from '../index';
import { img_product_1_1, img_product_1_2 } from '../../assets/index';
const Section = () => {
  return (
    <div className='section-container'>

      <div className="section-container__header">
        <span className='title'>
          <span className="left"></span>
          BEST SELLER
          <span className="right"></span>
        </span>
        <span className='sub-title'>Top sale in this week</span>
      </div>
      <div className="box-container">
        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />
        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />

        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />

        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />

        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />

        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />

        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />

        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />

        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />

        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />
        <AdvancedCard
          img1={img_product_1_1}
          img2={img_product_1_2}
          title="Cotton T-Shirt"
          price="$29.99"
          reduction={true}
          reductionValue="20%"
          sizes="XS, S, M, L, XL"
        />


      </div>
    </div>
  )
}

export default Section;
