const FooterSection: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#ddc1a7]/60 bg-[#fffcf0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-10 lg:px-20 py-6 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-[#5b4f47]/80">
        <div className="text-right">
          <p className="font-semibold text-[#5b4f47] mb-1">דקלה מדואלה - קליניקת טיפולי פנים בנס ציונה</p>
          <p className="text-[11px] sm:text-xs">
            טיפולי פנים מעמיקים, עדינים ומדויקים – עם ליווי אישי, אהבה לעור והרבה שקט לנפש.
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 text-[11px] sm:text-xs">
          <a href="tel:0503080018" className="hover:text-[#695125] transition-colors">
            טלפון: 050-3080018
          </a>
          <a
            href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0"
            className="hover:text-[#695125] transition-colors"
          >
            וואטסאפ לתיאום תור
          </a>
          <p className="mt-1">© {year} כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
