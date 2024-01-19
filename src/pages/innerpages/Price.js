import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PriceTab from '../../components/inner-components/PriceTab';
import TeamOne from '../../components/section-components/TeamOne';
import Counter from '../../components/section-components/Counter';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

const Price = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOne 
            title="Our Team"
            rootUrl="/"
            parentUrl="Home"
            currentUrl="Our Team"
        />
        
        <PriceTab />
        
        <TeamOne />
        
        <Counter />
        
        <Quote />
                
        <FooterOne />
        </>
    )
}
    
export default Price;