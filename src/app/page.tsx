import { AboutSection } from "@/sections/About";
import { CertificatesSection } from "@/sections/CertificatesSection";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { WorkExperience } from "@/sections/WorkExprience";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <div>
      <ToastContainer
  position="bottom-right"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
      <Header />
      <HeroSection />
      <div id="projects">
        <ProjectsSection />
      </div>
      <TapeSection />
      {/* <TestimonialsSection/> */}
      <CertificatesSection/>
      <WorkExperience/>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
