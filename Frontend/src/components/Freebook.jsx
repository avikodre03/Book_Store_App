import React, { useContext } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from './Cards';
import { myContext } from '../Context/Context';
const Freebook = () => {
    const { book, setbook } = useContext(myContext)


    const filterData = book.filter((ele) => {
        return ele.category === "free"
    })
  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <>
            <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Cources</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur obcaecati exercitationem voluptatibus numquam consequatur vero quae modi, neque porro libero!</p>
                </div>


                <div>
                    <Slider {...settings}>
                        {filterData && filterData.map((ele) => {
                            return <>
                                <Cards item={ele}  />
                            </>
                        })}
                    </Slider>
                </div>
            </div>
        </>

    )
}

export default Freebook