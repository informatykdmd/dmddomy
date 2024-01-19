import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneTopaz from '../../common/breadcrumb/BreadcrumbOneTopaz';
import ProjectsDetailsOneTopaz from '../../components/project-components/ProjectsDetailsOneTopaz';
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

        <BreadcrumbOneTopaz 
            title="Topaz"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Topaz"
        />
        
        <ProjectsDetailsOneTopaz />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;