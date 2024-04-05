import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import ProjectsDetailsOneKoparka from '../../components/project-components/ProjectsDetailsOneKoparka';
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
        
        <ProjectsDetailsOneKoparka />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;