import React from 'react';
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

export default function Community() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Community Discussion</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          New Discussion
        </button>
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      Help with Calculus Problem {i}
                    </h2>
                    <p className="text-sm text-gray-500">Posted by User {i} • 2h ago</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Mathematics
                  </span>
                </div>
                <p className="mt-2 text-gray-600">
                  I'm having trouble understanding the concept of limits. Can someone explain how to
                  solve this problem?
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                    <ThumbsUp className="h-4 w-4" />
                    <span>24</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                    <MessageSquare className="h-4 w-4" />
                    <span>12 replies</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}