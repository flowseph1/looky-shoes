import Slider from '../../slider/Slider';
import Subtitle from '../../ui/Subtitle';
import { dataPromociones } from '../../../data/dataPromociones';

function Promociones() {
    // console.log(-sliderWidth);

    const { sneakers } = dataPromociones;

    return (
        <div>
            <Subtitle subtitle="NUEVA COLECCIÓN" />
            <Slider data={sneakers} />
        </div>
    );
}

export default Promociones;
