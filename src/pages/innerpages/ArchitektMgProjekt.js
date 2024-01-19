import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
// import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import BlogDetailsFullwidthArchitekciMgprojekt from '../../components/blog-components/BlogDetailsFullwidthArchitekciMgprojekt';
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
        {/* <BreadcrumbOne 
            title="Partnerzy"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="MG Projekt"
        /> */}
        <BlogDetailsFullwidthArchitekciMgprojekt />
                
        <FooterOne />
        </>
    )
}

export default Faq ;