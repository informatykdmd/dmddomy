import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneEleganckieResidencje from '../../common/breadcrumb/BreadcrumbOneEleganckieResidencje';
import OfertaDetailsLeftSidebarEleganckieResidencje from '../../components/blog-components/OfertaDetailsLeftSidebarEleganckieResidencje';
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

        <BreadcrumbOneEleganckieResidencje
            title="Eleganckie Rezydencje"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Eleganckie Rezydencje"
        />
        
        <OfertaDetailsLeftSidebarEleganckieResidencje />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;