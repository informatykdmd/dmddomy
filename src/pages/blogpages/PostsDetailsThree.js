import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import BlogDetailsRightSidebar from '../../components/blog-components/BlogDetailsRightSidebar';
import FooterOne from '../../common/footer/FooterOne';

const PostsDetailsThree = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Blog"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Blog"
        />
        
        <BlogDetailsRightSidebar />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsThree;