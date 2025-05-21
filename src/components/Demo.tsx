import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Demo = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  
  const conversation = [
    {
      user: "Is my dental check-up covered under my health insurance?",
      bot: "Based on your Supreme Health plan (page 8, section 2.3), routine dental check-ups are covered twice a year with a 20% co-pay. Your next eligible check-up is available now as your last one was 8 months ago."
    },
    {
      user: "Does my car insurance cover me if I lend my car to a friend?",
      bot: "According to your Premium Auto policy (page 12, section 4.1), your coverage extends to any driver who has your permission to use the vehicle. However, if the driver is under 25, there's an additional excess of $500 in case of a claim."
    },
    {
      user: "Am I covered for physiotherapy after my recent surgery?",
      bot: "Yes, your Supreme Health plan (page 15, section 3.7) covers up to 15 physiotherapy sessions following surgery, with a $25 co-pay per session. You'll need a referral from your surgeon, which you can upload directly through this chat."
    },
    {
      user: "What's my coverage for lost luggage during international travel?",
      bot: "Your Gold Travel Insurance (page 6, section 2.2) provides coverage up to $2,500 for lost luggage during international trips. Each individual item is covered up to $500, and electronics have a sub-limit of $1,000 total. You need to report the loss within 24 hours to be eligible for a claim."
    }
  ];

  const nextMessage = () => {
    setActiveMessage((prev) => (prev + 1) % conversation.length);
  };

  return (
    <section id="demo" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See It In Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how simple it is to get answers about your insurance coverage through WhatsApp.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* WhatsApp-style header */}
            <div className="bg-green-500 text-white p-4 flex items-center">
              <MessageCircle className="mr-2" />
              <div>
                <p className="font-medium">PolicyChat</p>
                <p className="text-xs opacity-80">Always online</p>
              </div>
            </div>
            
            {/* Chat area */}
            <div className="bg-gray-100 p-4 h-96 overflow-y-auto flex flex-col space-y-4">
              <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[80%]">
                <p className="text-gray-600 text-sm">
                  Hello! I'm your PolicyChat assistant. I've analyzed your insurance policies and I'm ready to answer any questions about your coverage.
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[80%]">
                <p className="text-gray-600 text-sm">
                  You can ask me about specific scenarios, coverage limits, exclusions, or anything else related to your insurance.
                </p>
              </div>
              
              <div className="bg-green-100 p-3 rounded-lg shadow-sm self-end max-w-[80%]">
                <p className="text-gray-800 text-sm">{conversation[activeMessage].user}</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[80%]">
                <p className="text-gray-600 text-sm">{conversation[activeMessage].bot}</p>
              </div>
            </div>
            
            {/* Input area */}
            <div className="bg-white p-3 border-t border-gray-200 flex items-center">
              <input
                type="text"
                className="flex-1 p-2 rounded-full bg-gray-100 text-gray-700 text-sm focus:outline-none"
                placeholder="Type a question about your coverage..."
                readOnly
              />
              <button 
                onClick={nextMessage}
                className="ml-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
              >
                Try Another Example
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;