import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneArchitekci from '../../common/breadcrumb/BreadcrumbOneArchitekci';
import BlogDetailsFullwidthArchitekci from '../../components/blog-components/BlogDetailsFullwidthArchitekci';
import FooterOne from '../../common/footer/FooterOne';

const PostsDetailsOne = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOneArchitekci 
            title="Architekci"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Architekci"
        />
        
        <BlogDetailsFullwidthArchitekci />
                
        <FooterOne />
        </>
    )
}
    
export default PostsDetailsOne;