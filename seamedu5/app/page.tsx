import HeroSection2 from "@/component/HeroSection2";
import CourseSectionNew from "@/component/CourseSection-new";
import NewsUpdate from "@/component/NewsUpdate";
import FAQsSection from "@/component/FAQsSection";

import LifeAtSeamedu from "@/component/LifeAtSeamedu";
import PlacementHiring from "@/component/PlacementHiring";
import StudentWork4 from "@/component/StudentWork4";
import CampusesSection from "@/component/CampusesSection";

import WhyChoose from "@/component/WhyChooseUs";
import SuccessStories from "@/component/SuccsesStory";
import PlacementHighlights from "@/component/PlacementUpdateNew";

// import SuccessStories from "@/component/main/SucessStories";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <HeroSection /> */}
      {/* <NewHeroSection /> */}
      <HeroSection2 />
       
      {/* <HeroSection3 /> */}
      {/* <HeroSection4 /> */}
      {/* <HeroQuickLinks /> */}
      {/*  */}
      {/* <WhyChooseUs/> */}
      <WhyChoose/>
      {/* <AboutUs /> */}
      {/* <AboutUs2 /> */}

      

      {/* <CertificationsSection /> */}
   
      <CourseSectionNew />
      <CampusesSection/>
      {/* <OurCampuses /> */}
      <PlacementHiring/>

<PlacementHighlights/>
      <LifeAtSeamedu/>
      {/* <OurCampuses /> */}
     
      <StudentWork4/>
      {/* <StudentWork4/> */}
      
      {/* <TopPlacement /> */}
      {/* <PlacementPartner /> */}
      {/* <TestimonialSection/> */}
      <SuccessStories/>
      <NewsUpdate />
      {/* <NewTestimonials /> */}
       {/* <TestimonialSlider /> */}
       
       
      {/* <ConnectWithUs /> */}

         {/* <LifeAtSeamedu /> */}

      {/* <TopPlacement /> */}
      {/* <PlacementPartner /> */}
      {/* <LifeAtSeamedu /> */}
      {/* <StudentWork4/> */}
      {/* <NewsUpdate /> */}
      {/* <SuccessStories/> */}
      {/* <NewTestimonials /> */}
      {/* <TestimonialSection /> */}
      {/* <ConnectWithUs /> */}

      <FAQsSection />
    </main>
    // <LifeAtSeamedu />
  );
}
