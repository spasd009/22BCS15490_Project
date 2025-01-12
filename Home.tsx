import React from 'react';
import { documentaries, genres } from '../data/mockData';
import DocumentaryCard from '../components/DocumentaryCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-black to-transparent">
        <img
          src={documentaries[0].thumbnailUrl}
          alt="Featured Documentary"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-2xl p-8">
            <h1 className="text-5xl font-bold mb-4">Discover Amazing Documentaries</h1>
            <p className="text-xl mb-6">Explore thought-provoking stories from around the world</p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
              Start Watching
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 cursor-pointer transition-colors"
            >
              <h3 className="font-semibold mb-2">{genre.name}</h3>
              <p className="text-sm text-gray-400">{genre.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Documentaries */}
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documentaries.slice(0, 8).map((documentary) => (
            <DocumentaryCard key={documentary.id} documentary={documentary} />
          ))}
        </div>
      </div>
    </div>
  );
}