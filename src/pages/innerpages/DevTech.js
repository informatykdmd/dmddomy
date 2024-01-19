import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
// import BlogCommentForm from '../../elements/BlogCommentForm';
// import SearchResults from '../../elements/SearchResults';
import JsonReader from '../../supportscripts/JsonReader';
import ZoomableImage from '../../supportscripts/ZoomableImage';
// import ObiectReader from '../../supportscripts/obiectReader';

import $ from 'jquery';
// import BlogDetailsFullwidthArchitekci from '../../components/blog-components/BlogDetailsFullwidthArchitekci';

const DevTech = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />
        {/* <ReaderPosts /> */}
        {/* <BlogCommentForm /> */}
        {/* <SearchResults /> */}
        <JsonReader />
        <ZoomableImage src="images/project/bl-01-750x430-Kasjopea7-1.png" alt="Zoomable Image" />
        {/* <ObiectReader /> */}
        {/* <BlogDetailsFullwidthArchitekci /> */}
        
        </>
    )
}
    
export default DevTech;