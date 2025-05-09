// components/OfficialNewsCard.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type SourceType = 'ministerio' | 'corporación' | 'ente' | 'otro';

interface OfficialNewsCardProps {
  title: string;
  source: string;
  sourceType: SourceType;
  verified?: boolean;
  date: string;
}

type News = {
  title: string;
  date: string;
  image: string;
  description: string;
};

const OfficialNewsCard = ({ news }: { news: News }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{news.title}</h2>
        <p className="text-sm text-gray-500">{news.date}</p>
        <p className="mt-2 text-gray-700">{news.description}</p>
      </div>
    </div>
  );
};

export function OfficialNewsCard({
  title,
  source,
  sourceType,
  verified = false,
  date,
}: OfficialNewsCardProps) {
  const sourceColors: Record<SourceType, string> = {
    ministerio: 'bg-blue-600',
    corporación: 'bg-green-600',
    ente: 'bg-yellow-500 text-black',
    otro: 'bg-gray-500',
  };

  return (
    <Card className="shadow-lg border-2 border-gray-200">
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <span
            className={cn(
              'text-sm font-medium px-2 py-1 rounded-full text-white',
              sourceColors[sourceType]
            )}
          >
            {source}
          </span>
          <div className="flex items-center gap-2">
            {verified && (
              <span title="Fuente verificada" className="text-green-600">
                {/* Icono de verificación SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.648 1.167a1 1 0 0 1 .704 0l6.624 2.397a1 1 0 0 1 .651.937v6.347a9.967 9.967 0 0 1-1.969 5.956l-4.394 5.933a1 1 0 0 1-1.582 0l-4.394-5.933A9.967 9.967 0 0 1 4.373 10.85V4.501a1 1 0 0 1 .651-.937l6.624-2.397ZM16.78 9.03a.75.75 0 0 0-1.06-1.06l-4.72 4.72-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
            <span title="Compartido oficialmente" className="text-blue-600">
              {/* Icono de compartido públicamente SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M17.5 5.75a.75.75 0 0 1 .75-.75h.75a2.25 2.25 0 0 1 2.25 2.25v9.5A2.25 2.25 0 0 1 19 19h-.75a.75.75 0 0 1 0-1.5H19a.75.75 0 0 0 .75-.75V7.25A.75.75 0 0 0 19 6.5h-.75a.75.75 0 0 1-.75-.75Zm-13 0a.75.75 0 0 1 .75.75h.75a.75.75 0 0 1 0 1.5H5a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h.75a.75.75 0 0 1 0 1.5H5a2.25 2.25 0 0 1-2.25-2.25V7.25A2.25 2.25 0 0 1 5 5h.75a.75.75 0 0 1 .75.75Zm3.22 2.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L13.19 12l-2.72-2.72a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </CardContent>
    </Card>
  );
}
