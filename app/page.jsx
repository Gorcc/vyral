import React from 'react';
import { Camera, PlayCircle, Upload } from 'lucide-react';
import { Button, Card } from '@/components/ui/ui-components';
import Link from 'next/link';

const VyralHero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center"
      style={{ 
        backgroundColor: '#2b2b2b',
        color: '#e0e0e0'
      }}
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ 
              color: '#df8148' 
            }}
          >
            Welcome to Vyral
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
            Discover, Create, and Share Your Unique Video Stories
          </p>
          
          <Card 
            className="bg-neutral-800 border-neutral-700 p-8 rounded-xl shadow-2xl max-w-md mx-auto"
          >
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  variant="outline" 
                  className="w-full bg-neutral-700 hover:bg-neutral-600 text-white border-neutral-600"
                >
                  <PlayCircle className="mr-2" /> Watch Videos
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full bg-neutral-700 hover:bg-neutral-600 text-white border-neutral-600"
                >
                  <Upload className="mr-2" /> Upload Content
                </Button>
              </div>
              
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-neutral-800 text-neutral-400">
                    or
                  </span>
                </div>
              </div>
              
              <Button 
                className="w-full"
                style={{
                  backgroundColor: '#df8148',
                  color: 'white',
                }}
              >
                <Camera className="mr-2" /> Log In / Sign Up
              </Button>
            </div>
          </Card>
          
          <div className="mt-12 text-neutral-400">
            <p className="text-sm">
              Explore a world of creative video content. 
              No credit card required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VyralHero;