import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneKasjopea154 from '../../common/breadcrumb/BreadcrumbOneKasjopea154';
import ProjectsDetailsOneKasjopea154 from '../../components/project-components/ProjectsDetailsOneKasjopea154';
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

        <BreadcrumbOneKasjopea154
            title="Kasjopea"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Kasjopea"
        />
        
        <ProjectsDetailsOneKasjopea154 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;