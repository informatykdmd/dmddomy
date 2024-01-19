import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneKasjopea7 from '../../common/breadcrumb/BreadcrumbOneKasjopea7';
import ProjectsDetailsOneKasjopea7 from '../../components/project-components/ProjectsDetailsOneKasjopea7';
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

        <BreadcrumbOneKasjopea7 
            title="Kasjopea 7"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Kasjopea 7"
        />
        
        <ProjectsDetailsOneKasjopea7 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;