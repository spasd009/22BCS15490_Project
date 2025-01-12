import React, { useState } from 'react';
import { Map } from '../components/Map';
import { Car, Calendar, Clock, Indian, Users } from 'lucide-react';

interface RideDetails {
  from: string;
  to: string;
  date: string;
  time: string;
  price: string;
  seats: string;
  carModel: string;
}

export default function PublishRide() {
  const [rideDetails, setRideDetails] = useState<RideDetails>({
    from: '',
    to: '',
    date: '',
    time: '',
    price: '',
    seats: '',
    carModel: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Publishing ride:', rideDetails);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Publish a Ride</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={rideDetails.from}
                  onChange={(e) => setRideDetails({ ...rideDetails, from: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={rideDetails.to}
                  onChange={(e) => setRideDetails({ ...rideDetails, to: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg"
                  value={rideDetails.date}
                  onChange={(e) => setRideDetails({ ...rideDetails, date: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full p-2 border rounded-lg"
                  value={rideDetails.time}
                  onChange={(e) => setRideDetails({ ...rideDetails, time: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price per seat (₹)
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  value={rideDetails.price}
                  onChange={(e) => setRideDetails({ ...rideDetails, price: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Seats
                </label>
                <input
                  type="number"
                  min="1"
                  max="6"
                  className="w-full p-2 border rounded-lg"
                  value={rideDetails.seats}
                  onChange={(e) => setRideDetails({ ...rideDetails, seats: e.target.value })}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Car Model
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={rideDetails.carModel}
                  onChange={(e) => setRideDetails({ ...rideDetails, carModel: e.target.value })}
                  placeholder="e.g., Honda City 2022"
                  required
                />
              </div>
            </div>

            <div className="h-[300px] mb-6">
              <Map 
                driverLocation={{ lat: 19.0760, lng: 72.8777 }}
                showRoute={false}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Publish Ride
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}