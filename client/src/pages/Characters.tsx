// components/Characters.tsx
import React, { useState } from 'react';
import { charactersByPeriod, getCharacterStory } from '../data/CharacterData';
import { CharacterCard, Character } from '../components/CharacterCard';
import { CharacterDetail } from '../components/CharacterDetail';
import { CharacterStory } from '../components/CharacterStory';

export function Characters() {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(null);
  const [showStory, setShowStory] = useState(false);
  const periods = Object.keys(charactersByPeriod);

  const handleCharacterSelect = (id: number) => {
    setSelectedCharacterId(id);
  };

  const handleBack = () => {
    if (showStory) {
      setShowStory(false);
    } else {
      setSelectedCharacterId(null);
    }
  };

  const findSelectedCharacter = (): Character | null => {
    if (!selectedCharacterId) return null;
    
    for (const period in charactersByPeriod) {
      const character = charactersByPeriod[period].find(char => char.id === selectedCharacterId);
      if (character) return character;
    }
    
    return null;
  };

  const selectedCharacter = findSelectedCharacter();
  const characterStory = selectedCharacter ? getCharacterStory(selectedCharacter.id) : null;

  return (
    <div className="min-h-screen bg-[#f8f4e8] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
          شخصيات الفتح الأندلسي
        </h1>

        {/* Content based on state */}
        {showStory && selectedCharacter && characterStory ? (
          <CharacterStory 
            name={selectedCharacter.name} 
            story={characterStory} 
            onBack={handleBack} 
          />
        ) : selectedCharacter ? (
          <CharacterDetail 
            character={selectedCharacter} 
            onBack={handleBack}
            onShowStory={characterStory ? () => setShowStory(true) : undefined}
          />
        ) : (
          <>
            {/* Period Selection */}
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

            {/* Character Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(selectedPeriod ? charactersByPeriod[selectedPeriod] : []).map((character) => (
                <CharacterCard 
                  key={character.id} 
                  character={character} 
                  onSelect={handleCharacterSelect} 
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}