import Banner from "@/Components/home_components/Bannar"; // Banner section for promotions or highlights
import HeroSection from "@/Components/home_components/Hero_section"; // Main hero section with key messages
import React from "react";
import CustomerChoice from "@/Components/home_components/Customer_choice"; // Section showing customer-favorite products
import PopularProduct from "@/Components/home_components/Popular_products"; // Displays trending/popular products
import SaleBanner from "@/Components/home_components/Company_features"; // Promotional banner for sales and offers
import PocketFriendlyContainer from "@/Components/home_components/Pocket_friendly_container"; // Budget-friendly product highlights
import AdvertisementBanner from "@/Components/home_components/Advertisment_bannar"; // Additional advertising space
import FeatureProduct from "@/Components/home_components/Featured_product"; // Showcases featured products
import LatestNews from "@/Components/home_components/News_component"; // Section for latest news or blog posts (not used in the return)
import Testimonial from "@/Components/home_components/Testimonial_component"; // Displays customer testimonials and reviews
import Newsletter from "@/Components/home_components/Newsletter.components"; // Newsletter subscription component (not used in the return)

const Home = () => {
  return (
    <>
      <HeroSection /> {/* Main landing section with visuals and CTA */}
      <Banner /> {/* Promotional banner */}
      <CustomerChoice /> {/* Highlights top-rated products */}
      <PopularProduct /> {/* Displays popular products */}
      <SaleBanner /> {/* Showcases current sales and promotions */}
      <PocketFriendlyContainer /> {/* Budget-friendly product options */}
      <AdvertisementBanner /> {/* Additional ad section */}
      <FeatureProduct /> {/* Displays featured products */}
      <Testimonial /> {/* Customer feedback and testimonials */}
    </>
  );
};

export default Home;
