import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneWillaSloneczna from '../../common/breadcrumb/BreadcrumbOneWillaSloneczna';
import ProjectsDetailsOneWillaSloneczna from '../../components/project-components/ProjectsDetailsOneWillaSloneczna';
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

        <BreadcrumbOneWillaSloneczna 
            title="Willa Słoneczna"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Willa Słoneczna"
        />
        
        <ProjectsDetailsOneWillaSloneczna />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;