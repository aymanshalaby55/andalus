import React, { useEffect } from 'react';
import { Map } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { useLoading } from '../Context/LoadingContext';

// حل مشكلة الأيقونات
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export function BattleMap() {
  const { stopLoading } = useLoading();

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    const map = L.map(mapContainer, {
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile
    }).setView([37.3886, -5.9823], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markers = [
      {
        coords: [37.3886, -5.9823],
        content: "<b>قرطبة</b><br>عاصمة الخلافة الأموية في الأندلس"
      },
      {
        coords: [38.0437, -0.4732],
        content: "<b>طليطلة</b><br>معركة وادي لكة 712م"
      },
      {
        coords: [37.6104, -0.2384],
        content: "<b>غرناطة</b><br>آخر معاقل المسلمين 1492م"
      }
    ];

    markers.forEach(({ coords, content }) => {
      L.marker(coords as L.LatLngExpression)
        .addTo(map)
        .bindPopup(content)
        .openPopup();
    });

    stopLoading();

    return () => {
      map.remove();
    };
  }, [stopLoading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#f8f4e8] pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
          خريطة المعارك التاريخية
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          <div className="flex items-center justify-center mb-4">
            <Map className="h-12 w-12 text-[#2c1810] animate-pulse" />
          </div>
          
          <div 
            id="map"
            className="h-[600px] w-full rounded-lg border-2 border-[#2c1810] z-10"
          />
        </div>
      </div>
    </motion.div>
  );
}