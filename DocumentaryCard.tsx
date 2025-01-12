import React from 'react';
import { Documentary } from '../types';
import { Play, Clock, Star } from 'lucide-react';

interface DocumentaryCardProps {
  documentary: Documentary;
}

export default function DocumentaryCard({ documentary }: DocumentaryCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
      <div className="relative">
        <img 
          src={documentary.thumbnailUrl} 
          alt={documentary.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <button className="bg-blue-500 text-white p-3 rounded-full">
            <Play className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{documentary.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{documentary.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{documentary.duration}m</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            <span>{documentary.rating}</span>
          </div>
          <span>{documentary.releaseYear}</span>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {documentary.genre.map((genre) => (
            <span 
              key={genre} 
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}