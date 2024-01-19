import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneWillaFloryda from '../../common/breadcrumb/BreadcrumbOneWillaFloryda';
import ProjectsDetailsOneWillaFloryda from '../../components/project-components/ProjectsDetailsOneWillaFloryda';
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

        <BreadcrumbOneWillaFloryda 
            title="Willa Floryda"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Willa Floryda"
        />
        
        <ProjectsDetailsOneWillaFloryda />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;