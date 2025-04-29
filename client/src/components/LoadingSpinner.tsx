// components/LoadingSpinner.tsx
import { RotateCw } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-[#f8f4e8] bg-opacity-90 z-50 flex items-center justify-center">
      <div className="animate-spin text-[#2c1810]">
        <RotateCw size={48} />
      </div>
    </div>
  );
}