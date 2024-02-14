import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import ProjectsDetailsOneHiacynt3 from '../../components/project-components/ProjectsDetailsOneHiacynt3';
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
        
        <ProjectsDetailsOneHiacynt3 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;