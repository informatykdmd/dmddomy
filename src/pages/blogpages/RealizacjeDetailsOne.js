import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import BlogDetailsFullwidth from '../../components/blog-components/BlogDetailsFullwidth';
import FooterOne from '../../common/footer/FooterOne';

const PostsDetailsOne = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Blog"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Blog"
        />
        
        <BlogDetailsFullwidth />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsOne;