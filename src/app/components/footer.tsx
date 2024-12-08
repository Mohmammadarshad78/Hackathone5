export default function Footer(){
    return  <footer className="bg-gray-100 py-8">
    <div className="container mx-auto px-4">
        <div className="flex justify-between">
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <img src="/Logo Icon-4.png" alt="Logo" className="w-10 h-10"/>
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
            <p>© 2024 - Blogy - Designed & Develop by Mohammad Arshad</p>
            <div className="flex space-x-4">
                <img src="" alt="PayPal"/>
                <img src="" alt="VISA"/>
            </div>
        </div>
    </div>
</footer>
}