import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import OrganizationSection from '../components/sections/OrganizationSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import TechStackSection from '../components/sections/TechStackSection';
import CTASection from '../components/sections/CTASection';
import ConnectSection from '../components/sections/ConnectSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <OrganizationSection />
      <CertificationsSection />
      <TechStackSection />
      <CTASection />
      <ConnectSection />
    </>
  );
}
