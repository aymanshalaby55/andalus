// components/CharacterStory.tsx
import { ArrowLeft } from 'lucide-react';

interface CharacterStoryProps {
  name: string;
  story: string;
  onBack: () => void;
}

export const CharacterStory: React.FC<CharacterStoryProps> = ({ name, story, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 font-arabic text-right">
      <button
        onClick={onBack}
        className="mb-4 text-[#2c1810] hover:text-[#c4a484] transition-colors"
      >
        <ArrowLeft className="inline-block ml-2" />
        العودة
      </button>
      <h2 className="text-3xl font-bold text-[#2c1810] mb-4">قصة {name}</h2>
      <p className="leading-loose whitespace-pre-line">
        {story}
      </p>
    </div>
  );
};