// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/HomeComponent/Navbar";
import LoginButton from "./components/HomeComponent/SearchBar";
import SearchBar from "./components/HomeComponent/Search";
import Footer from "./components/HomeComponent/Footer";
import HomePage from "./Render_Pages/HomePage";
import ServiceDetail from "./Render_Pages/service-detail";
import Contact from "./components/ServicesComponent/contact";
import InsightPage from "./Pages/InsightPage";
import CommunityPage from "./Pages/CommunitPage";
import DeveloperTeam from "./Pages/DeveloperTeam";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutCache from "./Pages/AboutPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import TermsOfUsePage from "./Pages/TermsOfUse";
import Careers from "./Pages/Career";
import CloudServicesPage from "./Pages/coudpage";
import CybersecurityServicesPage from "./Pages/cybersecurity";
import InfrastructureServicesPage from "./Pages/infrastructureservicepage";
import NetworkingServicesPage from "./Pages/NetworkingServicepage";
import AIDataServicesPage from "./Pages/aianddataservicepage";
import ConsultingServicesPage from "./Pages/consultingservicePage";

function App() {
  const location = useLocation();

  // paths where Navbar & Login should be hidden
  
  return (
    <>
      
          <Navbar />
          <LoginButton />
          {/* <SearchBar /> */}
     

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/infra" element={<InfrastructureServicesPage />} />
        <Route path="/service/network" element={<NetworkingServicesPage />} />
        <Route path="/service/cloud-solutions" element={<CloudServicesPage />} />
        <Route path="/service/cybersecurity" element={<CybersecurityServicesPage />} />
        <Route path="/service/AI" element={<AIDataServicesPage />} />
        {/* <Route path="/service/consulting" element={<ServiceDetail />} /> */}


        <Route path="/cloudservices" element={<CloudServicesPage />} />
        <Route path="/cybersecurity" element={<CybersecurityServicesPage />} /> 
        <Route path="/infrastructureservice" element={<InfrastructureServicesPage />} />
        <Route path="/networkingservice" element={<NetworkingServicesPage />} />
        <Route path="/aianddataservice" element={<AIDataServicesPage />} />
        <Route path="/consultingservice" element={<ConsultingServicesPage />} />


        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<InsightPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/developerteam" element={<DeveloperTeam />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutCache />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
