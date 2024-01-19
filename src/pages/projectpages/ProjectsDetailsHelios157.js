import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneHelios157 from '../../common/breadcrumb/BreadcrumbOneHelios157';
import ProjectsDetailsOneHelios157 from '../../components/project-components/ProjectsDetailsOneHelios157';
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

        <BreadcrumbOneHelios157
            title="Helios"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Helios"
        />
        
        <ProjectsDetailsOneHelios157 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;