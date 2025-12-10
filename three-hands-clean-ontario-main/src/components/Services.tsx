
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Hammer, PaintRoller, Lightbulb, Sparkles, Users, Gift } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Cleaning Services",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      gradient: "from-blue-500 to-blue-700",
      services: [
        "Full house & apartment cleaning",
        "Office and business cleaning", 
        "Move-in/move-out cleans",
        "Deep cleaning services",
        "Regular maintenance cleaning"
      ]
    },
    {
      title: "Installations / Hanging",
      icon: <Hammer className="w-8 h-8 text-white" />,
      gradient: "from-purple-500 to-purple-700",
      services: [
        "TV mounting and setup",
        "Shelf installation", 
        "Light fixture installation",
        "Picture and mirror hanging",
        "Furniture assembly"
      ]
    },
    {
      title: "Assembly / Removal",
      icon: <Wrench className="w-8 h-8 text-white" />,
      gradient: "from-green-500 to-green-700",
      services: [
        "Furniture assembly",
        "Equipment installation",
        "Old furniture removal",
        "Appliance setup",
        "Storage solutions"
      ]
    },
    {
      title: "Minor Repairs",
      icon: <PaintRoller className="w-8 h-8 text-white" />,
      gradient: "from-orange-500 to-orange-700",
      services: [
        "Painting and touch-ups",
        "Drywall repairs", 
        "Caulking and sealing",
        "Faucet repairs",
        "Minor plumbing fixes"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From cleaning to repairs, we handle it all. Here's what we can do for you:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl transform -rotate-3"></div>
              <img 
                src="/lovable-uploads/17492270-ccff-41ff-be22-8e6729b143f6.png" 
                alt="Our services overview" 
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                Complete Home & Business Solutions
              </h3>
              <div className="space-y-6 text-xl text-gray-600">
                {[
                  "Residential & Commercial Cleaning",
                  "Small Repairs & Maintenance",
                  "Furniture Assembly & Installations",
                  "Fast, Friendly, and Reliable Service",
                  "Available 7 days a week – Flexible hours!"
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group overflow-hidden">
                <CardHeader className="text-center relative">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-3 text-lg font-bold">•</span>
                        <span className="leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 max-w-5xl mx-auto shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <Gift className="w-8 h-8 mr-3 text-yellow-500" />
                Special Offers Available!
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-bold text-2xl text-gray-900 mb-3">New Customer Special</h4>
                  <p className="text-3xl font-bold text-yellow-700">10% OFF First Service</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-2xl text-gray-900 mb-3">Special Discounts</h4>
                  <p className="text-gray-700 text-lg">Available for seniors and people with disabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
