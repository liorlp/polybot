import React from 'react';
import { FileText, MessageCircle, Clock, LockKeyhole, Upload, Clock4 } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Upload className="text-blue-700" />,
      title: "תומכים בכל הפוליסות",
      description: "לא משנה לאיזה ביטוח קבוצתי אתה שייך אנחנו מכירים את כל הפוליסות השונות"
    },
    {
      icon: <MessageCircle className="text-blue-700" />,
      title: "צ'אט בכל זמן",
      description: "שאל שאלות על הכיסוי שלך דרך וואטסאפ בכל פעם שעולה לך שאלה."
    },
    {
      icon: <Clock className="text-blue-700" />,
      title: "חיסכון בזמן",
      description: "קבל תשובות מיידיות בלי לקרוא עשרות עמודים של מסמכי פוליסה."
    },
    {
      icon: <FileText className="text-blue-700" />,
      title: "ריבוי פוליסות",
      description: "נהל את כל פוליסות הביטוח שלך במקום אחד—בריאות, רכב, דירה, נסיעות ועוד."
    },
    {
      icon: <LockKeyhole className="text-blue-700" />,
      title: "מאובטח ופרטי",
      description: "מסמכי הפוליסה והשיחות שלך מוצפנים ולעולם לא משותפים עם צד שלישי."
    },
    {
      icon: <Clock4 className="text-blue-700" />,
      title: "זמינות 24/7",
      description: "קבל תשובות על הכיסוי שלך בכל שעה, גם מחוץ לשעות העבודה."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">הכיסוי שלך, בשפה שלך</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            בנינו את השירות שלנו כדי להפוך את הבנת כיסוי הביטוח שלך לקלה כמו שליחת הודעה לחבר.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;