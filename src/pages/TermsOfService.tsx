import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">תנאי שימוש</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. קבלת התנאים</h2>
              <p>
                על ידי גישה או שימוש בשירותי PolicyChat, אתה מסכים לתנאי השימוש הללו. אם אינך מסכים לתנאים אלה, אנא אל תשתמש בשירות.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. תיאור השירות</h2>
              <p>
                PolicyChat מספק שירות ניתוח פוליסות ביטוח באמצעות בינה מלאכותית. השירות מיועד לספק מידע כללי ואינו מהווה ייעוץ משפטי או ביטוחי.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. חשבונות משתמשים</h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>עליך להיות בן 18 לפחות כדי להשתמש בשירות</li>
                <li>אתה אחראי לשמירה על סודיות פרטי החשבון שלך</li>
                <li>אתה מסכים לספק מידע מדויק ומעודכן</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. הגבלת אחריות</h2>
              <p>
                השירות מסופק "כמות שהוא" ו"כפי זמינותו". איננו מתחייבים לדיוק מוחלט של המידע המסופק. תמיד יש לאמת מידע קריטי מול מסמכי הפוליסה המקוריים או חברת הביטוח שלך.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. שינויים בשירות</h2>
              <p>
                אנו שומרים לעצמנו את הזכות לשנות או להפסיק את השירות בכל עת, עם או בלי הודעה מוקדמת.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;