import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOnePoddasze from '../../common/breadcrumb/BreadcrumbOnePoddasze';
import OfertaDetailsLeftSidebarWille from '../../components/blog-components/OfertaDetailsLeftSidebarWille';
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
            title="Wille"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Wille"
            imgUrl="images/banner/bn-01-1920x480-EleganckieResidencje.png"
        />
        
        <OfertaDetailsLeftSidebarWille />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;