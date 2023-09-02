import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselSection = (props) => {
    return (
        props.data.length ?
        <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000}>
            {
                props.data.map((dt, index) => {
                    return (
                        <div key={index}>
                            <img src={dt.image} alt={`carousel-${index}`} />
                        </div>
                    )
                })
            }
        </Carousel> : <></>
    )

}

export default CarouselSection