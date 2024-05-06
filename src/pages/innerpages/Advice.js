import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneOnas from '../../common/breadcrumb/BreadcrumbOneOnas';
import ProjectsDetailsOneKonsultacje from '../../components/project-components/ProjectsDetailsOneKonsultacje';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';
import $ from 'jquery';

const Advice = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />

        <BreadcrumbOneOnas 
            title="Gwarancja spokoju przy budowie domu"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Zaufanie"
        />
        
        <ProjectsDetailsOneKonsultacje />
        
        <Counter />
        
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default Advice;