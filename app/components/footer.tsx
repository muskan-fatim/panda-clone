import Image from "next/image"
export default function Footer(){
  return(
<div> 
        	<div className="w-full bg-gradient-to-b from-white to-pink-500 border-t border-gray-100">
	  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
	      <div className="space-y-6">
	        <div className="flex items-center space-x-3">
	          <div className="w-12 h-12 bg-pink-500  rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <Image src={"/icon.PNG"} alt="food panda" height={100} width={100} className="rounded-2xl" />

            </div>
	          <div>
	            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">foodpanda</h3>
	            <p className="text-gray-500 text-sm">Delivering happiness</p>
	          </div>
	        </div>
	        <p className="text-gray-600 leading-relaxed">Experience the convenience of food delivery with our premium service. Fresh meals, delivered fast, right to your doorstep.</p>
	        <div className="flex space-x-4">
	          <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
	            <i className="fa-brands fa-facebook text-lg"></i>
	          </a>
	          <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
	            <i className="fa-brands fa-twitter text-lg"></i>
	          </a>
	          <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
	            <i className="fa-brands fa-instagram text-lg"></i>
	          </a>
	          <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
	            <i className="fa-brands fa-linkedin text-lg"></i>
	          </a>
	        </div>
	      </div>
	
	      <div className="space-y-4">
	        <h4 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h4>
	        <div className="space-y-3">
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fas fa-home text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
            <span>Home</span>
	          </a>
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fas fa-utensils  text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
            <span>Restaurants</span>
	          </a>
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fas  fa-tags text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
	            <span>Offers</span>
	          </a>
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fa fa-shopping-cart text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
	            <span>Cart</span>
	          </a>
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fa fa-user-circle text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
	            <span>Profile</span>
	          </a>
	        </div>
	      </div>
	
	      <div className="space-y-4">
	        <h4 className="text-lg font-semibold text-gray-800 mb-6">Support</h4>
	        <div className="space-y-3">
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fa fa-question-circle  text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
	            <span>Help Center</span>
	          </a>
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fa fa-phone-alt  text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
	            <span>Contact Us</span>
	          </a>
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fa  fa-user-shield text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
	            <span>Privacy Policy</span>
	          </a>
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fa fa-gavel text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
	            <span>Terms of Service</span>
	          </a>
	          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 group">
            <i className="fa fa-comment-dots  text-pink-500 group-hover:scale-110 transition-transform duration-300"></i>
	            <span>Feedback</span>
	          </a>
	        </div>
	      </div>
	
	      <div className="space-y-4">
	        <h4 className="text-lg font-semibold text-gray-800 mb-6">Download App</h4>
	        <div className="space-y-4">
	          <a href="#" className="flex items-center space-x-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300 group">
	            <i className="fa-brands fa-apple text-2xl group-hover:scale-110 transition-transform duration-300"></i>
	            <div>
	              <p className="text-xs text-gray-300">Download on the</p>
	              <p className="text-sm font-semibold">App Store</p>
	            </div>
	          </a>
	          <a href="#" className="flex items-center space-x-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300 group">
	            <i className="fa-brands fa-google-play text-2xl group-hover:scale-110 transition-transform duration-300"></i>
	            <div>
	              <p className="text-xs text-gray-300">Get it on</p>
	              <p className="text-sm font-semibold">Google Play</p>
	            </div>
	          </a>
	        </div>
	        
	      </div>
	    </div>
	
	    <div className="border-t border-gray-200 pt-8">
	      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
	        <div className="flex items-center space-x-6">
	          <div className="flex items-center space-x-2">
	            <span className="text-sm text-gray-600">Secure Payments</span>
	          </div>
	          <div className="flex items-center space-x-2">
	            <span className="text-sm text-gray-600">Fast Delivery</span>
	          </div>
	          <div className="flex items-center space-x-2">
	            <span className="text-sm text-gray-600">24/7 Support</span>
	          </div>
	        </div>
	        <div className="flex items-center space-x-4">
	          <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="w-8 h-8 hover:scale-110 transition-transform duration-300"  />
	          <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
	          <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
	          <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" className="w-8 h-8 hover:scale-110 transition-transform duration-300"/>
	        </div>
	      </div>
	    </div>
	
	    <div className="border-t border-gray-200 pt-6 mt-8">
	      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
	        <p className="text-gray-500 text-sm">© 2024 foodpanda. All rights reserved. Made with ❤️ for food lovers.</p>
	        <div className="flex items-center space-x-6 text-sm text-gray-500">
	          <a href="#" className="hover:text-pink-500 transition-colors duration-300">Privacy Policy</a>
	          <a href="#" className="hover:text-pink-500 transition-colors duration-300">Terms of Service</a>
	          <a href="#" className="hover:text-pink-500 transition-colors duration-300">Cookies</a>
	          <a href="#" className="hover:text-pink-500 transition-colors duration-300">Careers</a>
	        </div>
	      </div>
	    </div>
	  </div>
	</div> 
        </div>)}