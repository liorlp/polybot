import React from 'react';
import { MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-blue-400 ml-2" />
              <span className="text-xl font-bold text-white">PolicyChat</span>
            </div>
            <p className="mb-6">
              הבן את הביטוח שלך בקלות באמצעות בינה מלאכותית וWhatsApp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">מוצר</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">תכונות</a></li>
               {/*  <li><a href="#" className="hover:text-white transition-colors">מחירים</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li> */}
              <li><a href="#faq" className="hover:text-white transition-colors">שאלות נפוצות</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">חברה</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">אודות</a></li>
              <li><a href="#" className="hover:text-white transition-colors">קריירה</a></li>
              <li><a href="#" className="hover:text-white transition-colors">בלוג</a></li>
              <li><a href="#" className="hover:text-white transition-colors">צור קשר</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">משפטי</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">מדיניות פרטיות</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">תנאי שימוש</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">מדיניות קובצי Cookie</Link></li>
              <li><Link to="/data-processing" className="hover:text-white transition-colors">עיבוד נתונים</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 PolicyChat. כל הזכויות שמורות.</p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-300 rounded px-3 py-1 focus:outline-none">
              <option>עברית</option>
              <option>English</option>
              <option>العربية</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;