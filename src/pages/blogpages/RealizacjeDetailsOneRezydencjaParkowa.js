import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
// import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import BlogDetailsFullwidthRezydencjaParkowa from '../../components/blog-components/BlogDetailsFullwidthRezydencjaParkowa';
import FooterOne from '../../common/footer/FooterOne';

// Przewiń stronę do góry z animacją
import $ from 'jquery'

const PostsDetailsOne = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />

        {/* <BreadcrumbOne 
            title="Blog"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Blog"
        /> */}
        
        <BlogDetailsFullwidthRezydencjaParkowa />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsOne;