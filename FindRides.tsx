import React, { useState } from 'react';
import RideCard from '../components/RideCard';
import PriceComparisonCard from '../components/PriceComparisonCard';
import { MapPin, Calendar, Search } from 'lucide-react';

export default function FindRides() {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: ''
  });

  const mockRides = [
    {
      driver: {
        name: 'Rahul Kumar',
        rating: 4.8,
        image: 'https://i.pravatar.cc/150?img=1'
      },
      ride: {
        from: 'Mumbai',
        to: 'Pune',
        date: '2024-03-15',
        time: '10:00 AM',
        price: 800,
        seatsAvailable: 3
      }
    },
    // Add more mock rides as needed
  ];

  const priceOptions = [
    { mode: 'car', price: 800, duration: '3 hours', available: true },
    { mode: 'bus', price: 400, duration: '4 hours', available: true },
    { mode: 'bike', price: 300, duration: '3.5 hours', available: true }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">Find a Ride</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="From"
                className="w-full pl-10 p-2 border rounded-lg"
                value={searchParams.from}
                onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="To"
                className="w-full pl-10 p-2 border rounded-lg"
                value={searchParams.to}
                onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 p-2 border rounded-lg"
                value={searchParams.date}
                onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
              />
            </div>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center">
            <Search className="mr-2" />
            Search Rides
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {mockRides.map((ride, index) => (
              <RideCard
                key={index}
                {...ride}
                onBook={() => console.log('Booking ride:', ride)}
              />
            ))}
          </div>
          <div>
            <PriceComparisonCard
              options={priceOptions}
              onSelect={(mode) => console.log('Selected mode:', mode)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}