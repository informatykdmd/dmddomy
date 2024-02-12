import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import Banner from '../../components/section-components/Banner';
import ServicesOne from '../../components/section-components/ServicesOne';
import AboutOne from '../../components/section-components/AboutOne';
import ProjectsTwo from '../../components/section-components/ProjectsTwo';
import TestimonialThree from '../../components/section-components/TestimonialThree';
import ServicesTwo from '../../components/section-components/ServicesTwo';
import TeamOne from '../../components/section-components/TeamOne';
import Counter from '../../components/section-components/Counter';
import NewsOne from '../../components/section-components/NewsOne';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

// Przewiń stronę do góry z animacją
import $ from 'jquery';

const HomeOne = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />
        
        <Banner />
        
        <ServicesOne />
        
        <AboutOne />
        
        <ProjectsTwo />
        
        <div className='d-none d-lg-block'><TestimonialThree /></div>
        
        <ServicesTwo />
        
        <TeamOne />
        
        <Counter />
        
        <NewsOne />

        <Quote />

        <FooterOne />
        </>
    )
}
    
export default HomeOne;