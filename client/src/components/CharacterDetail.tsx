// components/CharacterDetail.tsx
import { ArrowLeft } from 'lucide-react';
import { Character } from './CharacterCard';

interface CharacterDetailProps {
  character: Character;
  onBack: () => void;
  onShowStory?: () => void;
}

export const CharacterDetail: React.FC<CharacterDetailProps> = ({ 
  character, 
  onBack,
  onShowStory
}) => {
  const isMusaIbnNusair = character.name === 'موسى بن نصير';
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 font-arabic">
      <button
        onClick={onBack}
        className="mb-4 text-[#2c1810] hover:text-[#c4a484] transition-colors"
      >
        <ArrowLeft className="inline-block ml-2" />
        العودة
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={character.image}
          alt={character.name}
          className="w-full md:w-1/3 h-auto rounded-xl object-cover"
        />
        <div className="flex-1 space-y-2 text-right">
          <h2 className="text-3xl font-bold text-[#2c1810]">{character.name}</h2>
          
          {isMusaIbnNusair && (
            <>
              <p><strong>الاسم الكامل:</strong> موسى بن نصير اللخمي</p>
              <p><strong>الميلاد:</strong> 640م</p>
              <p><strong>الوفاة:</strong> 716م</p>
              <p><strong>المواطنة:</strong> الدولة الأموية</p>
            </>
          )}
          
          <p><strong>الدور:</strong> {character.role}</p>
          <p><strong>الفترة:</strong> {character.period}</p>
          {character.date && <p><strong>التاريخ:</strong> {character.date}</p>}
          <p className="pt-4">{character.description}</p>

          {isMusaIbnNusair && onShowStory && (
            <button
              onClick={onShowStory}
              className="mt-4 text-white bg-[#2c1810] hover:bg-[#3d2419] transition-colors py-2 px-4 rounded font-arabic"
            >
              تريد معرفة المزيد؟
            </button>
          )}
        </div>
      </div>
    </div>
  );
};