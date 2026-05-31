import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors";
import CourseCategories from "@/components/CourseCategories";
import EnrollmentForm from "@/components/EnrollmentForm";
import Testimonials from "@/components/Testimonials";
import SuccessStories from "@/components/SuccessStories";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <Instructors />
        <CourseCategories />
        <EnrollmentForm />
        <Testimonials />
        <SuccessStories />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
