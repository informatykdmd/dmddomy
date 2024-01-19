import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneSpokojnyZakatek from '../../common/breadcrumb/BreadcrumbOneSpokojnyZakatek';
import ProjectsDetailsOneSpokojnyZakatek from '../../components/project-components/ProjectsDetailsOneSpokojnyZakatek';
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

        <BreadcrumbOneSpokojnyZakatek 
            title="Spokojny Zakątek"
            rootUrl="/oferta-post-left-sidebar-ER"
            parentUrl="OFERTA"
            currentUrl="Spokojny Zakątek"
        />
        
        <ProjectsDetailsOneSpokojnyZakatek />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;