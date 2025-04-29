// components/CharacterCard.tsx
import { ArrowLeft } from 'lucide-react';

export interface Character {
  id: number;
  name: string;
  role: string;
  period: string;
  description: string;
  image: string;
  date?: string;
}

interface CharacterCardProps {
  character: Character;
  onSelect: (id: number) => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 font-arabic">{character.name}</h3>
        <p className="text-[#c4a484] mb-2 font-arabic">{character.role}</p>
        {character.date && (
          <p className="text-gray-500 text-sm mb-2 font-arabic">{character.date}</p>
        )}
        <p className="text-gray-600 mb-4 text-sm font-arabic">{character.description}</p>
        <button
          onClick={() => onSelect(character.id)}
          className="flex items-center justify-center w-full bg-[#2c1810] text-white py-2 px-4 rounded hover:bg-[#3d2419] transition-colors font-arabic"
        >
          <span>اقرأ المزيد</span>
          <ArrowLeft className="mr-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}