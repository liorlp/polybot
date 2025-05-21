import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">מדיניות קובצי Cookie</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. מהם קובצי Cookie?</h2>
              <p>
                קובצי Cookie הם קבצי טקסט קטנים המאוחסנים במכשיר שלך כאשר אתה מבקר באתר שלנו. הם עוזרים לנו לזכור את ההעדפות שלך ולספק לך חוויית משתמש טובה יותר.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. איך אנחנו משתמשים בקובצי Cookie</h2>
              <p>אנו משתמשים בקובצי Cookie עבור:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>שמירת מצב ההתחברות שלך</li>
                <li>זכירת העדפות השפה שלך</li>
                <li>ניתוח תנועת האתר</li>
                <li>שיפור ביצועי האתר</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. סוגי קובצי Cookie</h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>קובצי Cookie הכרחיים: נדרשים לתפעול האתר</li>
                <li>קובצי Cookie של העדפות: זוכרים את בחירותיך</li>
                <li>קובצי Cookie סטטיסטיים: עוזרים לנו להבין איך משתמשים באתר</li>
                <li>קובצי Cookie שיווקיים: משמשים למעקב אחר פעילות באתרים שונים</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. ניהול קובצי Cookie</h2>
              <p>
                אתה יכול לשלוט בקובצי Cookie דרך הגדרות הדפדפן שלך. שים לב שחסימת קובצי Cookie מסוימים עלולה להשפיע על תפקוד האתר.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;