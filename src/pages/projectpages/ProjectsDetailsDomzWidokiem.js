import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneDomzWidokiem from '../../common/breadcrumb/BreadcrumbOneDomzWidokiem';
import ProjectsDetailsOneDomzWidokiem from '../../components/project-components/ProjectsDetailsOneDomzWidokiem';
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

        <BreadcrumbOneDomzWidokiem
            title="Dom z Widokiem"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Dom z Widokiem"
        />
        
        <ProjectsDetailsOneDomzWidokiem />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;