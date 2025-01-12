import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';

interface RideCardProps {
  driver: {
    name: string;
    rating: number;
    image: string;
  };
  ride: {
    from: string;
    to: string;
    date: string;
    time: string;
    price: number;
    seatsAvailable: number;
  };
  onBook: () => void;
}

export default function RideCard({ driver, ride, onBook }: RideCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={driver.image} 
          alt={driver.name} 
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{driver.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1">{driver.rating}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          <p>{ride.from}</p>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          <p>{ride.to}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-500" />
          <p>{ride.date} at {ride.time}</p>
        </div>
        <div className="flex items-center space-x-2">
          <User className="w-5 h-5 text-gray-500" />
          <p>{ride.seatsAvailable} seats available</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">₹{ride.price}</p>
        <button 
          onClick={onBook}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}