import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneOnas from '../../common/breadcrumb/BreadcrumbOneOnas';
import ProjectsDetailsOneZaufanie from '../../components/project-components/ProjectsDetailsOneZaufanie';
import TestimonialThree from '../../components/section-components/TestimonialThree';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';
import $ from 'jquery';

const Trust = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />

        <BreadcrumbOneOnas 
            title="Spokój i bezpieczeństwo"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Zaufanie"
        />
        
        <ProjectsDetailsOneZaufanie />
        
        <div className='d-none d-lg-block'><TestimonialThree /></div>
        
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default Trust;