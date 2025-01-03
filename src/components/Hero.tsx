import React from 'react';
import AnalyticsIllustration from './illustrations/AnalyticsIllustration';
import { Play, ArrowRight, BarChart2, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] relative px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-7xl font-bold text-center gradient-text mb-6">
          Elevate Your Experience
        </h1>
        
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl">
          Unlock the power of data-driven social media analytics
        </p>

        <div className="w-full grid grid-cols-3 gap-8 items-start">
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <BarChart2 className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold">Track Performance</h2>
            </div>
            <p className="text-gray-600 text-base">
              Get real-time insights into your social media performance. Monitor engagement, reach, and growth across all platforms in one unified dashboard.
            </p>
          </div>

          {/* Center Illustration */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[500px] mb-8">
              <AnalyticsIllustration />
            </div>
            
            {/* Buttons moved below illustration */}
            <div className="flex gap-4">
              <button className="bg-green-400 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-500 transition-colors flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-green-400 text-green-400 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-400 hover:text-white transition-colors flex items-center gap-2">
                Watch Demo <Play className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold">Optimize Strategy</h2>
            </div>
            <p className="text-gray-600 text-base">
              Make data-backed decisions to improve your content strategy. Our AI-powered recommendations help you understand what works and why.
            </p>
          </div>
        </div>

        {/* Additional Visual Elements */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="flex items-center gap-4 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
            <Users className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
            <BarChart2 className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-2xl font-bold">85%</div>
              <div className="text-gray-600">Growth Rate</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-gray-600">Analytics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="neon-circle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;