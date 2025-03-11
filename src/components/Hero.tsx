import React from 'react';
import { Scroll, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 calligraphy-overlay" />
      <div className="absolute inset-0 islamic-pattern" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Arabic Calligraphy */}
          <div className="mb-8">
            <h2 className="font-arabic text-4xl text-emerald-600 mb-2">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Learn the Qur'an with
            <span className="block text-emerald-600 mt-2">Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join our comprehensive Qur'anic education programs led by qualified teachers,
            offering flexible schedules and personalized attention.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-emerald-700">
              <Scroll className="h-6 w-6" />
              <span>Certified Teachers</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-emerald-700">
              <BookOpen className="h-6 w-6" />
              <span>Structured Learning</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-emerald-700">
              <Users className="h-6 w-6" />
              <span>1-on-1 Sessions</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Begin Your Journey
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg hover:bg-emerald-50 transition-all transform hover:scale-105">
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-emerald-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-emerald-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;