import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { battlesByPeriod } from '../data/battles';
import { motion } from 'framer-motion';
import { useLoading } from '../Context/LoadingContext';

export function Battles() {
  const { stopLoading } = useLoading();
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedBattle, setSelectedBattle] = useState<any>(null);
  const [showStory, setShowStory] = useState(false);
  const periods = Object.keys(battlesByPeriod);

  useEffect(() => {
    stopLoading();
  }, []);

  const handleBack = () => {
    if (showStory) {
      setShowStory(false);
    } else {
      setSelectedBattle(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="min-h-screen bg-[#f8f4e8] pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
            معارك الأندلس
          </h1>

          {/* Period Selection */}
          {!selectedBattle && (
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-6 py-2 rounded-full font-arabic transition-colors ${
                    selectedPeriod === period
                      ? 'bg-[#2c1810] text-white'
                      : 'bg-white text-[#2c1810] hover:bg-[#c4a484] hover:text-white'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}

          {/* Detailed Battle View */}
          {selectedBattle ? (
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 font-arabic">
              <button
                onClick={handleBack}
                className="mb-4 text-[#2c1810] hover:text-[#c4a484] transition-colors"
              >
                <ArrowLeft className="inline-block ml-2" />
                العودة
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={selectedBattle.image}
                  alt={selectedBattle.name}
                  className="w-full md:w-1/3 h-auto rounded-xl object-cover"
                />
                <div className="flex-1 space-y-2 text-right">
                  <h2 className="text-3xl font-bold text-[#2c1810]">{selectedBattle.name}</h2>
                  {selectedBattle.date && <p><strong>التاريخ:</strong> {selectedBattle.date}</p>}
                  {selectedBattle.location && <p><strong>الموقع:</strong> {selectedBattle.location}</p>}
                  {selectedBattle.result && <p><strong>النتيجة:</strong> {selectedBattle.result}</p>}
                  {selectedBattle.combatants && <p><strong>المتحاربون:</strong> {selectedBattle.combatants}</p>}
                  {selectedBattle.strength && <p><strong>القوات:</strong> {selectedBattle.strength}</p>}
                  {selectedBattle.casualties && <p><strong>الخسائر:</strong> {selectedBattle.casualties}</p>}
                  
                  <p className="pt-4">{selectedBattle.description}</p>

                  <button
                    onClick={() => setShowStory(true)}
                    className="mt-4 text-white bg-[#2c1810] hover:bg-[#3d2419] transition-colors py-2 px-4 rounded font-arabic"
                  >
                    قراءة القصة الكاملة
                  </button>
                </div>
              </div>

              {/* Story Section */}
              {showStory && (
                <div className="mt-8 bg-[#f8f4e8] p-6 rounded-lg">
                  <button
                    onClick={() => setShowStory(false)}
                    className="mb-4 text-[#2c1810] hover:text-[#c4a484] transition-colors"
                  >
                    <ArrowLeft className="inline-block ml-2" />
                    إغلاق القصة
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-[#2c1810]">الفتوحات الإسلامية في الاندلس (92-114 هـ / 711-732م) يمثل الفتح الإسلامي للأندلس واحدة من أعظم الفتوحات في التاريخ الإسلامي، حيث امتد النفوذ الإسلامي في شبه الجزيرة الأيبيرية ووصل إلى جنوب فرنسا. بدأ الفتح بقيادة طارق بن زياد عام 92هـ / 711م واستمر حتى 114هـ / 732م. انطلاق الفتح الإسلامي للأندلس (92هـ / 711م)، حيث أرسل والي إفريقية موسى بن نصير القائد طارق بن زياد على رأس جيش قوامه 12 ألف مقاتل، معظمهم من البربر، لعبور المضيق نحو الأندلس، ونزل الجيش في منطقة جبل طارق، واستعد لمواجهة قوات القوط بقيادة لذريق. والتقى الجيش الإسلامي بقيادة طارق بن زياد بجيش القوط بقيادة الملك لذريق بالقرب من نهر لكة، واستمرت المعركة ثمانية أيام، وانتهت بانتصار المسلمين ومقتل لذريق، مما مهد الطريق للسيطرة على الأندلس، وبعد انتصار وادي لكة، واصل المسلمون التقدم بسرعة، ففتحوا مدنًا رئيسية مثل إشبيلية، وقرطبة، وغرناطة، وماردة، ومالقة، ودخلوا طليطلة، والعاصمة القوطية دون مقاومة تُذكر بعد فرار حكامها. واستمر الزحف نحو الشمال، حيث تم فتح سرقسطة ومدن أخرى، وبعدما رأى موسى بن نصير تقدم طارق السريع، قرر العبور بنفسه إلى الأندلس، ومعه 18 ألف مقاتل، معظمهم من العرب فتح موسى مدنًا لم تكن مؤمنة تمامًا، مثل إشبيلية وقرمونة وماردة، وواصل تقدمه حتى التقى بطارق بن زياد في طليطلة عام 94هـ / 713م. وأرسل موسى ابنه عبد العزيز بن موسى لفتح غرب الأندلس، فتمت السيطرة على البرتغال، ووصل المسلمون إلى لشبونة وفتحوها، وتوسع الجيش الإسلامي حتى لم يبقَ تحت سيطرة القوط سوى مناطق قليلة في الشمال، مثل صخرة بلاي. وبدأ المسلمون بالتوسع باتجاه شمال الأندلس، لكن بعض المناطق الجبلية مثل صخرة بلاي (أستورياس) ظلت خارج السيطرة الإسلامية، حيث تم استدعاء موسى بن نصير وطارق بن زياد إلى دمشق بأمر من الخليفة الوليد بن عبد الملك، مما أوقف استكمال الفتوحات بشكل كامل. وبدأ المسلمون بالتوسع نحو جنوب فرنسا بقيادة السمح بن مالك الخولاني، ففتحوا منطقة سبتمانيا وجعلوا مدينة ناربون قاعدة عسكرية لهم، حيث قاد السمح بن مالك حملة لفتح مدينة تولوز، لكنه قُتل أثناء المعركة، مما تسبب في تراجع المسلمين مؤقتًا. وتولى عبد الرحمن الغافقي ولاية الأندلس وأعاد تنظيم الجيش، وقاد حملة عسكرية كبرى نحو فرنسا، ففتح عدة مدن مثل أرل، بوردو، طلوشة، وتور، وتقدم نحو مدينة بواتييه، مما أدى إلى مواجهة مع جيش الفرنجة. وشكّل فتح الأندلس واحدًا من أعظم الإنجازات العسكرية الإسلامية، حيث نجح المسلمون في السيطرة على جزء كبير من أوروبا الغربية. ورغم توقف التوسع بعد بلاط الشهداء، استمرت الأندلس كقاعدة إسلامية مزدهرة لعدة قرون، وأصبحت مركزًا للحضارة الإسلامية والعلمية في العصور الوسطى.</h3>
                  <p className="leading-loose whitespace-pre-line">
                    {selectedBattle.fullStory}
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Battle Cards Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(selectedPeriod ? battlesByPeriod[selectedPeriod] : []).map((battle) => (
                <div key={battle.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={battle.image}
                    alt={battle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1 font-arabic">{battle.name}</h3>
                    {battle.date && (
                      <p className="text-[#c4a484] mb-2 font-arabic">{battle.date}</p>
                    )}
                    <p className="text-gray-600 mb-4 text-sm font-arabic">{battle.description}</p>
                    <button
                      onClick={() => setSelectedBattle(battle)}
                      className="flex items-center justify-center w-full bg-[#2c1810] text-white py-2 px-4 rounded hover:bg-[#3d2419] transition-colors font-arabic"
                    >
                      <span>معرفة التفاصيل</span>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}