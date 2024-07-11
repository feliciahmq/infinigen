import { LandingNavbar } from "@/components/landingNavbar";
import { LandingHero } from "@/components/landingHero";
import { LandingContent } from "@/components/landingContent";

const LandingPage = () => {
  return (
    <div className="h-full">
       <LandingNavbar />
       <LandingHero />
       <LandingContent />
    </div>
  );
}

export default LandingPage;