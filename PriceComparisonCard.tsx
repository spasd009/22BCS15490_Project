import React from 'react';
import { Car, Bus, Bike } from 'lucide-react';

interface PriceOption {
  mode: 'car' | 'bus' | 'bike';
  price: number;
  duration: string;
  available: boolean;
}

interface PriceComparisonCardProps {
  options: PriceOption[];
  onSelect: (mode: string) => void;
}

export default function PriceComparisonCard({ options, onSelect }: PriceComparisonCardProps) {
  const getIcon = (mode: string) => {
    switch (mode) {
      case 'car': return <Car className="w-6 h-6" />;
      case 'bus': return <Bus className="w-6 h-6" />;
      case 'bike': return <Bike className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Compare Prices</h2>
      <div className="space-y-4">
        {options.map((option) => (
          <div 
            key={option.mode}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              option.available ? 'cursor-pointer hover:bg-gray-50' : 'opacity-50'
            }`}
            onClick={() => option.available && onSelect(option.mode)}
          >
            <div className="flex items-center space-x-4">
              {getIcon(option.mode)}
              <div>
                <p className="font-semibold capitalize">{option.mode}</p>
                <p className="text-sm text-gray-500">{option.duration}</p>
              </div>
            </div>
            <p className="font-semibold">₹{option.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}