import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOnePoddasze from '../../common/breadcrumb/BreadcrumbOnePoddasze';
import OfertaDetailsLeftSidebarUslugi from '../../components/blog-components/OfertaDetailsLeftSidebarUslugi';
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
            title="Usługi Dodatkowe"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Usługi Dodatkowe"
            imgUrl="images/banner/bn-01-1920x480-Uslugi.png"
        />
        
        <OfertaDetailsLeftSidebarUslugi />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;