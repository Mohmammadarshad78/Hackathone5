import ReactDOM from "react-dom";

export default function Faq(){
    return 
            const App = () => {
                return (
                    <div>
                        {/* Top Bar */}
                        <div className="bg-gray-900 text-white text-sm py-2 flex justify-between items-center px-4">
                            <div>✔ Free Shipping On All Orders Over $50</div>
                            <div className="flex space-x-4">
                                <div>Eng ▼</div>
                                <div>Faqs</div>
                                <div>Need Help</div>
                            </div>
                        </div>
    
                        {/* Header */}
                        <header className="bg-gray-100 py-4">
                            <div className="container mx-auto flex justify-between items-center px-4">
                                <div className="flex items-center space-x-2">
                                    <img src="https://placehold.co/40x40" alt="Logo" className="w-10 h-10"/>
                                    <span className="text-2xl font-bold">Comforty</span>
                                </div>
                                <nav className="flex space-x-8">
                                    <a href="#" className="text-teal-500">Home</a>
                                    <a href="#">Shop</a>
                                    <a href="#">Product</a>
                                    <a href="#">Pages</a>
                                    <a href="#">About</a>
                                </nav>
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <button className="flex items-center space-x-2">
                                            <i className="fas fa-shopping-cart"></i>
                                            <span>Cart</span>
                                            <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
                                        </button>
                                    </div>
                                    <div>Contact: <span className="font-bold">(808) 555-0111</span></div>
                                </div>
                            </div>
                        </header>
    
                        {/* Main Content */}
                        <main className="flex-grow"></main>
    
                        {/* Footer */}
                        <footer className="bg-gray-100 py-8">
                            <div className="container mx-auto px-4">
                                <div className="flex justify-between">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <img src="https://placehold.co/40x40" alt="Logo" className="w-10 h-10"/>
                                            <span className="text-2xl font-bold">Comforty</span>
                                        </div>
                                        <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus</p>
                                        <div className="flex space-x-4">
                                            <i className="fab fa-twitter"></i>
                                            <i className="fab fa-facebook"></i>
                                            <i className="fab fa-instagram"></i>
                                            <i className="fab fa-youtube"></i>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">CATEGORY</h3>
                                        <ul className="space-y-1">
                                            <li><a href="#" className="text-teal-500">Sofa</a></li>
                                            <li><a href="#">Armchair</a></li>
                                            <li><a href="#">Wing Chair</a></li>
                                            <li><a href="#">Desk Chair</a></li>
                                            <li><a href="#">Wooden Chair</a></li>
                                            <li><a href="#">Park Bench</a></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">SUPPORT</h3>
                                        <ul className="space-y-1">
                                            <li><a href="#">Help & Support</a></li>
                                            <li><a href="#">Teams & Conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Help</a></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">NEWSLETTER</h3>
                                        <div className="flex space-x-2">
                                            <input type="email" placeholder="Your email" className="border border-gray-300 p-2 rounded"/>
                                            <button className="bg-teal-500 text-white px-4 py-2 rounded">Subscribe</button>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-8">
                                    <p>© 2021 - Blogy - Designed & Develop by Zokirosoft</p>
                                    <div className="flex space-x-4">
                                        <img src="https://placehold.co/40x20" alt="PayPal"/>
                                        <img src="https://placehold.co/40x20" alt="VISA"/>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                );
            };
    
            ReactDOM.render(<App />, document.getElementById('root'));
}