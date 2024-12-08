import React from "react";

export default function ProductPage() {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-4">
            <i className="fas fa-couch text-2xl text-teal-500"></i>
            <span className="text-2xl font-bold">Comforty</span>
          </div>
          <ul className="flex space-x-6">
            <li className="text-gray-700">Home</li>
            <li className="text-gray-700">Shop</li>
            <li className="text-gray-700">Product</li>
            <li className="text-gray-700">Pages</li>
            <li className="text-gray-700">About</li>
          </ul>
          <div className="flex items-center space-x-4">
            <i className="fas fa-shopping-cart text-2xl text-teal-500"></i>
            <span>Contact: (800) 555-0111</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="relative">
                <img
                  src={`https://placehold.co/300x300?text=Product+Image+${index + 1}`}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {index % 3 === 0 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
                {index % 3 === 1 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Sales
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-lg font-medium">Library Stool Chair</h2>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold">$20</span>
                {index % 3 === 1 && (
                  <span className="text-gray-500 line-through">$30</span>
                )}
                <button className="bg-teal-500 text-white p-2 rounded-full">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Or Subscribe To The Newsletter</h2>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Email Address..."
              className="p-2 border-b-2 border-gray-400 focus:outline-none focus:border-teal-500"
            />
            <button className="ml-4 bg-teal-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="flex justify-center space-x-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <img
                key={index}
                src={`https://placehold.co/100x100?text=Product+Image+${index + 1}`}
                alt={`Product Image ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
