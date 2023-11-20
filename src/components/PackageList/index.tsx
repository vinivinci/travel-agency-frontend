import React from 'react';
import Slider, { Settings } from 'react-slick';
import PackageCard from './PackageCard';
import { Package } from '../../interfaces/package';
import { NextArrow, PrevArrow } from './Arrows';

const PackageList: React.FC<{ packages: Package[] }> = ({ packages }) => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 5,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div style={{ maxWidth: "100%" }}>
            <Slider {...settings}>
                {packages.map((pkg) => (
                    <div key={pkg.packageID}>
                        <PackageCard {...pkg} />
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default PackageList;
