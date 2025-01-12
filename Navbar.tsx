import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">DocuStream</Link>
        
        <div className="flex items-center space-x-4 flex-1 max-w-xl mx-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search documentaries..."
              className="w-full bg-gray-800 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/genres" className="hover:text-blue-400">Genres</Link>
          <Link to="/watchlist" className="hover:text-blue-400">Watchlist</Link>
          <Link to="/account" className="hover:text-blue-400">Account</Link>
        </div>
      </div>
    </nav>
  );
}