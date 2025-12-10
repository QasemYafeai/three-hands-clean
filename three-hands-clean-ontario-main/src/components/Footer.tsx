
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/gold.png" 
                  alt="3 Hands Logo" 
                  className="h-20 w-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-3">3 Hands Cleaning & Maintenance</h3>
                <p className="text-gray-300 text-lg">Your Home. Our Hands. Clean & Fixed.</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-300">Our Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors duration-200">Residential Cleaning</li>
                <li className="hover:text-white transition-colors duration-200">Commercial Cleaning</li>
                <li className="hover:text-white transition-colors duration-200">Minor Repairs</li>
                <li className="hover:text-white transition-colors duration-200">Furniture Assembly</li>
                <li className="hover:text-white transition-colors duration-200">Installations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-300">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <p className="hover:text-white transition-colors duration-200">Email: 3handsservice@gmail.com</p>
                <p className="hover:text-white transition-colors duration-200">Service Area: St. Catharines & Niagara</p>
                <p className="hover:text-white transition-colors duration-200">Available: 7 days a week</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-12 text-center text-gray-400">
            <p className="text-lg">&copy; 2019 3 Hands Cleaning & Maintenance. All rights reserved.</p>
            <p className="mt-3 text-blue-300">Proudly serving St. Catharines and the Niagara Region</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
