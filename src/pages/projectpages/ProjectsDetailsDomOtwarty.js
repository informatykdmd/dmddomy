import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneDomOtwarty from '../../common/breadcrumb/BreadcrumbOneDomOtwarty';
import ProjectsDetailsOneDomOtwarty from '../../components/project-components/ProjectsDetailsOneDomOtwarty';
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

        <BreadcrumbOneDomOtwarty 
            title="Dom Otwarty"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Dom Otwarty"
        />
        
        <ProjectsDetailsOneDomOtwarty />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;