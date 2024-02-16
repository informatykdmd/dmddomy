import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOnePoddasze from '../../common/breadcrumb/BreadcrumbOnePoddasze';
import OfertaDetailsLeftSidebarNowoczesne from '../../components/blog-components/OfertaDetailsLeftSidebarNowoczesne';
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
            title="Nowoczesne Stodoły"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Nowoczesne Stodoły"
            imgUrl="images/banner/bn-01-1920x480-Nowoczesne.png"
        />
        
        <OfertaDetailsLeftSidebarNowoczesne />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;