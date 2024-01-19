import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';
import SearchResults from '../../elements/SearchResults';

const PostsOne = () => {
    return (
        <>
        <HeaderOne />
        
        <SearchResults />
                
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default PostsOne;