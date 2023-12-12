import './sectionlayout.scss';
import { SimpleCard } from '../index';
import {
    img_bag_section,
    img_shoes_section,
    img_women_section,
    img_watch_section
} from '../../assets/index';
const SectionLayout = () => {
    return (
        <div className='section-layout'>
            <SimpleCard image={img_women_section} buttonText={"Women"} className="col-1" />
            <div className="col-2">
                <SimpleCard image={img_bag_section} buttonText={"Accessories"} className="col-2-1" />
                <SimpleCard image={img_shoes_section} buttonText={"Footwear"} className="col-2-2" />
            </div>
            <SimpleCard image={img_watch_section} buttonText={"Watches"} className="col-3" />
        </div>
    )
}

export default SectionLayout;
