import React from 'react';
import { Upload, Bot, MessageCircle, CheckCircle } from 'lucide-react';

const StepCard = ({ 
  number, 
  icon, 
  title, 
  description 
}: { 
  number: number, 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => (
  <div className="relative">
    <div className="flex items-start">
      <div className="ml-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
          {number}
        </div>
        {number < 4 && (
          <div className="absolute right-6 top-12 w-px h-24 bg-blue-200 transform translate-x-1/2 hidden md:block"></div>
        )}
      </div>
      <div>
        <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 max-w-sm">{description}</p>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="text-blue-700" />,
      title: "כתוב לנו איזה פוליסה יש לך",
      description: "לא משנה אם אתה מורה,שוטר או עובד אמדוקס אנחנו נמצא את הפוליסה שלך"
    },
    {
      icon: <Bot className="text-blue-700" />,
      title: "הבינה המלאכותית מנתחת",
      description: "הבינה המלאכותית המתקדמת שלנו קוראת ומבינה את הפוליסה שלך, מחלצת את כל פרטי הכיסוי."
    },
    {
      icon: <MessageCircle className="text-blue-700" />,
      title: "שוחח בוואטסאפ",
      description: "שאל שאלות על הכיסוי שלך בשפה פשוטה דרך וואטסאפ—בדיוק כמו הודעה לחבר."
    },
    {
      icon: <CheckCircle className="text-blue-700" />,
      title: "קבל תשובות ברורות",
      description: "קבל תשובות ברורות עם הפניות למספרי העמודים המדויקים במסמך הפוליסה שלך."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">איך זה עובד</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            תהליך פשוט בן 4 שלבים שהופך את הבנת כיסוי הביטוח שלך לקלה.
          </p>
        </div>
        
        <div className="space-y-12 md:space-y-16 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;