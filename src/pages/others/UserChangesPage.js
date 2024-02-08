import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
// import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import UserDetailsChanges from '../../components/blog-components/UserDetailsChanges';
import FooterOne from '../../common/footer/FooterOne';

const UserChangesPage = () => {
    return (
        <>
        <HeaderOne />

        {/* <BreadcrumbOne 
            title="Blog"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Blog"
        /> */}
        
        <UserDetailsChanges />
                
        <FooterOne />
        </>
    )
}
    
export default UserChangesPage;