import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import ProjectsDetailsOneWymarzony9 from '../../components/project-components/ProjectsDetailsOneWymarzony9';
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
        
        <ProjectsDetailsOneWymarzony9 />
                                
        <FooterOne />
        </>
    )
}
    
export default ProjectsDetails;