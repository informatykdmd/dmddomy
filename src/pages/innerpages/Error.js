import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import ErrorOne from '../../components/section-components/ErrorOne';
import FooterOne from '../../common/footer/FooterOne';

const Error = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="404 Error!"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="404"
        />
        
        <ErrorOne />
        
        <FooterOne />
        </>
    )
}
    
export default Error;