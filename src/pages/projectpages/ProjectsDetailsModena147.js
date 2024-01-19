import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneModena147 from '../../common/breadcrumb/BreadcrumbOneModena147';
import ProjectsDetailsOneModena147 from '../../components/project-components/ProjectsDetailsOneModena147';
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

        <BreadcrumbOneModena147
            title="Modena"
            rootUrl="/oferta-post-left-sidebar"
            parentUrl="OFERTA"
            currentUrl="Modena"
        />
        
        <ProjectsDetailsOneModena147 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;