import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Star, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Service Request: ${formData.service || 'General Inquiry'}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Requested: ${formData.service}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:info@3hands.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email application should open with the pre-filled message.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to get started? Contact us today for a free quote on your cleaning or maintenance project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="text-3xl flex items-center">
                    <Send className="w-8 h-8 mr-3" />
                    Get Your Free Quote
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-xl">
                    Fill out the form below and we'll get back to you quickly with a personalized quote.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(905) 123-4567"
                          className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="House Cleaning">House Cleaning</option>
                        <option value="Office Cleaning">Office Cleaning</option>
                        <option value="Move-in/Move-out Cleaning">Move-in/Move-out Cleaning</option>
                        <option value="Furniture Assembly">Furniture Assembly</option>
                        <option value="TV Mounting">TV Mounting</option>
                        <option value="Light Installation">Light Installation</option>
                        <option value="Minor Repairs">Minor Repairs</option>
                        <option value="Painting">Painting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your project, preferred timing, and any specific requirements..."
                        rows={4}
                        className="border-2 border-gray-200 focus:border-blue-500 rounded-lg resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message & Get Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center">
                    <Phone className="w-6 h-6 mr-3" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Email</h4>
                      <p className="text-gray-600">info@3hands.ca</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Service Area</h4>
                      <p className="text-gray-600">St. Catharines & Niagara Region, Ontario</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Availability</h4>
                      <p className="text-gray-600">7 days a week - Flexible hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Star className="w-6 h-6 text-yellow-500 mr-3" />
                    Why Choose 3 Hands?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Over 7 years of experience",
                    "Fully insured and bonded",
                    "100% satisfaction guarantee",
                    "Honest, upfront pricing",
                    "Family-owned local business"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-2"></div>
                  <img 
                    src="/lovable-uploads/ca2fa7ac-8d3a-4e69-b5b0-1a4b14d2de46.png" 
                    alt="Before and after cleaning service" 
                    className="rounded-2xl shadow-2xl w-full h-auto relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
