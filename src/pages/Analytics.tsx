import React from 'react';
import { BarChart, Users, Clock, Target } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Average Score', value: '78%', icon: Target },
          { name: 'Total Students', value: '245', icon: Users },
          { name: 'Tests Completed', value: '89', icon: BarChart },
          { name: 'Avg. Completion Time', value: '32m', icon: Clock },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <Icon className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance by Subject</h2>
          <div className="space-y-4">
            {['Mathematics', 'Physics', 'Chemistry'].map((subject) => (
              <div key={subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{subject}</span>
                  <span className="text-sm font-medium text-gray-900">85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                  <div>
                    <p className="font-medium text-gray-900">Student {i}</p>
                    <p className="text-sm text-gray-500">Completed Physics Test with 92%</p>
                  </div>
                </div>
                <span className="text-sm text-gray-600">2h ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}