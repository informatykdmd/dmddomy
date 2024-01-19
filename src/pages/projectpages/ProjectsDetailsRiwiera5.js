import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneRiwiera5 from '../../common/breadcrumb/BreadcrumbOneRiwiera5';
import ProjectsDetailsOneRiwiera5 from '../../components/project-components/ProjectsDetailsOneRiwiera5';
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

        <BreadcrumbOneRiwiera5
            title="Riwiera 5"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Riwiera 5"
        />
        
        <ProjectsDetailsOneRiwiera5 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;