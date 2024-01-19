import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneSydney from '../../common/breadcrumb/BreadcrumbOneSydney';
import ProjectsDetailsOneSydney from '../../components/project-components/ProjectsDetailsOneSydney';
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

        <BreadcrumbOneSydney 
            title="Sydney"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Sydney"
        />
        
        <ProjectsDetailsOneSydney />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;