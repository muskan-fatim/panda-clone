import Image from "next/image";

export default function BusinessLunch() {
  return (
    <div className="bg-white py-3">
<div > 
<div className="max-w-7xl  mx-auto bg-gradient-to-br from-pink-600 via-pink-500 to-pink-700 text-white py-16 px-6 rounded-3xl shadow-2xl relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/20 rounded-full blur-2xl transform -translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-block bg-pink-400/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold">
                <span className="material-symbols-outlined text-lg mr-2 align-middle">restaurant</span>
                Food & Groceries Delivered
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight pl-6">
                Download the 
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"> food </span>
                and groceries you love
              </h1>
              <p className="text-xl text-pink-100 leading-relaxed max-w-2xl pl-6">
                It's all at your fingertips – the restaurants and shops you love. Find the right food 
                and groceries to suit your mood, and make the first bite last. Go ahead, download us.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pl-6">
              <div className="flex justify-center lg:justify-start space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1603515161074-3206aaeb03f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhcHAlMjBzdG9yZXxlbnwwfHx8fDE3NTI2ODYwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Download on the App Store" 
                  className="h-14 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1587573578335-9672da4d0292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBwbGF5fGVufDB8fHx8MTc1MjY4NjA4Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Get it on Google Play" 
                  className="h-14 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxodWF3ZWklMjBhcHAlMjBnYWxsZXJ5fGVufDB8fHx8MTc1MjY4NjA4Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Explore it on AppGallery" 
                  className="h-14 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10M+</div>
                <div className="text-pink-200 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">4.8</div>
                <div className="text-pink-200 text-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-yellow-300 mr-1">star</span>
                  Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50K+</div>
                <div className="text-pink-200 text-sm">Restaurants</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end pr-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-pink-600/30 rounded-3xl blur-2xl transform rotate-6"></div>
              <img 
                src="/home-foodpanda-apps.webp" 
                alt="Mobile App Interface" 
                className="relative z-10 w-80 h-auto transform -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-3xl border-4 border-white/20"
              />
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-pink-600 font-bold text-lg shadow-lg z-20 animate-pulse">
                <span className="material-symbols-outlined">offer</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-full flex items-center justify-center text-pink-600 font-bold text-sm shadow-lg z-20">
                <div className="text-center">
                  <div className="font-bold">FREE</div>
                  <div className="text-xs">Delivery</div>
                </div>
              </div>
            </div>
            
          
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-yellow-300 mb-4 block">schedule</span>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-pink-200">Get your food delivered in 30 minutes or less</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-yellow-300 mb-4 block">verified</span>
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-pink-200">Fresh ingredients and quality guaranteed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-yellow-300 mb-4 block">support_agent</span>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-pink-200">Customer support available round the clock</p>
          </div>
        </div>
      </div>
      
    </div> 
        </div>


            <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl md:text-4xl p-6 md:p-10 font-bold text-gray-800 mb-4 ml-3">

        You prepare the food, we handle the rest
        </h1>

        <div className="relative">
          <Image
            src="/chef.webp"
            alt=""
            width={1500}
            height={600}
            className="w-full h-auto rounded-lg "
          />

          <div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg max-w-sm ">
            <h2 className="text-2xl font-semibold mb-2 hidden md:block">List your restaurant or shop on foodpanda </h2>
            <p className="md:hidden text-gray-700">  Partner with us !</p>
            <p className="text-gray-700 hidden md:block">

Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
It's simple:
 we list your menu and product lists online, help you process orders, pick them up, 
 and deliver them to hungry pandas – in a heartbeat!
Interested? Let's start our partnership today!
            </p>
          </div>
        </div>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl md:text-4xl p-4 md:p-10 font-bold text-gray-800 mb-4 ml-3 ">

          Take your office out to lunch
        </h1>

        <div className="relative">
          <Image
            src="/home-corporate-pk.webp"
            alt="Office lunch scene"
            width={1500}
            height={400}
            className="w-full h-auto rounded-lg "
          />

          <div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-2xl font-semibold mb-2 hidden md:block">foodpanda for business</h2>
            <p className="text-gray-700 md:hidden">
            Order lunch for work-from-home
            </p>
            <p className="text-gray-700 hidden md:block">
              Order lunch or fuel for work-from-home, late nights in the office,
              corporate events, client meetings, and much more.
            </p>
          </div>
        </div>

        <div className="bg-white py-16 px-6 md:px-16">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center ">
            Order food and groceries online from the best restaurants and shops on foodpanda
          </h1>

          <p className="text-gray-600 mb-6">
            Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? 
            Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.
          </p>

          <h2 className="text-2xl font-bold mb-4">What's new?</h2>
          <ul className="list-none space-y-2 mb-8">
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">✓</span>
              <span className="text-gray-700">Wide variety of restaurants and shops, an abundance of cuisines & products.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">✓</span>
              <span className="text-gray-700">High quality delivery service.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">✓</span>
              <span className="text-gray-700">Live chat feature to give App users instant help when they need it.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">✓</span>
              <span className="text-gray-700">NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries and more near you.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">How can I get foodpanda delivery?</h3>
              <p>To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!</p>
            </div>

            <div>
              <h3 className="font-semibold">Which takeout restaurants open now near me?</h3>
              <p>You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.</p>
            </div>

            <div>
              <h3 className="font-semibold">Does foodpanda deliver 24 hours?</h3>
              <p>Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.</p>
            </div>

            <div>
              <h3 className="font-semibold">Can you pay cash for foodpanda?</h3>
              <p>Yes, you can pay cash on delivery for foodpanda in Pakistan.</p>
            </div>

            <div>
              <h3 className="font-semibold">How can I pay foodpanda online?</h3>
              <p>You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.</p>
            </div>

            <div>
              <h3 className="font-semibold">Can I order foodpanda for someone else?</h3>
              <p>Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.</p>
            </div>

            <div>
              <h3 className="font-semibold">How much does foodpanda charge for delivery?</h3>
              <p>Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of all - location and the restaurant you are ordering from. You can always check the delivery fee while forming your order. Besides, you can filter the restaurants by clicking on the "Free Delivery" icon at the top of your restaurant listing.</p>
            </div>

            <div>
              <h3 className="font-semibold">What restaurants let you order online?</h3>
              <p>There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example, KFC, McDonald's, Pizza Hut, OPTP, Hardee's, Domino's, Kababjees and many-many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.</p>
            </div>

            <div>
              <h3 className="font-semibold">Does foodpanda have minimum order?</h3>
              <p>Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you order from and is indicated during your ordering process.</p>
            </div>

            <div>
              <h3 className="font-semibold">What is the difference between delivery and Pick-Up?</h3>
              <p>If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
