import React from 'react';
import { Droplets, ArrowRight, Shield, Zap, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Droplets size={64} className="text-gray-300 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            GOO
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            The mysterious force reshaping digital value
          </p>
          <button className="bg-gray-100 text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300 flex items-center mx-auto">
            Enter the Void
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-6 text-gray-400" />
            <h3 className="text-xl font-semibold mb-4">Cryptographic Security</h3>
            <p className="text-gray-500">Protected by advanced quantum-resistant algorithms</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 text-gray-400" />
            <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
            <p className="text-gray-500">Near-instant transactions across the network</p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 mx-auto mb-6 text-gray-400" />
            <h3 className="text-xl font-semibold mb-4">Decentralized</h3>
            <p className="text-gray-500">True peer-to-peer digital currency</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Goo Protocol. Enter the void.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;