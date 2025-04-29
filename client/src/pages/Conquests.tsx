import React, { useState } from 'react';
import { Flag } from 'lucide-react';

export function Conquests() {
  const [showDetails, setShowDetails] = useState(false);
  const [showStory, setShowStory] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleStory = () => {
    setShowStory(!showStory);
  };

  const closeStory = () => {
    setShowStory(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f4e8] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
          الفتوحات الإسلامية في الأندلس
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* معركة الفتح الإسلامي للأندلس */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">الفتوحات الإسلامية في الأندلس (92-114 هـ / 711-732م)</h3>
            <p className="text-gray-600 font-arabic">
              فتح الأندلس على يد طارق بن زياد، حيث قاد الجيش الإسلامي في معركة فاصلة ضد الجيش القوطي.
            </p>
            <button
              onClick={toggleDetails}
              className="text-[#003366] font-bold hover:text-[#ff6600] mt-4"
            >
              التفاصيل
            </button>
            {/* عرض تفاصيل المعركة */}
            {showDetails && (
              <div className="mt-4 p-6 bg-[#f8f4e8] rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/%D8%AE%D8%B1%D9%8A%D8%B7%D8%A9_%D8%A7%D9%84%D9%81%D8%AA%D8%AD_%D8%A7%D9%84%D8%A3%D9%85%D9%88%D9%8A_%D9%84%D9%84%D8%A3%D9%86%D8%AF%D9%84%D8%B3.jpg/500px-%D8%AE%D8%B1%D9%8A%D8%B7%D8%A9_%D8%A7%D9%84%D9%81%D8%AA%D8%AD_%D8%A7%D9%84%D8%A3%D9%85%D9%88%D9%8A_%D9%84%D9%84%D8%A3%D9%86%D8%AF%D9%84%D8%B3.jpg" alt="خريطة الفتح" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <div className="text-center font-arabic text-lg space-y-2">
                    <p><strong>التاريخ:</strong> 92 هـ / 711م - 114 هـ / 732م</p>
                    <p><strong>الموقع:</strong> الأندلس، شبه الجزيرة الأيبيرية</p>
                    <p><strong>النتيجة:</strong> انتصار المسلمين</p>
                    <p><strong>المتحاربون:</strong> جيش المسلمين بقيادة طارق بن زياد ضد جيش القوطي بقيادة لذريق</p>
                    <p><strong>القادة:</strong> طارق بن زياد، موسى بن نصير، عبد الرحمن الغافقي، لذريق</p>
                  </div>
                  <button
                    onClick={toggleStory}
                    className="mt-4 px-6 py-2 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#ff6600]"
                  >
                    هل تريد معرفة المزيد؟
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* معركة 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">عهد الولاه</h3>
            <p className="text-gray-600 font-arabic">امتد عهد الولاة في الأندلس لحوالي 46 عامًا، وكان مرحلة انتقالية شهدت الفتوحات والتوسع، لكنها عانت من صراعات قبلية واضطرابات داخلية أثرت على استقرار الحكم.</p>
            <a href="battle_galicia.html" className="text-[#003366] font-bold hover:text-[#ff6600]">تفاصيل المعركة</a>
          </div>

          {/* معركة 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">عصر الخلافة الأموية</h3>
            <p className="text-gray-600 font-arabic">بعد سقوط الدولة الأموية في المشرق عام 132 هـ / 750 م على يد العباسيين، فرَّ الأمير الأموي عبد الرحمن الداخل إلى الأندلس.</p>
            <a href="battle_toledo.html" className="text-[#003366] font-bold hover:text-[#ff6600]">تفاصيل المعركة</a>
          </div>

          {/* معركة 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">عصر الخلافة العامرية</h3>
            <p className="text-gray-600 font-arabic">بعد وفاة الخليفة الحكم المستنصر بالله، تولى ابنه هشام المؤيد بالله الخلافة، واستغل محمد بن أبي عامر هذا الوضع ليعزز سلطته.</p>
            <a href="battle_zahra.html" className="text-[#003366] font-bold hover:text-[#ff6600]">تفاصيل المعركة</a>
          </div>

          {/* معركة 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">عصر ملوك الطوائف</h3>
            <p className="text-gray-600 font-arabic">بدأ عصر ملوك الطوائف عام 422 هـ / 1031 م بعد سقوط الخلافة الأموية في الأندلس، حيث تفككت الدولة إلى عدة إمارات صغيرة.</p>
            <a href="battle_saqut.html" className="text-[#003366] font-bold hover:text-[#ff6600]">تفاصيل المعركة</a>
          </div>

          {/* معركة 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">عصر المرابطين</h3>
            <p className="text-gray-600 font-arabic">شهدت دولة المرابطين نشأتها في الصحراء الكبرى ثم توسعت لتشمل المغرب والأندلس، حيث أسسوا إمبراطورية قوية.</p>
            <a href="batel4.html" className="text-[#003366] font-bold hover:text-[#ff6600]">تفاصيل المعركة</a>
          </div>

          {/* معركة 7 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">عصر الموحدين</h3>
            <p className="text-gray-600 font-arabic">تميزت دولة الموحدين بفتوحاتها الواسعة حيث بدأ عبد المؤمن بن علي بتوحيد المغرب تحت راية الموحدين بعد انتصاره على المرابطين.</p>
            <a href="batel5.html" className="text-[#003366] font-bold hover:text-[#ff6600]">تفاصيل المعركة</a>
          </div>

          {/* معركة 8 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">سقوط غرناطة</h3>
            <p className="text-gray-600 font-arabic">مع ازدياد قوة بني مرين، بدأوا في التوسع التدريجي حتى سيطروا على مكناسة عام 643 هـ، ثم تمكنوا من فتح فاس عام 648 هـ.</p>
            <a href="batel6.html" className="text-[#003366] font-bold hover:text-[#ff6600]">تفاصيل المعركة</a>
          </div>

        </div>
      </div>

      {/* كارد القصة */}
      {showStory && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={closeStory}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center font-arabic">قصة الفتح الإسلامي للأندلس</h3>
            <p className="text-gray-600 font-arabic leading-relaxed">
              الفتوحات الإسلامية في الأندلس (92-114 هـ / 711-732م) تمثل الفتح الإسلامي للأندلس واحدة من أعظم الفتوحات في التاريخ الإسلامي، حيث امتد النفوذ الإسلامي في شبه الجزيرة الأيبيرية ووصل إلى جنوب فرنسا. بدأ الفتح بقيادة طارق بن زياد عام 92هـ / 711م واستمر حتى 114هـ / 732م.
              <br /><br />
              انطلاق الفتح الإسلامي للأندلس (92هـ / 711م)، حيث أرسل والي إفريقية موسى بن نصير القائد طارق بن زياد على رأس جيش قوامه 12 ألف مقاتل، معظمهم من البربر، لعبور المضيق نحو الأندلس، ونزل الجيش في منطقة جبل طارق، واستعد لمواجهة قوات القوط بقيادة لذريق. والتقى الجيش الإسلامي بقيادة طارق بن زياد بجيش القوطي بقيادة الملك لذريق بالقرب من نهر لكة، واستمرت المعركة ثمانية أيام، وانتهت بانتصار المسلمين ومقتل لذريق، مما مهد الطريق للسيطرة على الأندلس.
              <br /><br />
              بعد انتصار وادي لكة، واصل المسلمون التقدم بسرعة، ففتحوا مدنًا رئيسية مثل إشبيلية، وقرطبة، وغرناطة، وماردة، ومالقة، ودخلوا طليطلة، والعاصمة القوطية دون مقاومة تُذكر بعد فرار حكامها. واستمر الزحف نحو الشمال، حيث تم فتح سرقسطة ومدن أخرى. بعد ذلك، قرر موسى بن نصير العبور بنفسه إلى الأندلس، ومعه 18 ألف مقاتل، حيث فتح العديد من المدن مثل إشبيلية وقرمونة وماردة.
              <br /><br />
              بعد وصول المسلمين إلى البرتغال، استمروا في التوسع، لكن بعض المناطق الجبلية مثل صخرة بلاي (أستورياس) ظلت خارج السيطرة الإسلامية. تم استدعاء موسى بن نصير وطارق بن زياد إلى دمشق، مما أوقف الفتوحات بشكل كامل.
              <br /><br />
              توسع المسلمون نحو جنوب فرنسا، حيث فتحوا منطقة سبتمانيا ومدينة ناربون، بينما قاد السمح بن مالك حملة لفتح مدينة تولوز، ولكنه قُتل أثناء المعركة، مما أدى لتراجع المسلمين مؤقتًا. وفيما بعد، تولى عبد الرحمن الغافقي ولاية الأندلس وأعاد تنظيم الجيش، وقاد حملة عسكرية كبرى نحو فرنسا وفتح العديد من المدن.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
