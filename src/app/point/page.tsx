"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface Point {
  index: number;
  status: number;
}

const Points = () => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    fetchPoints();
  }, []);

  const fetchPoints = async () => {
    const { data, error } = await supabase
      .from('points')
      .select('*')
      .order('index', { ascending: true });

    if (error) {
      console.error('Error fetching points:', error);
    } else {
      setPoints(data || []);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className={`w-20 h-20 border rounded-lg flex items-center justify-center ${
            points.find((point) => point.index === index + 1 && point.status === 1)
              ? 'bg-green-500'
              : 'bg-gray-200'
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Points;
