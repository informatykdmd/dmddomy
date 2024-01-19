import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneOpalElegancja from '../../common/breadcrumb/BreadcrumbOneOpalElegancja';
import ProjectsDetailsOneOpalElegancja from '../../components/project-components/ProjectsDetailsOneOpalElegancja';
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

        <BreadcrumbOneOpalElegancja
            title="Opal Elegancja"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Opal Elegancja"
        />
        
        <ProjectsDetailsOneOpalElegancja />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;