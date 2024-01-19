import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import BlogPostsLeftSidebar from '../../components/blog-components/BlogPostsLeftSidebar';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

const PostsThree = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Blog"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Blog"
        />
        
        <BlogPostsLeftSidebar />
                
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default PostsThree;