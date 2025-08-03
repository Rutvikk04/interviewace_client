import Nav from "@/components/landing/Nav";
import "./globals.css";
import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import ProgressReview from "@/components/landing/ProgressReview";


export default function Home() {
  return (

    <>
      <Nav />
      <HeroSection />
      <Features />
      <ProgressReview />
      <Testimonials />
      <CTA />
    </>
  );
}
