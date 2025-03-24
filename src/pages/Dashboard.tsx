import React from 'react';
import { Book, Brain, Trophy, Users } from 'lucide-react';

const stats = [
  { name: 'Tests Created', value: '12', icon: Book },
  { name: 'Tests Taken', value: '48', icon: Brain },
  { name: 'Average Score', value: '85%', icon: Trophy },
  { name: 'Active Students', value: '156', icon: Users },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Teacher!</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Create New Test
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
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
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Tests</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium text-gray-900">Mathematics Test {i}</p>
                  <p className="text-sm text-gray-500">Created 2 days ago</p>
                </div>
                <span className="text-sm text-gray-600">32 submissions</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Student Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                  <div>
                    <p className="font-medium text-gray-900">Student {i}</p>
                    <p className="text-sm text-gray-500">Completed Physics Test</p>
                  </div>
                </div>
                <span className="text-sm text-gray-600">1h ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}