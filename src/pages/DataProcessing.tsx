import React from 'react';

const DataProcessing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">הסכם עיבוד נתונים</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. מטרת העיבוד</h2>
              <p>
                אנו מעבדים את הנתונים שלך למטרות ספציפיות ומוגדרות הקשורות לשירותי ניתוח פוליסות הביטוח שלנו.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. סוגי נתונים מעובדים</h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>מידע אישי בסיסי (שם, פרטי קשר)</li>
                <li>פרטי פוליסות ביטוח</li>
                <li>היסטוריית שיחות עם הבוט</li>
                <li>העדפות משתמש</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. אמצעי אבטחה</h2>
              <p>אנו מיישמים אמצעי אבטחה טכניים וארגוניים כולל:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>הצפנת נתונים</li>
                <li>בקרת גישה</li>
                <li>ניטור אבטחה</li>
                <li>גיבוי נתונים</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. תקופת שמירת נתונים</h2>
              <p>
                אנו שומרים את הנתונים שלך רק כל עוד נדרש לצורך אספקת השירותים שלנו או כנדרש על פי חוק.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. זכויות נושאי המידע</h2>
              <p>יש לך זכות:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>לגשת לנתונים שלך</li>
                <li>לתקן נתונים לא מדויקים</li>
                <li>למחוק את הנתונים שלך</li>
                <li>להגביל את עיבוד הנתונים</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessing;