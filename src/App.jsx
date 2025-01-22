import "./App.css";
import CaringSection from "./components/caringSection/CaringSection";
import CommunitySection from "./components/communitySection/CommunitySection";
import CustomersSection from "./components/customersSection/CustomersSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OfferSection from "./components/offerSection/OfferSection";
import ClientsSection from "./components/ourClients/OurClients";
import Section from "./components/section/section";
import StatisticSection from "./components/statisticSection/StatisticSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientsSection />
      <CommunitySection />
      <Section
        imgUrl="../src/assets/Frame.png"
        heading="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
      <StatisticSection />
      <Section
        imgUrl="../src/assets/pana.png"
        heading="How to design your site footer like we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
      />
      <CustomersSection />
      <CaringSection />
      <OfferSection />
      <Footer />
    </>
  );
}

export default App;
