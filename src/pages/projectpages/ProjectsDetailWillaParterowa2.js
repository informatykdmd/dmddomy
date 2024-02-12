import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneWillaParterowa2 from '../../common/breadcrumb/BreadcrumbOneWillaParterowa2';
import ProjectsDetailsOneWillaParterowa2 from '../../components/project-components/ProjectsDetailsOneWillaParterowa2';
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

        {/* <BreadcrumbOneWillaParterowa2
            title="Kasjopea 7"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Kasjopea 7"
        /> */}
        
        <ProjectsDetailsOneWillaParterowa2 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;