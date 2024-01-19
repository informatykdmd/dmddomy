import React from 'react';
import HeaderFour from '../../common/header/HeaderFour';
import Banner from '../../components/section-components/Banner';
import ServicesOne from '../../components/section-components/ServicesOne';
import AboutOne from '../../components/section-components/AboutOne';
import ProjectsOne from '../../components/section-components/ProjectsOne';
import TestimonialThree from '../../components/section-components/TestimonialThree';
import Pricing from '../../components/section-components/Pricing';
import TeamOne from '../../components/section-components/TeamOne';
import Counter from '../../components/section-components/Counter';
import NewsOne from '../../components/section-components/NewsOne';
import FooterOne from '../../common/footer/FooterOne';

const HomeFour = () => {
    return (
        <>
        <HeaderFour />
        
        <Banner />
        
        <ServicesOne />
        
        <AboutOne />
        
        <ProjectsOne />
        
        <TestimonialThree />
        
        <Pricing />
        
        <TeamOne />
        
        <Counter />
        
        <NewsOne />

        <FooterOne />
        </>
    )
}
    
export default HomeFour;