import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import BlogDetailsLeftSidebar from '../../components/blog-components/BlogDetailsLeftSidebar';
import FooterOne from '../../common/footer/FooterOne';

const PostsDetailsTwo = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Oferta"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Oferta"
        />
        
        <BlogDetailsLeftSidebar />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsTwo;