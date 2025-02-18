import React from 'react';
import { contentCalendar } from '../../utils/blogOptimization';

interface ContentItem {
  day?: string;
  week?: number;
  topic: string;
  type: string;
  frequency: string;
}

const BlogContentCalendar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">
        Content Calendar
      </h2>

      {/* Weekly Schedule */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-[#00F3FF]">Weekly Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentCalendar.weekly.map((item: ContentItem, index: number) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-[#00F3FF] rounded-lg p-6 hover:border-[#39FF14] transition-all duration-300"
            >
              <div className="text-[#39FF14] font-semibold mb-2">{item.day}</div>
              <h4 className="text-[#00F3FF] font-medium mb-2">{item.topic}</h4>
              <div className="flex justify-between text-sm">
                <span className="text-[#6F00FF]">{item.type}</span>
                <span className="text-[#00F3FF] opacity-75">{item.frequency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Schedule */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-[#00F3FF]">Monthly Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {contentCalendar.monthly.map((item: ContentItem, index: number) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-[#00F3FF] rounded-lg p-6 hover:border-[#39FF14] transition-all duration-300"
            >
              <div className="text-[#39FF14] font-semibold mb-2">Week {item.week}</div>
              <h4 className="text-[#00F3FF] font-medium mb-2">{item.topic}</h4>
              <div className="flex justify-between text-sm">
                <span className="text-[#6F00FF]">{item.type}</span>
                <span className="text-[#00F3FF] opacity-75">{item.frequency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schema markup for content calendar */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Schedule",
          "name": "Blog Content Calendar",
          "description": "Weekly and monthly content schedule for 12Stone Designs blog",
          "eventSchedule": [
            ...contentCalendar.weekly.map(item => ({
              "@type": "Schedule",
              "byDay": item.day,
              "eventFrequency": item.frequency,
              "name": item.topic,
              "eventType": item.type
            })),
            ...contentCalendar.monthly.map(item => ({
              "@type": "Schedule",
              "byMonth": "FREQ=MONTHLY;BYDAY=" + item.week + "WE", // Assuming monthly items are on Wednesdays
              "eventFrequency": item.frequency,
              "name": item.topic,
              "eventType": item.type
            }))
          ]
        })}
      </script>
    </div>
  );
};

export default BlogContentCalendar;
