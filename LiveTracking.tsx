import React from 'react';
import { Map } from './Map';

interface Location {
  lat: number;
  lng: number;
}

interface LiveTrackingProps {
  driverLocation: Location;
  destination: Location;
  estimatedArrival: string;
}

export default function LiveTracking({ driverLocation, destination, estimatedArrival }: LiveTrackingProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Live Tracking</h2>
      <div className="h-[400px] mb-4">
        <Map 
          driverLocation={driverLocation}
          destination={destination}
          showRoute={true}
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">Estimated Arrival</p>
          <p className="text-lg font-semibold">{estimatedArrival}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Contact Driver
        </button>
      </div>
    </div>
  );
}