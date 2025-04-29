import React from 'react';
import { Clock, Users, Swords } from 'lucide-react';
import { Link } from 'react-router-dom';  // استيراد Link

export function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4e8]">
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img
            // src="	https://www.diwanarch.com/wp-content/uploads/2018/07/mosque-poster.jpg?ixlib=rb-1.2.1&auto=format&fit=fill&w=295450&q=900 "
            src="and.jfif"
            alt="عمارة المسجد"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-arabic">
            الفتح الإسلامي للأندلس
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl font-arabic">
            اكتشف القصة المذهلة لازدهار الحضارة الإسلامية في شبه الجزيرة الأيبيرية،
            حيث أنشأت عصراً ذهبياً من المعرفة والفن والتبادل الثقافي استمر لقرون.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/timeline">
              <button className="bg-[#c4a484] text-white px-8 py-3 rounded-lg hover:bg-[#a88a6c] transition-colors font-arabic">
                استكشف الجدول الزمني
              </button>
            </Link>
            <Link to="/characters">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2c1810] transition-colors font-arabic">
                الشخصيات الرئيسية
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-[#f8f4e8] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-[#2c1810] mb-4" />
              <h3 className="text-xl font-bold mb-2 font-arabic">الجدول الزمني التاريخي</h3>
              <p className="text-gray-600 font-arabic">
                تتبع الرحلة الزمنية للفتح الإسلامي من عام 711 ميلادياً
                حتى تأسيس الخلافة الأموية.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-[#2c1810] mb-4" />
              <h3 className="text-xl font-bold mb-2 font-arabic">الشخصيات الرئيسية</h3>
              <p className="text-gray-600 font-arabic">
                تعرف على الشخصيات المؤثرة التي شكلت الفتح
                والحكم اللاحق للأندلس.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Swords className="h-12 w-12 text-[#2c1810] mb-4" />
              <h3 className="text-xl font-bold mb-2 font-arabic">المعارك الحاسمة</h3>
              <p className="text-gray-600 font-arabic">
                استكشف المواجهات العسكرية الرئيسية التي حددت
                مصير شبه الجزيرة الأيبيرية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
