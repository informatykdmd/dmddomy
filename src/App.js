import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeOne from './pages/homepages/HomeOne';
import HomeTwo from './pages/homepages/HomeTwo';
import HomeThree from './pages/homepages/HomeThree';
import HomeFour from './pages/homepages/HomeFour';
import AboutUs from './pages/innerpages/AboutUs';
import Onas from './pages/innerpages/Onas';
import OurTeam from './pages/innerpages/OurTeam';
import Price from './pages/innerpages/Price';
import ContactUs from './pages/innerpages/ContactUs';
import RegisterSubscriber from './pages/innerpages/RegisterSubscriber';
import PolitykaPrywatnosci from './pages/innerpages/PolitykaPrywatnosci';
import ZasadyWitryny from './pages/innerpages/ZasadyWitryny';
import Faq from './pages/innerpages/Faq';
import Pomoc from './pages/innerpages/Pomoc';
import ProjectsOne from './pages/projectpages/ProjectsOne';
import ProjectsTwo from './pages/projectpages/ProjectsTwo';
import ProjectsDetails from './pages/projectpages/ProjectsDetails';
import ProjectsDetailsKasjopea7 from './pages/projectpages/ProjectsDetailsKasjopea7';
import ProjectsDetailsDomzWidokiem3 from './pages/projectpages/ProjectsDetailsDomzWidokiem3';
import ProjectsDetailsOpalElegancja from './pages/projectpages/ProjectsDetailsOpalElegancja';
import ProjectsDetailswillaParkowa160 from './pages/projectpages/ProjectsDetailswillaParkowa160';
import ProjectsDetailsTytan134 from './pages/projectpages/ProjectsDetailsTytan134';
import ProjectsDetailsTurkus150 from './pages/projectpages/ProjectsDetailsTurkus150';
import ProjectsDetailsRiwiera5 from './pages/projectpages/ProjectsDetailsRiwiera5';
import ProjectsDetailsSzafir181 from './pages/projectpages/ProjectsDetailsSzafir181';
import ProjectsDetailsSzmaragd134 from './pages/projectpages/ProjectsDetailsSzmaragd134';
import ProjectsDetailsModena147 from './pages/projectpages/ProjectsDetailsModena147';
import ProjectsDetailsKasjopea154 from './pages/projectpages/ProjectsDetailsKasjopea154';
import ProjectsDetailsHelios157 from './pages/projectpages/ProjectsDetailsHelios157';
import ProjectsDetailsWillaSloneczna from './pages/projectpages/ProjectsDetailsWillaSloneczna';
import ProjectsDetailsWillaFloryda from './pages/projectpages/ProjectsDetailsWillaFloryda';
import ProjectsDetailsWillaAnnaMaria from './pages/projectpages/ProjectsDetailsWillaAnnaMaria';
import ProjectsDetailsTopaz from './pages/projectpages/ProjectsDetailsTopaz';
import ProjectsDetailsSydney from './pages/projectpages/ProjectsDetailsSydney';
import ProjectsDetailsSpokojnyZakatek from './pages/projectpages/ProjectsDetailsSpokojnyZakatek';
import ProjectsDetailsRezydencjaParkowa from './pages/projectpages/ProjectsDetailsRezydencjaParkowa';
import ProjectsDetailsRezydencjaLesna from './pages/projectpages/ProjectsDetailsRezydencjaLesna';
import ProjectsDetailsDomOtwarty from './pages/projectpages/ProjectsDetailsDomOtwarty';
import ProjectsDetailsWillaMalibu from './pages/projectpages/ProjectsDetailsWillaMalibu';
import ProjectsDetailsDomzWidokiem4 from './pages/projectpages/ProjectsDetailsDomzWidokiem4';
import ProjectsDetailsDomzWidokiem from './pages/projectpages/ProjectsDetailsDomzWidokiem';
import PostsOne from './pages/blogpages/PostsOne';
import ResutlsSearch from './pages/blogpages/ResutlsSearch'
import PostsTwo from './pages/blogpages/PostsTwo';
import PostsThree from './pages/blogpages/PostsThree';
import PostsFour from './pages/blogpages/PostsFour';
import PostsFourRealizacje from './pages/blogpages/PostsFourRealizacje';
import PostsDetailsOne from './pages/blogpages/PostsDetailsOne';
import RealizacjeDetailsOneRezydencjaParkowa from './pages/blogpages/RealizacjeDetailsOneRezydencjaParkowa';
import RealizacjeDetailsOneDomzWidokiem4 from './pages/blogpages/RealizacjeDetailsOneDomzWidokiem4';
import RealizacjeDetailsOneKasjopea from './pages/blogpages/RealizacjeDetailsOneKasjopea';
import RealizacjeDetailsOneOpalElegancja from './pages/blogpages/RealizacjeDetailsOneOpalElegancja';
import RealizacjeDetailsOneRezydencjaLesna from './pages/blogpages/RealizacjeDetailsOneRezydencjaLesna';
import PostsDetailsOneArchitekci from './pages/others/PostsDetailsOneArchitekci';
import PostsDetailsTwo from './pages/blogpages/PostsDetailsTwo';
import OfertaDetailsTwo from './pages/blogpages/OfertaDetailsTwo';
import OfertaDetailsTwoEleganckieResidencje from './pages/blogpages/OfertaDetailsTwoEleganckieResidencje';
import PostsDetailsThree from './pages/blogpages/PostsDetailsThree';
import Error from './pages/innerpages/Error';
import DevTech from './pages/innerpages/DevTech';
import MgProjekt from './pages/innerpages/ArchitektMgProjekt';
import MagArchitekci from './pages/innerpages/ArchitektMagArchitekci';
import TrzopArchitekci from './pages/innerpages/ArchitektTrzopArchitekci';
import Mobius from './pages/innerpages/ArchitektMobius';
import ReformArchitekci from './pages/innerpages/ArchitektReformArchitekci';
import Jio from './pages/innerpages/ArchitektJio';
import Barycz from './pages/innerpages/ArchitektBarycz';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<HomeOne/>}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/home-2'}`} element={<HomeTwo />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/home-3'}`} element={<HomeThree />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/home-4'}`} element={<HomeFour />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/home-4'}`} element={<HomeFour />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/about-us'}`} element={<AboutUs />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/o-nas'}`} element={<Onas />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/team'}`} element={<OurTeam />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/price'}`} element={<Price />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/contact-us'}`} element={<ContactUs />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/subscribe-us'}`} element={<RegisterSubscriber />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/polityka-prywatnosci'}`} element={<PolitykaPrywatnosci />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/zasady-witryny'}`} element={<ZasadyWitryny />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/faq'}`} element={<Faq />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/help'}`} element={<Pomoc />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/projects-fullwidth-three-column'}`} element={<ProjectsOne />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/projects-fullwidth-two-column'}`} element={<ProjectsTwo />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project'}`} element={<ProjectsDetails />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Kasjopea7'}`} element={<ProjectsDetailsKasjopea7 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-DomzWidokiem3'}`} element={<ProjectsDetailsDomzWidokiem3 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-OpalElegancja'}`} element={<ProjectsDetailsOpalElegancja />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-willaParkowa160'}`} element={<ProjectsDetailswillaParkowa160 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Tytan134'}`} element={<ProjectsDetailsTytan134 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Turkus150'}`} element={<ProjectsDetailsTurkus150 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Riwiera5'}`} element={<ProjectsDetailsRiwiera5 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Szafir181'}`} element={<ProjectsDetailsSzafir181 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Szmaragd134'}`} element={<ProjectsDetailsSzmaragd134 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Modena147'}`} element={<ProjectsDetailsModena147 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Kasjopea154'}`} element={<ProjectsDetailsKasjopea154 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Helios157'}`} element={<ProjectsDetailsHelios157 />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-WillaSloneczna'}`} element={<ProjectsDetailsWillaSloneczna />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-WillaFloryda'}`} element={<ProjectsDetailsWillaFloryda />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-WillaAnnaMaria'}`} element={<ProjectsDetailsWillaAnnaMaria />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Topaz'}`} element={<ProjectsDetailsTopaz />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-Sydney'}`} element={<ProjectsDetailsSydney />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-SpokojnyZakatek'}`} element={<ProjectsDetailsSpokojnyZakatek />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-RezydencjaParkowa'}`} element={<ProjectsDetailsRezydencjaParkowa />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-RezydencjaLesna'}`} element={<ProjectsDetailsRezydencjaLesna />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-DomOtwarty'}`} element={<ProjectsDetailsDomOtwarty />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-WillaMalibu'}`} element={<ProjectsDetailsWillaMalibu />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-DomzWidokiem4'}`} element={<ProjectsDetailsDomzWidokiem4 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-project-DomzWidokiem'}`} element={<ProjectsDetailsDomzWidokiem />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/blog-posts-fullwidth'}`} element={<PostsOne />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/search-results'}`} element={<ResutlsSearch />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/blog-posts-fullwidth-two-column'}`} element={<PostsTwo />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/blog-posts-left-sidebar'}`} element={<PostsThree />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/blog-posts-right-sidebar'}`} element={<PostsFour />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/realizacje-posts-right-sidebar'}`} element={<PostsFourRealizacje />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/single-realizacja-RezydencjaParkowa'}`} element={<RealizacjeDetailsOneRezydencjaParkowa />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-realizacja-DomzWidokiem4'}`} element={<RealizacjeDetailsOneDomzWidokiem4 />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-realizacja-Kasjopea'}`} element={<RealizacjeDetailsOneKasjopea />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-realizacja-OpalElegancja'}`} element={<RealizacjeDetailsOneOpalElegancja />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-realizacja-RezydencjaLesna'}`} element={<RealizacjeDetailsOneRezydencjaLesna />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/single-architekci'}`} element={<PostsDetailsOneArchitekci />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/blog-single'}`} element={<PostsDetailsOne />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-post-fullwidth'}`} element={<PostsDetailsOne />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-post-left-sidebar'}`} element={<PostsDetailsTwo />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/oferta-post-left-sidebar'}`} element={<OfertaDetailsTwo />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/oferta-post-left-sidebar-ER'}`} element={<OfertaDetailsTwoEleganckieResidencje />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/single-post-right-sidebar'}`} element={<PostsDetailsThree />}/>

          <Route exact path={`${process.env.PUBLIC_URL + '/architekci-mgprojekt'}`} element={<MgProjekt />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/architekci-magarchitekci'}`} element={<MagArchitekci />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/architekci-trzoparchitekci'}`} element={<TrzopArchitekci />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/architekci-mobius'}`} element={<Mobius />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/architekci-reform'}`} element={<ReformArchitekci />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/architekci-jio'}`} element={<Jio />}/>
          <Route exact path={`${process.env.PUBLIC_URL + '/architekci-barycz'}`} element={<Barycz />}/>
          {/* dev options */}
          <Route exact path={`${process.env.PUBLIC_URL + '/dev-page-reader-post'}`} element={<DevTech />}/>
          <Route path="/post/:postId" element={<PostsDetailsOne/>} />

          <Route path='*' element={<Error/>}/>        
        </Routes>
    </Router>
  );
}

export default App;
