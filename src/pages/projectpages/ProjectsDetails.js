import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import ProjectsDetailsOne from '../../components/project-components/ProjectsDetailsOne';
import FooterOne from '../../common/footer/FooterOne';

const ProjectsDetails = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Project Details"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Project Details"
        />
        
        <ProjectsDetailsOne />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;