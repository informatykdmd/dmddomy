import React from 'react';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOneOnas from '../../common/breadcrumb/BreadcrumbOneOnas';
import ContactUsForm from '../../components/inner-components/ContactUsForm';
import TeamOne from '../../components/section-components/TeamOne';
import Quote from '../../components/section-components/Quote';
import FooterOne from '../../common/footer/FooterOne';

const ContactUs = () => {
    return (
        <>
        <HeaderOne />

        <BreadcrumbOneOnas 
            title="Kontakt z Nami"
            rootUrl="/"
            parentUrl="DMD"
            currentUrl="Kontakt"
        />
        
        <ContactUsForm />
        
        <TeamOne />
        
        <Quote />
        
        <FooterOne />
        </>
    )
}
    
export default ContactUs;