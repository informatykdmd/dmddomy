import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOnePoddasze from '../../common/breadcrumb/BreadcrumbOnePoddasze';
import OfertaDetailsLeftSidebarPietrowe from '../../components/blog-components/OfertaDetailsLeftSidebarPietrowe';
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
            title="Domy Piętrowe"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Domy Piętrowe"
            imgUrl="images/banner/bn-01-1920x480-Pietrowe.png"
        />
        
        <OfertaDetailsLeftSidebarPietrowe />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;