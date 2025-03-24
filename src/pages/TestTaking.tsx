import React from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestTaking() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Mathematics Test</h1>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="h-5 w-5" />
          <span>45:00 remaining</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Question 1 of 10</span>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              What is the derivative of f(x) = x² + 3x + 2?
            </h2>

            <div className="space-y-3">
              {['2x + 3', 'x² + 3', '2x', 'x + 3'].map((option, i) => (
                <label key={i} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="answer"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
          Previous Question
        </button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Next Question
        </button>
      </div>
    </div>
  );
}