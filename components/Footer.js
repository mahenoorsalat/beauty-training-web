import React from 'react';

const Footer = () => {
    return (
<>
        {/* Footer */}
        <footer className="p-10 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            </div>
            
            <div className="text-right">
              <p className="text-gray-600">Social Links</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <div>
              <p className="text-gray-500 text-sm">© 2025 Beauty Training Courses UK. All rights reserved.</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="w-24 h-24 border border-black flex items-center justify-center">
                <span className="text-xs font-bold text-center">BEAUTY<br/>TRAINING<br/>COURSES.</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">• Legal, Terms & Conditions, Privacy Policy</p>
            </div>
          </div>
        </footer>
</>
    );
}

export default Footer;
