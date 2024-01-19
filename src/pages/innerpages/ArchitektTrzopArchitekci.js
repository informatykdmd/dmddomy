import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BlogDetailsFullwidthArchitekciTA from '../../components/blog-components/BlogDetailsFullwidthArchitekciTA';
import FooterOne from '../../common/footer/FooterOne';
import $ from 'jquery';

const Faq = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />
        
        <BlogDetailsFullwidthArchitekciTA />
                
        <FooterOne />
        </>
    )
}

export default Faq ;