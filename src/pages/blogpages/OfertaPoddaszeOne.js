import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOnePoddasze from '../../common/breadcrumb/BreadcrumbOnePoddasze';
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

        <BreadcrumbOnePoddasze
            title="Domy Z Poddaszem"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Domy Z Poddaszem"
            imgUrl="images/banner/bn-01-1920x480-Poddasze.png"
        />
        
        <OfertaDetailsLeftSidebarPoddasze />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;