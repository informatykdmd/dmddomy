import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneWillaAnnaMaria from '../../common/breadcrumb/BreadcrumbOneWillaAnnaMaria';
import ProjectsDetailsOneWillaAnnaMaria from '../../components/project-components/ProjectsDetailsOneWillaAnnaMaria';
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

        <BreadcrumbOneWillaAnnaMaria 
            title="Willa Anna Maria"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Willa Anna Maria"
        />
        
        <ProjectsDetailsOneWillaAnnaMaria />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;