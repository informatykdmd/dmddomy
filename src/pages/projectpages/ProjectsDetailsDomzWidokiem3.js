import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneDomzWidokiem3 from '../../common/breadcrumb/BreadcrumbOneDomzWidokiem3';
import ProjectsDetailsOneDomzWidokiem3 from '../../components/project-components/ProjectsDetailsOneDomzWidokiem3';
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

        <BreadcrumbOneDomzWidokiem3
            title="Dom z Widokiem 3"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Dom z Widokiem 3"
        />
        
        <ProjectsDetailsOneDomzWidokiem3 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;