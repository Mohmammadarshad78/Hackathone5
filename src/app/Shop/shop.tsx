import React from "react";
import ReactDOM from "react-dom/client";

export default function Shop() {
    return (<>
            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8 flex flex-col lg:flex-row">
                {/* Product Section */}
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Bag</h2>
                    <div className="space-y-4">
                        {/* Product Item */}
                        <div className="flex items-center space-x-4 border-b pb-4">
                            <img
                                src="https://placehold.co/100x100"
                                alt="Library Stool Chair"
                                className="w-24 h-24 object-cover"
                            />
                            <div className="flex-grow">
                                <h3 className="text-lg font-bold">Library Stool Chair</h3>
                                <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
                                <p className="text-gray-500">Size L</p>
                                <p className="text-gray-500">Quantity 1</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold">MRP: $99</p>
                                <div className="flex space-x-2 mt-2">
                                    <button className="text-gray-500 hover:text-teal-600">
                                        <i className="far fa-heart"></i>
                                    </button>
                                    <button className="text-gray-500 hover:text-teal-600">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
                    <h2 className="text-2xl font-bold mb-4">Summary</h2>
                    <div className="bg-gray-100 p-4 rounded-lg space-y-4">
                        <div className="flex justify-between">
                            <span className="text-gray-700">Subtotal</span>
                            <span className="text-gray-700">$198.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-700">Estimated Delivery & Handling</span>
                            <span className="text-gray-700">Free</span>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span className="text-gray-700">Total</span>
                            <span className="text-gray-700">$198.00</span>
                        </div>
                        <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700">
                            Member Checkout
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

