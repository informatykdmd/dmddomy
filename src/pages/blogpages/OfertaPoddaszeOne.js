import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneParter from '../../common/breadcrumb/BreadcrumbOneParter';
import OfertaDetailsLeftSidebarPoddasze from '../../components/blog-components/OfertaDetailsLeftSidebarPoddasze';
import FooterOne from '../../common/footer/FooterOne';

// Przewiń stronę do góry z animacją 
import $ from 'jquery'

const PostsDetailsTwo = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />

        <BreadcrumbOneParter
            title="Domy Z Poddaszem"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Domy Z Poddaszem"
        />
        
        <OfertaDetailsLeftSidebarPoddasze />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;