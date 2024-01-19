import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneTytan134 from '../../common/breadcrumb/BreadcrumbOneTytan134';
import ProjectsDetailsOneTytan134 from '../../components/project-components/ProjectsDetailsOneTytan134';
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

        <BreadcrumbOneTytan134
            title="Tytan"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Tytan"
        />
        
        <ProjectsDetailsOneTytan134 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;