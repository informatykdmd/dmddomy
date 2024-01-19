import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BlogDetailsFullwidthArchitekciReform from '../../components/blog-components/BlogDetailsFullwidthArchitekciReform';
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
        
        <BlogDetailsFullwidthArchitekciReform />
                
        <FooterOne />
        </>
    )
}

export default Faq ;