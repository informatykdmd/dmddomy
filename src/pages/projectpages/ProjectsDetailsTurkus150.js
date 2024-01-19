import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneTurkus150 from '../../common/breadcrumb/BreadcrumbOneTurkus150';
import ProjectsDetailsOneTurkus150 from '../../components/project-components/ProjectsDetailsOneTurkus150';
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

        <BreadcrumbOneTurkus150
            title="Turkus"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Turkus"
        />
        
        <ProjectsDetailsOneTurkus150 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;