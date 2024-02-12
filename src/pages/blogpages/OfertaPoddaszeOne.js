import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneMalePerly from '../../common/breadcrumb/BreadcrumbOneMalePerly';
import OfertaDetailsLeftSidebar from '../../components/blog-components/OfertaDetailsLeftSidebar';
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

        <BreadcrumbOneMalePerly 
            title="Małe Perły"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Małe Perły"
        />
        
        <OfertaDetailsLeftSidebar />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;