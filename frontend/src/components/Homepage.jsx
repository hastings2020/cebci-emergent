import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Trophy, Users, Target, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImages = [
    {
      url: 'https://cebci.au/wp-content/uploads/2023/02/excom-scaled.jpeg',
      title: 'Young Champions in Action',
      subtitle: 'Building Skills, Character & Friendship'
    },
    {
      url: 'https://cebci.au/wp-content/uploads/2023/02/samp2-scaled.jpg', 
      title: 'Team Spirit & Excellence',
      subtitle: 'Every Game is a Learning Experience'
    },
    {
      url: 'https://cebci.au/wp-content/uploads/2023/02/samp1-scaled.jpg',
      title: 'Future Basketball Stars',
      subtitle: 'Join Our Growing Family'
    }
  ];

  const liveUpdates = [
    {
      type: 'upcoming',
      title: 'U12 vs Eagles',
      time: '2 days, 14 hours',
      location: 'Home Court',
      icon: Clock
    },
    {
      type: 'score',
      title: 'U16 Won!',
      score: '68-54',
      opponent: 'Thunder Bolts',
      icon: Trophy
    },
    {
      type: 'scorer',
      title: 'Top Scorer',
      player: 'Jake Thompson',
      points: '24 pts',
      icon: Star
    },
    {
      type: 'upcoming',
      title: 'U10 vs Lions',
      time: '5 days, 3 hours',
      location: 'Away',
      icon: Clock
    },
    {
      type: 'score',
      title: 'U14 Victory',
      score: '42-38',
      opponent: 'City Sharks',
      icon: Trophy
    }
  ];

  const teams = [
    { age: 'U8', name: 'Little Dribblers', coach: 'Sarah Johnson', players: 12, image: 'https://images.unsplash.com/photo-1521830101529-057b1dfd9784' },
    { age: 'U10', name: 'Mini Ballers', coach: 'Mike Davis', players: 15, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133' },
    { age: 'U12', name: 'Rising Stars', coach: 'Emma Wilson', players: 18, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160' },
    { age: 'U14', name: 'Court Warriors', coach: 'James Brown', players: 16, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055' },
    { age: 'U16', name: 'Elite Squad', coach: 'Lisa Garcia', players: 14, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40' },
    { age: 'U18', name: 'Championship Team', coach: 'Robert Taylor', players: 12, image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469' }
  ];

  const seasonStats = [
    { label: 'Total Players', value: 87, icon: Users, color: 'text-orange-600' },
    { label: 'Games Played', value: 156, icon: Calendar, color: 'text-blue-600' },
    { label: 'Win Rate', value: 78, icon: Trophy, color: 'text-orange-600', suffix: '%' },
    { label: 'Points Scored', value: 8924, icon: Target, color: 'text-blue-600' }
  ];

  const leadership = [
    {
      name: 'David Martinez',
      position: 'Club President',
      bio: '15 years coaching experience, former college player',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Jennifer Lee',
      position: 'Head of Youth Development', 
      bio: 'Sports psychology PhD, youth development specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Marcus Thompson',
      position: 'Training Director',
      bio: 'Former professional player, certified trainer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const news = [
    {
      title: 'Summer Training Camp Registration Open',
      excerpt: 'Join us for intensive skills development this summer...',
      image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=400&h=200&fit=crop',
      category: 'Training',
      date: '2 days ago'
    },
    {
      title: 'U16 Team Wins Regional Championship',
      excerpt: 'Our Elite Squad dominated the regional finals...',
      image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=400&h=200&fit=crop',
      category: 'Games',
      date: '1 week ago'
    },
    {
      title: 'New Equipment Donation from Local Business',
      excerpt: 'Thanks to SportsPro for donating new basketballs...',
      image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=400&h=200&fit=crop',
      category: 'Events',
      date: '2 weeks ago'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cebci.au/wp-content/uploads/2022/08/CE-Logo-White-Background.png" 
                alt="Cranbourne Eagles Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-gray-900">Cranbourne Eagles Basketball Club</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-lg transition-colors">
                  Teams
                </button>
              </div>
              <a href="#training" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-lg transition-colors">Training</a>
              <a href="#news" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-lg transition-colors">News</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-lg transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-lg transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-6 py-2 rounded-full">
                Join Now
              </Button>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#teams" className="block px-3 py-2 text-gray-700 hover:text-orange-500 rounded-lg transition-colors">Teams</a>
              <a href="#training" className="block px-3 py-2 text-gray-700 hover:text-orange-500 rounded-lg transition-colors">Training</a>
              <a href="#news" className="block px-3 py-2 text-gray-700 hover:text-orange-500 rounded-lg transition-colors">News</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-500 rounded-lg transition-colors">About Us</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500 rounded-lg transition-colors">Contact</a>
              <Button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white rounded-full">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden mt-16">
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
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
                Welcome to<br />
                <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Cranbourne Eagles Basketball Club
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
                {heroImages[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
                  Join Our Team
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm">
                  View Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Live Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Live Updates</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {liveUpdates.map((update, index) => {
              const IconComponent = update.icon;
              return (
                <Card key={index} className="min-w-80 bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className={`w-8 h-8 ${update.type === 'upcoming' ? 'text-blue-600' : update.type === 'score' ? 'text-orange-600' : 'text-yellow-600'}`} />
                      <Badge variant={update.type === 'upcoming' ? 'default' : update.type === 'score' ? 'destructive' : 'secondary'}>
                        {update.type === 'upcoming' ? 'Upcoming' : update.type === 'score' ? 'Result' : 'Player'}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{update.title}</h3>
                    {update.time && (
                      <p className="text-gray-600 mb-1">In {update.time}</p>
                    )}
                    {update.score && (
                      <p className="text-2xl font-bold text-orange-600 mb-1">{update.score}</p>
                    )}
                    {update.points && (
                      <p className="text-lg font-semibold text-blue-600">{update.points}</p>
                    )}
                    {update.opponent && (
                      <p className="text-gray-600">vs {update.opponent}</p>
                    )}
                    {update.location && (
                      <p className="text-gray-600">{update.location}</p>
                    )}
                    {update.player && (
                      <p className="text-gray-900 font-medium">{update.player}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Highlights Grid */}
      <section id="teams" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Teams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <Card key={index} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={team.image} 
                    alt={team.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                      {team.age}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{team.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-orange-500" />
                      Coach: {team.coach}
                    </p>
                    <p className="flex items-center">
                      <Target className="w-4 h-4 mr-2 text-blue-500" />
                      Players: {team.players}
                    </p>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white">
                    View Team Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;