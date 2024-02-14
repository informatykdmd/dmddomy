import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import ProjectsDetailsOneOszust from '../../components/project-components/ProjectsDetailsOneOszust';
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
        
        <ProjectsDetailsOneOszust />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;