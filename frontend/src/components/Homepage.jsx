import React, { useState, useEffect, memo } from 'react';
import { ChevronLeft, ChevronRight, Clock, Trophy, Users, Target, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Homepage = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImages = [
    {
      url: 'https://cebci.au/wp-content/uploads/2023/02/excom-scaled.jpeg',
      title: 'Young Champions in Action',
      subtitle: 'Building Skills & Friendship'
    },
    {
      url: 'https://cebci.au/wp-content/uploads/2023/02/samp2-scaled.jpg',
      title: 'Team Spirit',
      subtitle: 'Every Game is a Learning Experience'
    },
    {
      url: 'https://cebci.au/wp-content/uploads/2023/02/samp1-scaled.jpg',
      title: 'Future Stars',
      subtitle: 'Join Our Growing Family'
    }
  ];

  const liveUpdates = [
    { type: 'upcoming', title: 'U12 vs Eagles', time: '2 days, 14 hours', location: 'Home Court', icon: Clock },
    { type: 'score', title: 'U16 Won!', score: '68-54', opponent: 'Thunder Bolts', icon: Trophy },
    { type: 'scorer', title: 'Top Scorer', player: 'Jake Thompson', points: '24 pts', icon: Star },
    { type: 'upcoming', title: 'U10 vs Lions', time: '5 days, 3 hours', location: 'Away', icon: Clock },
    { type: 'score', title: 'U14 Victory', score: '42-38', opponent: 'City Sharks', icon: Trophy }
  ];

  const teams = [
    { age: 'U8', name: 'Little Dribblers', coach: 'Sarah Johnson', players: 12, image: 'https://images.unsplash.com/photo-1521830101529-057b1dfd9784?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Mini Ballers', coach: 'Mike Davis', players: 15, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Rising Stars', coach: 'Emma Wilson', players: 18, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Court Warriors', coach: 'James Brown', players: 16, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Elite Squad', coach: 'Lisa Garcia', players: 14, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U18', name: 'Championship Team', coach: 'Robert Taylor', players: 12, image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469?w=300&h=200&fit=crop&q=80' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Compact */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-2">
              <img
                src="https://cebci.au/wp-content/uploads/2022/08/CE-Logo-White-Background.png"
                alt="Logo"
                className="w-8 h-8 rounded-full object-cover"
                loading="lazy"
              />
              <span className="text-sm md:text-base font-bold text-gray-900">Cranbourne Eagles</span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#teams" className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">Teams</a>
              <a href="#training" className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">Training</a>
              <a href="#news" className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">News</a>
              <a href="#about" className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">About</a>
              <a href="#contact" className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">Contact</a>
              <Button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-1 text-sm rounded-full">
                Join
              </Button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`bg-gray-800 block transition-all duration-300 h-0.5 w-5 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-800 block transition-all duration-300 h-0.5 w-5 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-800 block transition-all duration-300 h-0.5 w-5 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-3 py-2 space-y-1">
              <a href="#teams" className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500">Teams</a>
              <a href="#training" className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500">Training</a>
              <a href="#news" className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500">News</a>
              <a href="#about" className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500">About</a>
              <a href="#contact" className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500">Contact</a>
              <Button className="w-full mt-1 bg-gradient-to-r from-orange-500 to-blue-600 text-white text-sm rounded-full">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Compact */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden mt-12">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="max-w-xl">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Welcome to<br />
                <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Cranbourne Eagles Basketball Club
                </span>
              </h1>
              <p className="text-sm md:text-lg text-gray-200 mb-4">
                {heroImages[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm">
                  Join Our Team
                </Button>
                <Button size="sm" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                  View Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Live Updates Section - Compact */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-4">Live Updates</h2>
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
            {liveUpdates.map((update, index) => {
              const IconComponent = update.icon;
              return (
                <Card key={index} className="min-w-60 bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className={`w-5 h-5 ${update.type === 'upcoming' ? 'text-blue-600' : update.type === 'score' ? 'text-orange-600' : 'text-yellow-600'}`} />
                      <Badge variant={update.type === 'upcoming' ? 'default' : update.type === 'score' ? 'destructive' : 'secondary'} className="text-xs">
                        {update.type === 'upcoming' ? 'Upcoming' : update.type === 'score' ? 'Result' : 'Player'}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{update.title}</h3>
                    {update.time && <p className="text-xs text-gray-600 mb-0.5">In {update.time}</p>}
                    {update.score && <p className="text-lg font-bold text-orange-600 mb-0.5">{update.score}</p>}
                    {update.points && <p className="text-sm font-semibold text-blue-600">{update.points}</p>}
                    {update.opponent && <p className="text-xs text-gray-600">vs {update.opponent}</p>}
                    {update.location && <p className="text-xs text-gray-600">{update.location}</p>}
                    {update.player && <p className="text-sm text-gray-900 font-medium">{update.player}</p>}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Highlights Grid - Compact */}
      <section id="teams" className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-4">Our Teams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {teams.map((team, index) => (
              <Card key={index} className="group overflow-hidden bg-white shadow hover:shadow-md transition-all">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-blue-600 text-white text-xs">
                      {team.age}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{team.name}</h3>
                  <div className="space-y-1 text-gray-600 text-xs">
                    <p className="flex items-center">
                      <Users className="w-3 h-3 mr-1 text-orange-500" />
                      Coach: {team.coach}
                    </p>
                    <p className="flex items-center">
                      <Target className="w-3 h-3 mr-1 text-blue-500" />
                      Players: {team.players}
                    </p>
                  </div>
                  <Button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white text-xs py-1">
                    View Team
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

Homepage.displayName = 'Homepage';

export default Homepage;
