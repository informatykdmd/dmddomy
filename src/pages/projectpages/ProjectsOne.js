import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import ProjectsFullwidthThreeCol from '../../components/project-components/ProjectsFullwidthThreeCol';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

const ProjectsOne = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Projects"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Projects"
        />
        
        <ProjectsFullwidthThreeCol />
                
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default ProjectsOne;