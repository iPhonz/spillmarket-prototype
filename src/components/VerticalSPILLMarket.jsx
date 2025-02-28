import React, { useState, useRef } from 'react';
import { Heart, MessageCircle, Share2, Camera, Award, User, ShoppingBag, TrendingUp, ChevronUp, ChevronDown } from 'lucide-react';

const VerticalSPILLMarket = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const feedRef = useRef(null);
  
  // Sample feed data
  const posts = [
    {
      id: 1,
      creator: {
        name: "Jasmine Waters",
        avatar: "👩🏾‍🦱",
        verified: true,
        isTopseller: true,
        rating: 4.9,
        reviews: 453,
        followers: "142K"
      },
      product: {
        name: "Honey Glow Face Serum",
        brand: "Melanin Essentials",
        isBlackOwned: true,
        price: 32.99,
        originalPrice: 45.99,
        discount: "28%",
        rating: 4.8,
        reviews: "1.2K",
        sold: 936,
        isTrending: true,
        stock: 27
      },
      content: {
        emoji1: "✨",
        emoji2: "🧴",
        emoji3: "💆🏾‍♀️",
        title: "Glowing Skin!",
        ingredients: ["🌿", "🍯", "🌺"],
        views: "24.7K",
        duration: "00:42",
        isLive: true
      },
      engagement: {
        likes: "2.4K",
        comments: 324,
        shares: 186,
        purchases: 74
      },
      description: "This serum changed my skin in just one week! ✨ It's made with all-natural ingredients 🌿 and perfect for sensitive skin. 💯",
      hashtags: ["#BlackOwnedBeauty", "#MelaninEssentials"]
    },
    {
      id: 2,
      creator: {
        name: "Alex Kim",
        avatar: "👨🏻‍🦱",
        verified: true,
        isTopseller: false,
        rating: 4.7,
        reviews: 218,
        followers: "87K"
      },
      product: {
        name: "Vitamin C Brightening Mask",
        brand: "SkinRevive",
        isBlackOwned: false,
        price: 24.99,
        originalPrice: 29.99,
        discount: "16%",
        rating: 4.6,
        reviews: "842",
        sold: 712,
        isTrending: true,
        stock: 43
      },
      content: {
        emoji1: "🍊",
        emoji2: "✨",
        emoji3: "👨🏻‍🦱",
        title: "Brighter Skin!",
        ingredients: ["🍊", "🌱", "🌸"],
        views: "18.3K",
        duration: "01:15",
        isLive: false
      },
      engagement: {
        likes: "1.8K",
        comments: 276,
        shares: 142,
        purchases: 58
      },
      description: "This mask brightened my skin after just 2 uses! 🍊 The vitamin C really helps with dark spots and gives you that glow! ✨",
      hashtags: ["#VitaminCMask", "#SkinRevive", "#GlowingSkin"]
    },
    {
      id: 3,
      creator: {
        name: "Maya Johnson",
        avatar: "👩🏾",
        verified: true,
        isTopseller: true,
        rating: 5.0,
        reviews: 621,
        followers: "215K"
      },
      product: {
        name: "Shea Moisture Hair Mask",
        brand: "Curly Essence",
        isBlackOwned: true,
        price: 18.99,
        originalPrice: 27.99,
        discount: "32%",
        rating: 4.9,
        reviews: "2.4K",
        sold: 1832,
        isTrending: true,
        stock: 15
      },
      content: {
        emoji1: "💇🏾‍♀️",
        emoji2: "✨",
        emoji3: "💫",
        title: "Curls Popping!",
        ingredients: ["🥥", "🌴", "🧴"],
        views: "32.8K",
        duration: "00:58",
        isLive: false
      },
      engagement: {
        likes: "3.7K",
        comments: 486,
        shares: 324,
        purchases: 132
      },
      description: "This hair mask is EVERYTHING for my 4C curls! 💇🏾‍♀️ Deep conditioning that lasts all week with no buildup. My curls have never been more defined! ✨",
      hashtags: ["#CurlyHair", "#4CHairCare", "#BlackOwnedBeauty"]
    }
  ];
  
  // Handle scroll to change current post index
  const handleScroll = () => {
    if (feedRef.current) {
      const scrollPosition = feedRef.current.scrollTop;
      const postHeight = feedRef.current.scrollHeight / posts.length;
      const newIndex = Math.min(
        posts.length - 1,
        Math.max(0, Math.floor(scrollPosition / postHeight))
      );
      
      if (newIndex !== currentPostIndex) {
        setCurrentPostIndex(newIndex);
      }
    }
  };
  
  const scrollToPost = (index) => {
    if (feedRef.current) {
      const postHeight = feedRef.current.scrollHeight / posts.length;
      feedRef.current.scrollTo({
        top: index * postHeight,
        behavior: 'smooth'
      });
    }
  };
  
  // Next and previous post handlers
  const nextPost = () => {
    const newIndex = (currentPostIndex + 1) % posts.length;
    scrollToPost(newIndex);
  };
  
  const prevPost = () => {
    const newIndex = currentPostIndex === 0 ? posts.length - 1 : currentPostIndex - 1;
    scrollToPost(newIndex);
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-purple-800 px-4 py-2 flex justify-between items-center z-30 relative">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white">SPILLMarket</h1>
          <span className="ml-2 px-2 py-0.5 bg-purple-700 rounded-full text-xs">BETA</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-xs">COMMUNITY</div>
            <div className="font-bold">$23,750</div>
          </div>
          
          <div className="text-center">
            <div className="text-xs">YOUR EARNINGS</div>
            <div className="font-bold">$127.5</div>
          </div>
          
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <span className="text-lg">🙋🏽‍♀️</span>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-black px-4 py-2 flex space-x-6 overflow-x-auto z-20 relative">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-center">For<br />You</span>
          </div>
        </div>
        <button className="text-gray-300">Beauty</button>
        <button className="text-gray-300">Fashion</button>
        <button className="text-gray-300">Home</button>
        <button className="text-gray-300">Food</button>
        <button className="text-gray-300">Wellness</button>
      </nav>
      
      {/* Progress Indicator */}
      <div className="fixed top-24 right-3 z-20 flex flex-col h-48 justify-center">
        <div className="bg-black bg-opacity-50 px-1 py-2 rounded-full">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className={`w-2 h-12 my-1 rounded-full cursor-pointer ${index === currentPostIndex ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => scrollToPost(index)}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Vertical Navigation Arrows */}
      <button 
        onClick={prevPost}
        className="fixed top-32 right-12 z-20 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      
      <button 
        onClick={nextPost}
        className="fixed bottom-36 right-12 z-20 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
      
      {/* Main Content - Vertical Scrollable Feed */}
      <main 
        ref={feedRef} 
        className="flex-1 overflow-y-auto snap-y snap-mandatory"
        onScroll={handleScroll}
      >
        {posts.map((post) => (
          <section key={post.id} className="snap-start min-h-screen relative">
            {/* Product Media */}
            <div className="w-full h-2/3 max-h-96 bg-purple-600 flex flex-col items-center justify-center relative">
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs flex items-center">
                <span className="mr-1">👁️</span>{post.content.views} views
              </div>
              
              {post.content.isLive && (
                <div className="absolute top-2 right-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  LIVE
                </div>
              )}
              
              <div className="text-4xl mb-2">{post.content.emoji1}</div>
              <div className="text-4xl mb-2">{post.content.emoji2}</div>
              <div className="text-4xl mb-2">{post.content.emoji3}</div>
              <div className="text-2xl font-bold mb-2">{post.content.title}</div>
              <div className="flex space-x-2">
                {post.content.ingredients.map((emoji, i) => (
                  <span key={i} className="text-xl">{emoji}</span>
                ))}
              </div>
              
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs">
                {post.content.duration}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="fixed right-3 top-1/3 flex flex-col items-center space-y-4 z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-xs mt-1 font-semibold">{post.engagement.likes}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-xs mt-1 font-semibold">{post.engagement.comments}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Share2 className="w-6 h-6" />
                </div>
                <span className="text-xs mt-1 font-semibold">{post.engagement.shares}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-yellow-400">$</span>
                </div>
                <span className="text-xs mt-1 font-semibold">{post.engagement.purchases}</span>
              </div>
            </div>
            
            {/* Creator Info */}
            <div className="px-4 py-2 flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-purple-400">
                <span className="text-2xl">{post.creator.avatar}</span>
              </div>
              <div className="ml-2 flex-1">
                <div className="flex items-center">
                  <h3 className="font-bold text-lg">{post.creator.name}</h3>
                  {post.creator.isTopseller && (
                    <div className="ml-2 bg-blue-500 text-white text-xs px-1 rounded">Top Seller</div>
                  )}
                </div>
                <div className="flex items-center text-xs">
                  {post.creator.verified && <span className="text-xs">Verified Creator</span>}
                  <span className="mx-1">•</span>
                  <span className="flex items-center"><span className="mr-1">⭐</span>{post.creator.rating} ({post.creator.reviews})</span>
                  <span className="mx-1">•</span>
                  <span>{post.creator.followers} followers</span>
                </div>
              </div>
              <button className="bg-pink-500 px-4 py-1 rounded-full font-bold text-sm">Follow</button>
            </div>
            
            {/* Product Description */}
            <div className="px-4 py-2">
              <p className="text-lg">
                {post.description}
              </p>
              <p className="text-blue-400 text-lg">
                {post.hashtags.join(" ")}
              </p>
            </div>
            
            {/* Product Info Box */}
            <div className="mx-4 bg-gray-800 rounded-xl p-3 mb-4">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center text-2xl">
                  {post.content.emoji1}
                </div>
                <div className="ml-3 flex-1">
                  <h2 className="text-xl font-bold">{post.product.name}</h2>
                  <div className="flex items-center text-green-400 text-sm">
                    <span>by {post.product.brand}</span>
                    {post.product.isBlackOwned && (
                      <>
                        <span className="mx-1">•</span>
                        <span>Black-Owned</span>
                      </>
                    )}
                    <span className="mx-1">•</span>
                    <span className="flex items-center"><span className="mr-1">⭐</span>{post.product.rating} ({post.product.reviews})</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-xl font-bold">${post.product.price}</div>
                    <div className="ml-2 text-xs line-through text-gray-400">${post.product.originalPrice}</div>
                    <div className="ml-2 bg-red-500 text-white text-xs px-1 rounded">{post.product.discount} OFF</div>
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    <span>{post.product.sold} sold</span>
                    {post.product.isTrending && (
                      <>
                        <span className="mx-1">•</span>
                        <span className="text-yellow-400">🔥 Trending</span>
                      </>
                    )}
                    <span className="mx-1">•</span>
                    <span>In stock ({post.product.stock})</span>
                  </div>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap flex items-center">
                  <span>Shop Now</span>
                  <span className="ml-1 text-xs bg-red-500 text-white px-1 rounded-full">5</span>
                </button>
              </div>
            </div>
          </section>
        ))}
      </main>
      
      {/* Bottom Navigation */}
      <footer className="bg-black fixed bottom-0 left-0 right-0 px-4 py-3 flex justify-between items-center border-t border-gray-800 z-30">
        <button className="flex flex-col items-center text-pink-500">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-xs">Market</span>
        </button>
        
        <button className="flex flex-col items-center text-gray-400">
          <TrendingUp className="w-5 h-5" />
          <span className="text-xs">Discover</span>
        </button>
        
        <div className="w-14 h-14 bg-pink-500 rounded-full -mt-6 flex items-center justify-center">
          <Camera className="w-8 h-8" />
        </div>
        
        <button className="flex flex-col items-center text-gray-400">
          <Award className="w-5 h-5" />
          <span className="text-xs">Earnings</span>
        </button>
        
        <button className="flex flex-col items-center text-gray-400">
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">👩🏽‍🦱</span>
          </div>
          <span className="text-xs">Profile</span>
        </button>
      </footer>
    </div>
  );
};

export default VerticalSPILLMarket;