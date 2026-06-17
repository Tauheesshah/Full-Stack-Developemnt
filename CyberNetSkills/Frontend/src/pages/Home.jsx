import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TrustedCompanies from "../components/TrustedCompanies";
import WhyChooseUs from "../components/WhyChooseUs";
import  CourseCard from "../components/CourseCard"
import PlacementCard from "../components/PlacementCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";
const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TrustedCompanies />
      <CourseCard />
      <WhyChooseUs />
      <PlacementCard />
      <TestimonialCard />
      <FAQ />
      <LeadForm />
    </>
  );
};

export default Home;