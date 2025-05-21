import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-right font-medium text-gray-900 focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0 mr-2" /> : <ChevronDown className="flex-shrink-0 mr-2" />}
      </button>
      
      <div className={`mt-2 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-gray-600 pl-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "איזה סוגי פוליסות ביטוח אפשר לבדוק עם Poly בוט?",
      answer: "Poly בוט עובד עם מגוון רחב של ביטוחי בריאות. בעתיד, אנו מתכננים להוסיף תמיכה גם בביטוחי רכב, דירה, נסיעות וחיים. ואם במקרה הפוליסה שלכם לא מופיעה, תוכלו בקלות להעלות אלינו קישור אליה, והבינה המלאכותית שלנו כבר תנתח אותה."
    },
    {
      question: "איך מתחברים לשירות?",
      answer: "לחצו על התחל עכשיו והתחילו לשוחח עם הבוט. מומלץ לשמור את המספר שלנו כדי שתוכלו לחזור אלינו בקלות בעתיד."
    },
    {
      question: "האם המידע על הביטוח שלי מאובטח?",
      answer: "בהחלט. אנחנו משתמשים בהצפנה מקצה לקצה עבור כל השיחות. המידע שלך מאוחסן באופן מאובטח ולעולם לא משותף עם צדדים שלישיים. אתה יכול למחוק את המידע שלך בכל עת מהגדרות החשבון שלך."
    },
    {
      question: "האם אפשר להשתמש ב-PolicyChat לסיוע בתביעות?",
      answer: "בעוד ש-PolicyChat יכול לעזור לך להבין מה מכוסה בפוליסה שלך ולהדריך אותך בתהליך התביעה, את התביעות עצמן יש להגיש דרך הערוצים הרשמיים של חברת הביטוח שלך."
    },
    {
      question: "עד כמה המידע שמסופק מדויק?",
      answer: "הבינה המלאכותית שלנו מאומנת לחלץ ולפרש פרטי פוליסת ביטוח בדיוק רב. עם זאת, במקרים מורכבים או תרחישים ספציפיים מאוד, אנו ממליצים לאמת את המידע מול חברת הביטוח שלך. כל תשובה כוללת את המספר המדויק של הסעיף והעמוד מהפוליסה שלך לצורך אימות קל."
    },
    {
      question: "האם יש הגבלה על כמות השאלות שאפשר לשאול?",
      answer: "בתוכנית החינמית שלנו, אתה יכול לשאול עד 20 שאלות בחודש. התוכניות המתקדמות שלנו מציעות שאלות בלתי מוגבלות ותמיכה במספר פוליסות. בדוק את דף התמחור שלנו לפרטים נוספים."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">שאלות נפוצות</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            לא בטוחים איך זה עובד? ריכזנו כאן למטה תשובות לשאלות ששואלים אותנו הכי הרבה
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;