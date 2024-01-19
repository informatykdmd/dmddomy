import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOnewillaParkowa160 from '../../common/breadcrumb/BreadcrumbOnewillaParkowa160';
import ProjectsDetailsOnewillaParkowa160 from '../../components/project-components/ProjectsDetailsOnewillaParkowa160';
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

        <BreadcrumbOnewillaParkowa160
            title="Willa Parkowa"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Willa Parkowa"
        />
        
        <ProjectsDetailsOnewillaParkowa160 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;