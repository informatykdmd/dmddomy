import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneSzmaragd134 from '../../common/breadcrumb/BreadcrumbOneSzmaragd134';
import ProjectsDetailsOneSzmaragd134 from '../../components/project-components/ProjectsDetailsOneSzmaragd134';
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

        <BreadcrumbOneSzmaragd134
            title="Szmaragd"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Szmaragd"
        />
        
        <ProjectsDetailsOneSzmaragd134 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;