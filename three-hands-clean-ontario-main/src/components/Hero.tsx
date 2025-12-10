import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/gold.png" 
              alt="3 Hands Cleaning & Maintenance Logo" 
              className="mx-auto h-65 w-auto mb-8 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight animate-fade-in bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            3 HANDS
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-100 animate-fade-in">
            CLEANING & MAINTENANCE
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Your Home. Our Hands. Clean & Fixed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in">
            <Badge variant="secondary" className="bg-white/15 backdrop-blur-sm text-white border-white/30 text-lg py-3 px-6 hover:bg-white/20 transition-all duration-300">
              7+ Years Experience
            </Badge>
            <Badge variant="secondary" className="bg-white/15 backdrop-blur-sm text-white border-white/30 text-lg py-3 px-6 hover:bg-white/20 transition-all duration-300">
              Available 7 Days a Week
            </Badge>
            <Badge variant="secondary" className="bg-white/15 backdrop-blur-sm text-white border-white/30 text-lg py-3 px-6 hover:bg-white/20 transition-all duration-300">
              St. Catharines & Niagara
            </Badge>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-6 rounded-2xl mb-10 max-w-md mx-auto shadow-2xl animate-scale-in">
            <p className="font-bold text-xl">Special Intro Offer</p>
            <p className="text-2xl font-bold">10% OFF Your First Service!</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 text-xl px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-blue-900 hover:bg-white hover:text-blue-900 text-xl px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm"
              onClick={scrollToContact}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
