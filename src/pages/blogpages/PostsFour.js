import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import BlogPostsRightSidebar from '../../components/blog-components/BlogPostsRightSidebar';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

const PostsFour = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Blog"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Blog"
        />
        
        <BlogPostsRightSidebar />
                
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default PostsFour;