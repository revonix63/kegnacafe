import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Instagram, Send, Mail, X, Star } from 'lucide-react';
import './App.css';

// Import images
import cafeInterior from './assets/images/2021-06-04.webp';
import coffeePouring from './assets/images/b138e7af-8175-40f5-9805-3137161ee334.jpeg';
import traditionalCoffee from './assets/images/5c011229-4dda-4854-ad0c-fc8d5990d645.jpeg';
import coffeeSmoke from './assets/images/ca0752b2-1ec4-4dc9-add4-e3777dbb3e60.jpeg';
import ethiopianCoffee from './assets/images/ethiopian_coffee_ceremony.jpg';
import kegnaLogo from './assets/images/kegna_cafe_logo.png';

// Import real menu item images
import macchiatoReal from './assets/images/macchiato_real.jpg';
import cappuccinoReal from './assets/images/cappuccino_real.jpg';
import espressoReal from './assets/images/espresso_real.jpg';
import greenTeaReal from './assets/images/green_tea_real.jpg';
import himbashaReal from './assets/images/himbasha_real.jpg';
import honeyCakeReal from './assets/images/honey_cake_real.jpg';
import avocadoSmoothieReal from './assets/images/avocado_smoothie_real.jpg';
import ethiopianTea from './assets/images/ethiopian_tea_spiced.jpg';
import ethiopianTeaCup from './assets/images/ethiopian_tea_cup.jpg';
import ethiopianSmoothie from './assets/images/ethiopian_smoothie_spris.jpg';
import ethiopianTej from './assets/images/ethiopian_tej.jpg';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      category: 'ቡና (Coffee)',
      items: [
        { name: 'የኢትዮጵያ ቡና', price: '30 ብር', image: ethiopianCoffee, description: 'ባህላዊ የኢትዮጵያ ቡና ሥነ ሥርዓት' },
        { name: 'ማኪያቶ', price: '35 ብር', image: macchiatoReal, description: 'ክሬም ያለው ጣፋጭ ቡና' },
        { name: 'ካፑቺኖ', price: '40 ብር', image: cappuccinoReal, description: 'ወተት ያለው ቡና' },
        { name: 'ኤስፕሬሶ', price: '25 ብር', image: espressoReal, description: 'ጠንካራ ቡና' }
      ]
    },
    {
      category: 'ሻይ (Tea)',
      items: [
        { name: 'የኢትዮጵያ ሻይ', price: '15 ብር', image: ethiopianTea, description: 'ባህላዊ ቅመማ ቅመም ያለው ሻይ' },
        { name: 'አረንጓዴ ሻይ', price: '12 ብር', image: greenTeaReal, description: 'ጤናማ አረንጓዴ ሻይ' },
        { name: 'ጥቁር ሻይ', price: '10 ብር', image: ethiopianTeaCup, description: 'ጠንካራ ጥቁር ሻይ' },
        { name: 'የዝንጅብል ሻይ', price: '18 ብር', image: ethiopianTea, description: 'ዝንጅብል ያለው ሻይ' }
      ]
    },
    {
      category: 'ጣፋጭ ምግቦች (Pastries)',
      items: [
        { name: 'ሂምባሻ', price: '25 ብር', image: himbashaReal, description: 'ባህላዊ የኢትዮጵያ ዳቦ' },
        { name: 'የማር ኬክ', price: '45 ብር', image: honeyCakeReal, description: 'ማር ያለው ጣፋጭ ኬክ' },
        { name: 'ባቄላ', price: '20 ብር', image: himbashaReal, description: 'ባህላዊ ጣፋጭ ምግብ' },
        { name: 'ዳቦ', price: '15 ብር', image: honeyCakeReal, description: 'ትኩስ ዳቦ' }
      ]
    },
    {
      category: 'ስሙዚ እና መጠጦች (Smoothies & Drinks)',
      items: [
        { name: 'ስፕሪስ', price: '35 ብር', image: ethiopianSmoothie, description: 'ባህላዊ የኢትዮጵያ ፍራፍሬ ስሙዚ' },
        { name: 'ተጅ', price: '50 ብር', image: ethiopianTej, description: 'ባህላዊ የማር ወይን' },
        { name: 'የአቮካዶ ስሙዚ', price: '40 ብር', image: avocadoSmoothieReal, description: 'ጤናማ አቮካዶ ስሙዚ' },
        { name: 'የፍራፍሬ ጁስ', price: '30 ብር', image: ethiopianSmoothie, description: 'ትኩስ ፍራፍሬ ጁስ' }
      ]
    }
  ];

  const reviews = [
    {
      name: 'አበበ ተስፋዬ',
      rating: 5,
      comment: 'በጣም ጥሩ ቡና ነው! የኢትዮጵያ ባህላዊ ቡና ሥነ ሥርዓት በጣም ደስ ይላል። አገልግሎቱም ጥሩ ነው።',
      date: 'ሰኔ 15, 2024'
    },
    {
      name: 'ሳራ መሐመድ',
      rating: 5,
      comment: 'ሂምባሻው በጣም ጣፋጭ ነው! የማር ኬኩም ደስ ይላል። ቦታውም በጣም ምቹ እና ንጹህ ነው።',
      date: 'ሰኔ 10, 2024'
    },
    {
      name: 'ዳንኤል አለሙ',
      rating: 4,
      comment: 'ካፑቺኖው በጣም ጥሩ ነው። ቦታው ለጓደኞች ጋር ለመገናኘት በጣም ጥሩ ነው። ዋጋውም ተመጣጣኝ ነው።',
      date: 'ሰኔ 8, 2024'
    },
    {
      name: 'ሄለን ገብረሥላሴ',
      rating: 5,
      comment: 'የአቮካዶ ስሙዚው በጣም ጤናማ እና ጣፋጭ ነው። ሰራተኞቹ በጣም ደግ እና ተግባቢ ናቸው።',
      date: 'ሰኔ 5, 2024'
    },
    {
      name: 'ሙሉጌታ ወርቁ',
      rating: 5,
      comment: 'ተጅ በጣም ጥሩ ነው! ባህላዊ ጣዕሙ በጣም ደስ ይላል። ኬኛ ካፈ የእኛ ተወዳጅ ቦታ ሆኗል።',
      date: 'ሰኔ 2, 2024'
    },
    {
      name: 'ብርሃኔ ታደሰ',
      rating: 4,
      comment: 'የኢትዮጵያ ሻይ በጣም ጥሩ ነው። ቅመማ ቅመሙ በጣም ደስ ይላል። ቦታውም ለማንበብ በጣም ጥሩ ነው።',
      date: 'ግንቦት 28, 2024'
    }
  ];

  const galleryImages = [
    { src: cafeInterior, alt: 'የካፈ ውስጥ ገጽታ' },
    { src: coffeePouring, alt: 'ቡና መፍሰስ' },
    { src: traditionalCoffee, alt: 'ባህላዊ ቡና' },
    { src: coffeeSmoke, alt: 'የቡና ጭስ' },
    { src: ethiopianCoffee, alt: 'የኢትዮጵያ ቡና' },
    { src: ethiopianTea, alt: 'የኢትዮጵያ ሻይ' }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleCall = () => {
    window.open('tel:+251962025394', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/251962025394', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cafeInterior})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-orange-900/50 to-yellow-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={kegnaLogo} 
              alt="ኬኛ ካፈ Logo" 
              className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl bg-white/10 backdrop-blur-sm rounded-full p-4"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-serif tracking-wide drop-shadow-2xl">
            ኬኛ ካፈ
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light tracking-wider drop-shadow-lg">
            መለያቺን ጥራታቺን ነው
          </p>
          <p className="text-lg md:text-xl mb-8 font-light opacity-90 drop-shadow-lg">
            የኢትዮጵያ ባህላዊ ቡና እና ጣፋጭ ምግቦች
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleCall}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <Phone size={20} />
              አሁን ይደውሉ
            </button>
            <button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cream-100 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-amber-900 font-serif">
            የእኛ ምናሌ
          </h2>
          
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-amber-800 text-center font-serif">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    onClick={() => handleItemClick(item)}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                  >
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-amber-900">{item.name}</h4>
                      <p className="text-2xl font-bold text-amber-700">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-amber-900 font-serif">
            ስለ ኬኛ ካፈ
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <p className="text-lg leading-relaxed text-amber-800 mb-6">
              ኬኛ ካፈ በሱሉልታ ከተማ የሚገኝ ባህላዊ የኢትዮጵያ ቡና ቤት ነው። እኛ የኢትዮጵያን ባህላዊ ቡና ሥነ ሥርዓት እና ጣፋጭ ምግቦችን በዘመናዊ አገልግሎት እናቀርባለን።
            </p>
            <p className="text-lg leading-relaxed text-amber-800 mb-6">
              ከጠዋት እስከ ማታ ድረስ ለደንበኞቻችን ሞቅ ያለ እና ምቹ አካባቢ እናቀርባለን። የእኛ ቡና ከኢትዮጵያ ምርጥ አካባቢዎች የተመረጠ ሲሆን በባህላዊ መንገድ ይዘጋጃል።
            </p>
            <p className="text-lg leading-relaxed text-amber-800">
              ኬኛ ካፈ - የእርስዎ የቤት ቡና ቤት!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-amber-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-amber-900 font-serif">
            ፎቶ ጋለሪ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-amber-900 font-serif">
            የደንበኞች አስተያየት
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        fill={i < review.rating ? "currentColor" : "none"}
                        className={i < review.rating ? "text-amber-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-amber-800 mb-6 leading-relaxed text-lg italic">
                  "{review.comment}"
                </p>
                
                <div className="border-t border-amber-200 pt-4">
                  <p className="font-semibold text-amber-900 text-lg">{review.name}</p>
                  <p className="text-amber-600 text-sm">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl inline-block">
              <h3 className="text-2xl font-semibold mb-4 text-amber-900">የእርስዎን አስተያየት ያካፍሉ</h3>
              <p className="text-amber-700 mb-6">
                ኬኛ ካፈን ከጎበኙ በኋላ የእርስዎን ተሞክሮ ያካፍሉን። ይህ ለሌሎች ደንበኞች እና ለእኛ በጣም ጠቃሚ ነው።
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={handleCall}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <Phone size={18} />
                  ይደውሉ
                </button>
                <button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-amber-900 font-serif">
            ያግኙን
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-amber-900">የእኛ መረጃ</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold text-amber-900">አድራሻ</p>
                    <p className="text-amber-700">ሱሉልታ፣ ኢትዮጵያ</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold text-amber-900">የስራ ሰዓት</p>
                    <p className="text-amber-700">ከጠዋት 6:00 እስከ ማታ 8:00</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold text-amber-900">ስልክ</p>
                    <p className="text-amber-700">+251 96 202 5394</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <button 
                  onClick={handleCall}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <Phone size={18} />
                  ይደውሉ
                </button>
                <button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6177234567!2d38.7833!3d9.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMDAuMCJOIDM4wrA0Nic1OS45IkU!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ኬኛ ካፈ አድራሻ"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <img 
              src={kegnaLogo} 
              alt="ኬኛ ካፈ Logo" 
              className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full p-2"
            />
          </div>
          <h3 className="text-3xl font-bold mb-6 font-serif">ኬኛ ካፈ</h3>
          <p className="text-lg mb-8 opacity-90">መለያቺን ጥራታቺን ነው</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://t.me/ayanafekadu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
            >
              <Send size={24} />
            </a>
            <a 
              href="https://www.instagram.com/ethiopia.cafe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="mailto:kegnacafe@gmail.com"
              className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <p className="text-sm opacity-75">
            © 2024 ኬኛ ካፈ። ሁሉም መብቶች የተጠበቁ ናቸው።
          </p>
        </div>
      </footer>

      {/* Modal for Menu Items */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full mx-4 overflow-hidden shadow-2xl">
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-amber-900">{selectedItem.name}</h3>
              <p className="text-amber-700 mb-4">{selectedItem.description}</p>
              <p className="text-3xl font-bold text-amber-800 mb-6">{selectedItem.price}</p>
              
              <div className="flex gap-3">
                <button 
                  onClick={handleCall}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  ይደውሉ
                </button>
                <button 
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

