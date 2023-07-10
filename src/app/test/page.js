import React from 'react';

const MarketingPage = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-6">
            <div className="text-xl font-bold text-gray-800">Your Agency</div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Portfolio</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Welcome to Your Agency</h1>
          <p className="text-gray-600 mb-12">We provide innovative marketing solutions tailored to your business needs.</p>
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">Get Started</a>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Marketing</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque tellus ut quam eleifend aliquet.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Web Design</h3>
              <p className="text-gray-600">Suspendisse vitae justo sit amet leo dapibus lobortis. Nunc blandit diam non urna posuere lobortis.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">SEO Optimization</h3>
              <p className="text-gray-600">Fusce ut purus in ex vulputate semper. Sed et ultrices augue, et eleifend nulla.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-white">© 2023 Your Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MarketingPage;
