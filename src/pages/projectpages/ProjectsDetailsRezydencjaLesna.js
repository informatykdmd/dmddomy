import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneRezydencjaLesna from '../../common/breadcrumb/BreadcrumbOneRezydencjaLesna';
import ProjectsDetailsOneRezydencjaLesna from '../../components/project-components/ProjectsDetailsOneRezydencjaLesna';
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

        <BreadcrumbOneRezydencjaLesna 
            title="Rezydencja Leśna"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Rezydencja Leśna"
        />
        
        <ProjectsDetailsOneRezydencjaLesna />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;