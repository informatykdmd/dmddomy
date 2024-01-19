import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneDomzWidokiem4 from '../../common/breadcrumb/BreadcrumbOneDomzWidokiem4';
import ProjectsDetailsOneDomzWidokiem4 from '../../components/project-components/ProjectsDetailsOneDomzWidokiem4';
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

        <BreadcrumbOneDomzWidokiem4
            title="Dom z Widokiem 4"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Dom z Widokiem 4"
        />
        
        <ProjectsDetailsOneDomzWidokiem4 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;