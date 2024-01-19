import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneSzafir181 from '../../common/breadcrumb/BreadcrumbOneSzafir181';
import ProjectsDetailsOneSzafir181 from '../../components/project-components/ProjectsDetailsOneSzafir181';
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

        <BreadcrumbOneSzafir181
            title="Szafir"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Szafir"
        />
        
        <ProjectsDetailsOneSzafir181 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;