import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">מדיניות פרטיות</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. איסוף מידע</h2>
              <p>אנו אוספים מידע שאתה מספק לנו באופן ישיר כאשר אתה:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>יוצר חשבון</li>
                <li>מעלה מסמכי פוליסת ביטוח</li>
                <li>משתמש בשירות הצ'אט שלנו</li>
                <li>פונה לתמיכת לקוחות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. שימוש במידע</h2>
              <p>אנו משתמשים במידע שנאסף כדי:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>לספק את השירותים שלנו</li>
                <li>לשפר את הדיוק של מערכת הבינה המלאכותית שלנו</li>
                <li>לשלוח לך עדכונים חשובים לגבי השירות</li>
                <li>לספק תמיכת לקוחות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. אבטחת מידע</h2>
              <p>אנו נוקטים באמצעי אבטחה מתקדמים כדי להגן על המידע שלך, כולל:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>הצפנת נתונים מקצה לקצה</li>
                <li>אחסון מאובטח בשרתים מוגנים</li>
                <li>גישה מוגבלת לצוות מורשה בלבד</li>
                <li>ניטור אבטחה רציף</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. שיתוף מידע</h2>
              <p>איננו משתפים את המידע האישי שלך עם צדדים שלישיים, למעט:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>כאשר נדרש על פי חוק</li>
                <li>עם ספקי שירות מורשים הפועלים בשמנו</li>
                <li>במקרה של מיזוג או רכישה של החברה</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. זכויותיך</h2>
              <p>יש לך זכות:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>לגשת למידע שלך</li>
                <li>לתקן מידע לא מדויק</li>
                <li>למחוק את המידע שלך</li>
                <li>להתנגד לעיבוד המידע שלך</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;