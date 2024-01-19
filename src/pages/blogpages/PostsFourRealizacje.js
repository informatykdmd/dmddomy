import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneRealizacje from '../../common/breadcrumb/BreadcrumbOneRealizacje';
import RealizacjePostsRightSidebar from '../../components/blog-components/RealizacjePostsRightSidebar';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

// Przewiń stronę do góry z animacją
import $ from 'jquery'

const PostsFour = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />

        <BreadcrumbOneRealizacje 
            title="Realizacje"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Realizacje"
        />
        
        <RealizacjePostsRightSidebar />
                
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default PostsFour;