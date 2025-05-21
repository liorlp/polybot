import React from 'react';
import { ChevronLeft } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              הבן את פוליסת הביטוח שלך תוך שניות
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
            שוחח עם הבוט החכם שלנו בוואטסאפ כדי לגלות בדיוק מה הכיסוי שלך—בלי לבזבז זמן על קריאת מאות עמודים של מסמכי הפוליסה.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                התחל עכשיו <ChevronLeft size={20} className="mr-2" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                צפה בהדגמה
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-200 rounded-full opacity-30 animate-pulse delay-300"></div>
              
              <div className="w-full max-w-md relative z-10 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center bg-green-500 text-white p-3 rounded-t-lg">
                  <span className="font-medium">שיחת וואטסאפ</span>
                </div>
                <div className="bg-gray-100 p-4 space-y-4 rounded-b-lg">
                  <div className="bg-white p-3 rounded-lg shadow-sm w-4/5">
                    <p className="text-gray-600 text-sm">היי!  האם אני מכוסה לטיפולים אצל קלינאית תקשורת לילדה שלי?</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg shadow-sm w-4/5 mr-auto">
                    <p className="text-gray-800 text-sm">כן, לפי הפוליסה שלך (עמוד 77, סעיף 3.9.4), אתה מכוסה עד 60% מעלות הטיפול, אך לא
יותר מ- ₪131 לטיפול, ולא יותר מ- 30 טיפולים במהלך תקופת
הביטוח.<br/>
תקופת אכשרה לסעיף זה 12 חודשים מיום תחילת הביטוח.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;