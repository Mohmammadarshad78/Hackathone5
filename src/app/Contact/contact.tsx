import ReactDOM from "react-dom";

export default function Contact(){
    return
            const App = () => {
                return (
                    <div>
                        <header className="bg-gray-900 text-white">
                            <div className="container mx-auto flex justify-between items-center py-2 px-4">
                                <div className="text-sm">
                                    <i className="fas fa-check mr-2"></i> Free Shipping On All Orders Over $50
                                </div>
                                <div className="flex space-x-4 text-sm">
                                    <a href="#" className="hover:underline">Eng</a>
                                    <a href="#" className="hover:underline">Fees</a>
                                    <a href="#" className="hover:underline">Need Help</a>
                                </div>
                            </div>
                        </header>
                        <nav className="bg-gray-50 py-4">
                            <div className="container mx-auto flex justify-between items-center px-4">
                                <div className="flex items-center space-x-4">
                                    <img src="https://placehold.co/40x40" alt="Comforty logo" className="h-10 w-10"/>
                                    <span className="text-2xl font-bold">Comforty</span>
                                </div>
                                <ul className="flex space-x-8">
                                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Shop</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Product</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Pages</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
                                </ul>
                                <div className="flex items-center space-x-4">
                                    <a href="#" className="text-gray-700 hover:text-gray-900">Contact: (808) 555-0111</a>
                                    <a href="#" className="relative">
                                        <i className="fas fa-shopping-cart text-gray-700 hover:text-gray-900"></i>
                                        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                        <main className="container mx-auto py-16 px-4">
                            <h1 className="text-3xl font-bold text-center mb-4">Get In Touch With Us</h1>
                            <p className="text-center text-gray-600 mb-12">
                                For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                            </p>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className="md:w-1/2 space-y-8 mb-8 md:mb-0">
                                    <div className="flex items-start space-x-4">
                                        <i className="fas fa-map-marker-alt text-2xl text-gray-700"></i>
                                        <div>
                                            <h2 className="text-xl font-semibold">Address</h2>
                                            <p>236 5th St. Avenue, New York NY10000, United States</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <i className="fas fa-phone-alt text-2xl text-gray-700"></i>
                                        <div>
                                            <h2 className="text-xl font-semibold">Phone</h2>
                                            <p>Mobile: (+84) 546-6789</p>
                                            <p>Hotline: (+84) 456-6789</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <i className="fas fa-clock text-2xl text-gray-700"></i>
                                        <div>
                                            <h2 className="text-xl font-semibold">Working Time</h2>
                                            <p>Monday-Friday: 9:00 - 22:00</p>
                                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700">Your name</label>
                                            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Abc"/>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">Email address</label>
                                            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Abc@def.com"/>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">Subject</label>
                                            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="This is an optional"/>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">Message</label>
                                            <textarea className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Hi I'd like to ask about"></textarea>
                                        </div>
                                        <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </main>
                        <section className="bg-gray-50 py-8">
                            <div className="container mx-auto flex justify-around text-center">
                                <div className="space-y-2">
                                    <i className="fas fa-gem text-3xl text-teal-500"></i>
                                    <h3 className="text-lg font-semibold">High Quality</h3>
                                    <p className="text-gray-600">crafted from top materials</p>
                                </div>
                                <div className="space-y-2">
                                    <i className="fas fa-shield-alt text-3xl text-teal-500"></i>
                                    <h3 className="text-lg font-semibold">Warranty Protection</h3>
                                    <p className="text-gray-600">Over 2 years</p>
                                </div>
                                <div className="space-y-2">
                                    <i className="fas fa-headset text-3xl text-teal-500"></i>
                                    <h3 className="text-lg font-semibold">24 / 7 Support</h3>
                                    <p className="text-gray-600">Dedicated support</p>
                                </div>
                            </div>
                        </section>
                        <footer className="bg-gray-50 py-12">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-col md:flex-row justify-between mb-8">
                                    <div className="md:w-1/4 mb-8 md:mb-0">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <img src="https://placehold.co/40x40" alt="Comforty logo" className="h-10 w-10"/>
                                            <span className="text-2xl font-bold">Comforty</span>
                                        </div>
                                        <p className="text-gray-600">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>
                                        <div className="flex space-x-4 mt-4">
                                            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    <div className="md:w-1/4 mb-8 md:mb-0">
                                        <h3 className="text-lg font-semibold mb-4">Category</h3>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Sofa</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Armchair</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Wing Chair</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Desk Chair</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Wooden Chair</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Park Bench</a></li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/4 mb-8 md:mb-0">
                                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Help & Support</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/4">
                                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat ex.</p>
                                        <form className="flex">
                                            <input type="email" className="w-full border border-gray-300 rounded-l px-4 py-2" placeholder="Your email"/>
                                            <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-r">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                                    <p>&copy; 2021 - Blogy - Designed & Developed by Zokirosoft</p>
                                    <div className="flex space-x-4 mt-4 md:mt-0">
                                        <img src="https://placehold.co/40x20" alt="PayPal" className="h-5"/>
                                        <img src="https://placehold.co/40x20" alt="VISA" className="h-5"/>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                );
            };
    
            ReactDOM.render(<App />, document.getElementById('root'));
}