import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneWillaMalibu from '../../common/breadcrumb/BreadcrumbOneWillaMalibu';
import ProjectsDetailsOneWillaMalibu from '../../components/project-components/ProjectsDetailsOneWillaMalibu';
import FooterOne from '../../common/footer/FooterOne';

// Przewiń stronę do góry z animacją
import $ from 'jquery'

const ProjectsDetails = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />

        <BreadcrumbOneWillaMalibu 
            title="Willa Malibu"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Willa Malibu"
        />
        
        <ProjectsDetailsOneWillaMalibu />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;