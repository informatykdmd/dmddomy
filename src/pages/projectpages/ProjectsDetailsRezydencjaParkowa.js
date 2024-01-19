import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneRezydencjaParkowa from '../../common/breadcrumb/BreadcrumbOneRezydencjaParkowa';
import ProjectsDetailsOneRezydencjaParkowa from '../../components/project-components/ProjectsDetailsOneRezydencjaParkowa';
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

        <BreadcrumbOneRezydencjaParkowa 
            title="Rezydencja Parkowa"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Rezydencja Parkowa"
        />
        
        <ProjectsDetailsOneRezydencjaParkowa />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;