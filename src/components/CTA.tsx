import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to understand your insurance coverage?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Join thousands of users who have simplified their insurance experience with PolicyChat.
          </p>
          
          <div className="bg-white bg-opacity-10 p-6 md:p-8 rounded-xl mb-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-2">15K+</div>
                <p className="text-blue-100">Policies Analyzed</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-blue-100">Accuracy Rate</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-2">5M+</div>
                <p className="text-blue-100">Questions Answered</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
              Get Started For Free <ArrowRight size={20} className="ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
              See Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;