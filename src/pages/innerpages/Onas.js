import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneOnas from '../../common/breadcrumb/BreadcrumbOneOnas';
import AboutOne from '../../components/section-components/AboutOne';
import ServicesTwo from '../../components/section-components/ServicesTwo';
import Counter from '../../components/section-components/Counter';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

// Przewiń stronę do góry z animacją
import $ from 'jquery'

const Onas = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <>
        <HeaderOne />

        <BreadcrumbOneOnas 
            title="O Nas"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="O Nas"
        />
        
        <AboutOne />
        <ServicesTwo />
        <Counter />
        <Quote />
        
        <FooterOne />
        </>
    )
}
    
export default Onas;