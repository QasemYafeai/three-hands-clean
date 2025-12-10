
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Hammer, PaintRoller, Lightbulb } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";


const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <RecentProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
