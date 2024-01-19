import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import BlogPostFullwidthThreeCol from '../../components/blog-components/BlogPostFullwidthThreeCol';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

const PostsOne = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Blog"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Blog"
        />
        
        <BlogPostFullwidthThreeCol />
                
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default PostsOne;