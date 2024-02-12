import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import ProjectsDetailsOneDomWaski3 from '../../components/project-components/ProjectsDetailsOneDomWaski3';
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
        
        <ProjectsDetailsOneDomWaski3 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;