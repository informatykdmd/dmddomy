import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneParter from '../../common/breadcrumb/BreadcrumbOneParter';
import OfertaDetailsLeftSidebarParterowe from '../../components/blog-components/OfertaDetailsLeftSidebarParterowe';
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
            title="Domy Parterowe"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Domy Parterowe"
        />
        
        <OfertaDetailsLeftSidebarParterowe />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;