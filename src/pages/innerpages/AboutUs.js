import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import AboutOne from '../../components/section-components/AboutOne';
// import TeamOne from '../../components/section-components/TeamOne';
// import Pricing from '../../components/section-components/Pricing';
import FooterOne from '../../common/footer/FooterOne';

const AboutUs = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="About Us"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="About Us"
        />
        
        <AboutOne />
        
        {/* <TeamOne /> */}
        
        {/* <Pricing /> */}
        
        <FooterOne />
        </>
    )
}
    
export default AboutUs;