import Banner from "@/Components/home_components/Bannar"; // Importing the Banner component
import HeroSection from "@/Components/home_components/Hero_section"; // Importing the Hero Section component
import React from "react"; // Importing React for component rendering
import CustomerChoice from "@/Components/home_components/Customer_choice"; // Importing Customer Choice component
import PopularProduct from "@/Components/home_components/Popular_products"; // Importing Popular Products component
import SaleBanner from "@/Components/home_components/Company_features"; // Importing Sale Banner component
import PocketFriendlyContainer from "@/Components/home_components/Pocket_friendly_container"; // Importing Pocket Friendly Container
import AdvertisementBanner from "@/Components/home_components/Advertisment_bannar"; // Importing Advertisement Banner
import FeatureProduct from "@/Components/home_components/Featured_product"; // Importing Featured Product component
import LatestNews from "@/Components/home_components/News_component"; // Importing Latest News component (not used)
import Testimonial from "@/Components/home_components/Testimonial_component"; // Importing Testimonial component
import Newsletter from "@/Components/home_components/Newsletter.components"; // Importing Newsletter component (not used)

const Home = () => {
  return (
    <>
      <HeroSection /> {/* Hero section component */}
      <Banner /> {/* Main banner component */}
      <CustomerChoice /> {/* Customer choice section */}
      <PopularProduct /> {/* Popular products display */}
      <SaleBanner /> {/* Sale banner or company features */}
      <PocketFriendlyContainer /> {/* Section for budget-friendly products */}
      <AdvertisementBanner /> {/* Advertisement banner */}
      <FeatureProduct /> {/* Featured products section */}
      <Testimonial /> {/* Testimonials from customers */}
    </>
  );
};

export default Home; // Exporting Home component as default
