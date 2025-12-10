
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              About 3 Hands
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a family-run team of three brothers serving St. Catharines and Niagara 
              with over 7 years of experience in cleaning and maintenance services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl transform rotate-3"></div>
              <img 
                src="/lovable-uploads/05b23382-b60d-4d06-b89a-e6b699ed9597.png" 
                alt="Professional maintenance worker" 
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                Family-Owned, Professional Service
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Need your home or business cleaned—or something fixed? We're 3 Hands Cleaning & Maintenance, 
                delivering fast, friendly, and reliable service to our community.
              </p>
              <div className="grid gap-6">
                {[
                  { icon: Award, text: "Over 7 years of experience" },
                  { icon: Shield, text: "Insured and experienced" },
                  { icon: CheckCircle, text: "All work guaranteed" },
                  { icon: Clock, text: "Honest pricing, no surprises" },
                  { icon: CheckCircle, text: "Local and family-owned" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "7+", label: "Years Experience", gradient: "from-blue-500 to-blue-700" },
              { number: "100%", label: "Work Guaranteed", gradient: "from-green-500 to-green-700" },
              { number: "7", label: "Days a Week", gradient: "from-purple-500 to-purple-700" }
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
