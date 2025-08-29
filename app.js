// app.js
const { useState, useEffect } = React;

// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('English');

    return (
        <header className="gradient-bg text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <span className="text-green-800 font-bold text-xl">JT</span>
                        </div>
                        <h1 className="text-2xl font-bold">Jharkhand Tourism</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#hero" className="hover:text-green-300 transition-colors">Home</a>
                        <a href="#destinations" className="hover:text-green-300 transition-colors">Destinations</a>
                        <a href="#itinerary" className="hover:text-green-300 transition-colors">Itinerary</a>
                        <a href="#marketplace" className="hover:text-green-300 transition-colors">Marketplace</a>
                        <a href="#dashboard" className="hover:text-green-300 transition-colors">Dashboard</a>
                        <a href="#map" className="hover:text-green-300 transition-colors">Interactive Map</a>
                        <select 
                            className="language-selector"
                            value={currentLanguage}
                            onChange={(e) => setCurrentLanguage(e.target.value)}
                        >
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Santhali">Santhali</option>
                        </select>
                        <button className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-green-100 transition-colors">
                            Login
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#hero" className="hover:text-green-300 transition-colors">Home</a>
                            <a href="#destinations" className="hover:text-green-300 transition-colors">Destinations</a>
                            <a href="#itinerary" className="hover:text-green-300 transition-colors">Itinerary</a>
                            <a href="#marketplace" className="hover:text-green-300 transition-colors">Marketplace</a>
                            <a href="#dashboard" className="hover:text-green-300 transition-colors">Dashboard</a>
                            <a href="#map" className="hover:text-green-300 transition-colors">Interactive Map</a>
                            <select 
                                className="language-selector w-full"
                                value={currentLanguage}
                                onChange={(e) => setCurrentLanguage(e.target.value)}
                            >
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Bengali">Bengali</option>
                                <option value="Santhali">Santhali</option>
                            </select>
                            <button className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-green-100 transition-colors">
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

// Hero Section
const HeroSection = () => {
    return (
        <section id="hero" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
                            Discover the Hidden Gem of India<br />
                            <span className="text-green-600">Jharkhand</span>
                        </h2>
                        <p className="text-xl mb-8 text-gray-600">
                            Experience the perfect blend of natural beauty, rich tribal culture, and 
                            unforgettable adventures with our AI-powered tourism platform.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                                <i className="fas fa-route mr-2"></i>
                                Plan My Trip
                            </button>
                            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center">
                                <i className="fas fa-video mr-2"></i>
                                VR Preview
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <img 
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/907e7ef9-236d-4fd2-94db-13d82fba0c39.png" 
                                alt="Panoramic view of Jharkhand landscape with lush green forests, waterfalls, and tribal villages nestled in the valleys"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                        <i className="fas fa-robot text-green-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">AI Assistant</p>
                                        <p className="font-semibold text-gray-800">Ready to help you plan!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Features Section
const FeaturesSection = () => {
    const features = [
        {
            icon: "fas fa-brain",
            color: "bg-blue-100 text-blue-600",
            title: "AI Itinerary Planning",
            description: "Get personalized travel plans based on your preferences, budget, and interests."
        },
        {
            icon: "fas fa-shield-alt",
            color: "bg-green-100 text-green-600",
            title: "Blockchain Verification",
            description: "Secure transactions and verified local guides for your safety and trust."
        },
        {
            icon: "fas fa-map-marked-alt",
            color: "bg-purple-100 text-purple-600",
            title: "Interactive Maps & AR/VR",
            description: "Explore destinations with real-time location info and immersive AR/VR previews."
        },
        {
            icon: "fas fa-store",
            color: "bg-orange-100 text-orange-600",
            title: "Local Marketplace",
            description: "Discover authentic tribal handicrafts and eco-friendly products directly from artisans."
        },
        {
            icon: "fas fa-comments",
            color: "bg-pink-100 text-pink-600",
            title: "Multilingual Chatbot",
            description: "Get instant support in English, Hindi, Bengali, and local tribal languages."
        },
        {
            icon: "fas fa-chart-line",
            color: "bg-indigo-100 text-indigo-600",
            title: "Smart Analytics",
            description: "Data-driven insights for tourism officials to monitor trends and impact."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Powered by Cutting-Edge Technology
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our platform combines AI, blockchain, and immersive technologies to revolutionize 
                        your travel experience in Jharkhand
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="card-hover bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className={`feature-icon ${feature.color}`}>
                                <i className={`${feature.icon} text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Destinations Section
const DestinationsSection = () => {
    const destinations = [
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/970c0df4-a25f-4594-b1a4-624bc560aa50.png",
            alt: "Netarhat Hill Station panoramic view with misty mountains and pine forests during sunrise",
            title: "Netarhat",
            description: "The 'Queen of Chotanagpur' with breathtaking sunrises from Magnolia Point.",
            rating: 4.8
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6f0761e-1869-4e78-831e-451e5e40e698.png",
            alt: "Hundru Falls powerful waterfall cascading down rocky cliffs surrounded by green vegetation",
            title: "Hundru Falls",
            description: "A majestic waterfall near Ranchi, where the Subarnarekha River falls from 320 feet. It's a great spot for a day trip.",
            rating: 4.6
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d25c43d-0f0e-43cf-be61-efc8f25b2737.png",
            alt: "Betla National Park showing dense forest with elephants and deer in natural habitat",
            title: "Betla National Park",
            description: "Home to a diverse range of wildlife, including tigers and elephants.",
            rating: 4.9
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61e8605c-3c81-420a-86c5-4927f9999026.png",
            alt: "Baba Baidyanath Dham temple, one of the 12 Jyotirlingas, bustling with devotees",
            title: "Baba Baidyanath Dham",
            description: "A sacred pilgrimage site for Lord Shiva, one of the 12 Jyotirlingas of India.",
            rating: 4.7
        }
    ];

    return (
        <section id="destinations" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Explore Jharkhand's Treasures
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the most beautiful and culturally rich destinations that make 
                        Jharkhand a unique travel experience
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((destination, index) => (
                        <div key={index} className="card-hover bg-white rounded-2xl overflow-hidden shadow-md">
                            <div className="relative">
                                <img 
                                    src={destination.image} 
                                    alt={destination.alt}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                                    <i className="fas fa-star mr-1"></i>
                                    {destination.rating}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{destination.title}</h3>
                                <p className="text-gray-600 mb-4">{destination.description}</p>
                                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                                    Explore More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// AI Itinerary Planner
const ItineraryPlanner = () => {
    const [preferences, setPreferences] = useState({
        duration: '3',
        budget: 'medium',
        interests: ['nature', 'culture']
    });
    const [itinerary, setItinerary] = useState(null);

    const generateItinerary = () => {
        const newItinerary = {
            plan: `Day 1: Explore Deoghar's spiritual sites, including Baba Baidyanath Dham and Trikut Pahar. Enjoy a local meal.
            Day 2: Travel to Netarhat. Witness the stunning sunrise from Magnolia Point and visit the Koel View Point for sunset.
            Day 3: Head to Betla National Park for a morning safari. Spot local wildlife before heading back.`,
            cost: '₹5,000-₹8,000'
        };
        setItinerary(newItinerary);
    };

    return (
        <section id="itinerary" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        AI-Powered Itinerary Planner
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Let our intelligent system create the perfect travel plan tailored to your preferences
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Your Preferences</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration</label>
                                    <select 
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                        value={preferences.duration}
                                        onChange={(e) => setPreferences({...preferences, duration: e.target.value})}
                                    >
                                        <option value="1">1 Day</option>
                                        <option value="2">2 Days</option>
                                        <option value="3">3 Days</option>
                                        <option value="5">5 Days</option>
                                        <option value="7">7 Days</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                                    <select 
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                        value={preferences.budget}
                                        onChange={(e) => setPreferences({...preferences, budget: e.target.value})}
                                    >
                                        <option value="low">Budget (₹1000-3000/day)</option>
                                        <option value="medium">Moderate (₹3000-7000/day)</option>
                                        <option value="high">Luxury (₹7000+/day)</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                                    <div className="space-y-2">
                                        {['nature', 'culture', 'adventure', 'wildlife', 'spiritual'].map(interest => (
                                            <label key={interest} className="flex items-center">
                                                <input 
                                                    type="checkbox"
                                                    className="rounded text-green-600 focus:ring-green-500"
                                                    checked={preferences.interests.includes(interest)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setPreferences({
                                                                ...preferences, 
                                                                interests: [...preferences.interests, interest]
                                                            });
                                                        } else {
                                                            setPreferences({
                                                                ...preferences, 
                                                                interests: preferences.interests.filter(i => i !== interest)
                                                            });
                                                        }
                                                    }}
                                                />
                                                <span className="ml-2 text-gray-700 capitalize">{interest}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Your AI Itinerary</h3>
                            <div className="bg-white p-6 rounded-lg shadow-inner min-h-[300px] flex flex-col justify-center items-center">
                                {itinerary ? (
                                    <div className="w-full">
                                        <p className="text-gray-800 font-semibold mb-4 whitespace-pre-wrap">{itinerary.plan}</p>
                                        <p className="text-sm text-gray-500">Estimated Cost: {itinerary.cost}</p>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <i className="fas fa-route text-green-600 text-2xl"></i>
                                        </div>
                                        <p className="text-gray-600">Your personalized itinerary will appear here</p>
                                    </div>
                                )}
                                <button 
                                    onClick={generateItinerary}
                                    className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Generate Itinerary
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Marketplace Section
const MarketplaceSection = () => {
    const products = [
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/682166ca-0eaa-41cb-b1f5-93409be7a198.png",
            alt: "Traditional tribal bamboo handicrafts and woven baskets from Jharkhand artisans",
            title: "Tribal Handicrafts",
            price: "₹1,200",
            rating: 4.9
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4847e335-502a-436f-b25b-7c40552636a0.png",
            alt: "Organic forest honey collection from tribal communities in pristine environments",
            title: "Organic Forest Honey",
            price: "₹450",
            rating: 4.8
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e77e8a93-52fe-49ed-9602-581333e9d020.png",
            alt: "Handloom textiles with traditional tribal patterns and natural dyes",
            title: "Handloom Textiles",
            price: "₹2,500",
            rating: 4.7
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7027d7e1-88c9-43c3-8f81-5619cf8877cf.png",
            alt: "Traditional tribal jewelry made with natural materials and ancient techniques",
            title: "Tribal Jewelry",
            price: "₹800",
            rating: 4.9
        }
    ];

    return (
        <section id="marketplace" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Local Marketplace
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Support tribal communities by purchasing authentic handicrafts and 
                        eco-friendly products directly from local artisans
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="card-hover bg-white rounded-2xl overflow-hidden shadow-md">
                            <img 
                                src={product.image} 
                                alt={product.alt}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                                    <span className="text-sm text-yellow-500">
                                        <i className="fas fa-star"></i> {product.rating}
                                    </span>
                                </div>
                                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Government & Tourism Officials Dashboard (Mockup)
const DashboardSection = () => {
    const stats = [
        { title: "Tourists This Month", value: "1,25,000", icon: "fas fa-users" },
        { title: "Revenue from Eco-Tourism", value: "₹5 Cr", icon: "fas fa-rupee-sign" },
        { title: "Trending Destination", value: "Netarhat", icon: "fas fa-chart-line" },
        { title: "Tourist Satisfaction", value: "85%", icon: "fas fa-smile" },
    ];

    return (
        <section id="dashboard" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Tourism Analytics Dashboard
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real-time insights and data for tourism officials to monitor trends and impact.
                    </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <i className={`${stat.icon} text-2xl`}></i>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{stat.value}</h3>
                                <p className="text-sm text-gray-500">{stat.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-semibold mb-6">Monthly Tourist Footfall</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img 
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d367c3f3-00f0-4613-81e1-11885b552d43.png" 
                                alt="Monthly tourist footfall chart showing an upward trend" 
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Interactive Map Section
const InteractiveMap = () => {
    return (
        <section id="map" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Interactive Tourism Map
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore Jharkhand's tourist destinations with our interactive map featuring 
                        AR previews and real-time information
                    </p>
                </div>
                <div className="bg-gray-100 rounded-2xl p-8">
                    <div className="map-container bg-gray-300 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <i className="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
                                <p className="text-gray-500">Interactive map loading...</p>
                                <p className="text-sm text-gray-400 mt-2">(AR/VR features available in app)</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center p-4 bg-white rounded-lg">
                            <i className="fas fa-location-arrow text-2xl text-green-600 mb-2"></i>
                            <h4 className="font-semibold">Real-time Location</h4>
                            <p className="text-sm text-gray-600">Get precise directions and nearby points of interest</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                            <i className="fas fa-vr-cardboard text-2xl text-blue-600 mb-2"></i>
                            <h4 className="font-semibold">AR Previews</h4>
                            <p className="text-sm text-gray-600">Visualize destinations with augmented reality</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                            <i className="fas fa-users text-2xl text-purple-600 mb-2"></i>
                            <h4 className="font-semibold">Local Guides</h4>
                            <p className="text-sm text-gray-600">Connect with verified local tour guides</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="gradient-bg text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Jharkhand Tourism</h3>
                        <p className="text-green-100">
                            Transforming travel experiences through technology and community empowerment.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#destinations" className="text-green-100 hover:text-white">Destinations</a></li>
                            <li><a href="#itinerary" className="text-green-100 hover:text-white">Itinerary Planner</a></li>
                            <li><a href="#marketplace" className="text-green-100 hover:text-white">Marketplace</a></li>
                            <li><a href="#map" className="text-green-100 hover:text-white">Interactive Map</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-green-100 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                        <div className="chat-bubble bg-white text-green-800 p-3 rounded-lg">
                            <div className="flex items-center">
                                <i className="fas fa-robot text-green-600 mr-2"></i>
                                <span className="text-sm">AI Chat Assistant available 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-green-700 mt-8 pt-8 text-center">
                    <p className="text-green-200">
                        © 2024 Jharkhand Tourism Platform. All rights reserved. | 
                        Powered by AI & Blockchain Technology
                    </p>
                </div>
            </div>
        </footer>
    );
};

// AI Chat Widget
const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{
        text: "Hello! I'm your AI travel assistant. How can I help you plan your Jharkhand trip today?",
        sender: 'ai'
    }]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInput('');

        // Simple AI response logic
        setTimeout(() => {
            const aiResponse = getAiResponse(input);
            setMessages(prevMessages => [...prevMessages, { text: aiResponse, sender: 'ai' }]);
        }, 1000);
    };

    const getAiResponse = (query) => {
        const lowerQuery = query.toLowerCase();
        if (lowerQuery.includes('netarhat') || lowerQuery.includes('sunrise')) {
            return "Netarhat is famous for its stunning sunrise from Magnolia Point. It's a peaceful hill station, often called the 'Queen of Chotanagpur'. You can also visit Koel View Point for a great sunset.";
        } else if (lowerQuery.includes('hundru falls')) {
            return "Hundru Falls is a spectacular waterfall near Ranchi, where the Subarnarekha River falls from 320 feet. It's a great spot for a day trip.";
        } else if (lowerQuery.includes('deoghar') || lowerQuery.includes('baidyanath')) {
            return "Deoghar is a major pilgrimage site and home to Baba Baidyanath Dham, one of the 12 Jyotirlingas. It's a must-visit for spiritual travelers.";
        } else if (lowerQuery.includes('hotels')) {
            return "We have a wide range of verified accommodations from eco-friendly homestays to luxury hotels. You can check the 'Homestay & Eco-Tourism Booking' section for more details.";
        } else if (lowerQuery.includes('culture') || lowerQuery.includes('tribal')) {
            return "Jharkhand's rich tribal culture is a major attraction. Check out our 'Local Marketplace' for authentic handicrafts and the 'Cultural Events Calendar' for local festivals.";
        } else if (lowerQuery.includes('thank')) {
            return "You're welcome! Feel free to ask if you have any more questions.";
        } else {
            return "I'm not sure how to answer that yet, but I can help you with common questions about Jharkhand's tourist destinations, culture, and travel plans.";
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 mb-4 overflow-hidden flex flex-col">
                    <div className="gradient-bg text-white p-4 flex justify-between items-center">
                        <h3 className="font-semibold">AI Travel Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="text-white">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="p-4 flex-grow overflow-y-auto space-y-3">
                        {messages.map((msg, index) => (
                            <div 
                                key={index}
                                className={`p-3 rounded-lg ${msg.sender === 'user' ? 'bg-green-100 text-gray-800 self-end ml-auto' : 'bg-gray-100 text-gray-800'}`}
                            >
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t">
                        <div className="flex items-center space-x-2">
                            <input 
                                type="text" 
                                placeholder="Type your message..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') handleSend();
                                }}
                            />
                            <button 
                                onClick={handleSend}
                                className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 gradient-bg rounded-full shadow-lg flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
            >
                <i className="fas fa-robot"></i>
            </button>
        </div>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <DestinationsSection />
            <ItineraryPlanner />
            <MarketplaceSection />
            <DashboardSection />
            <InteractiveMap />
            <Footer />
            <ChatWidget />
        </div>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);