import React from 'react';
import { Trophy, Calendar, Target, Users, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Homepage2 = () => {
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
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      contact: 'david@kidsbasketball.com'
    },
    {
      name: 'Jennifer Lee',
      position: 'Head of Youth Development', 
      bio: 'Sports psychology PhD, youth development specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      contact: 'jennifer@kidsbasketball.com'
    },
    {
      name: 'Marcus Thompson',
      position: 'Training Director',
      bio: 'Former professional player, certified trainer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      contact: 'marcus@kidsbasketball.com'
    }
  ];

  const coachesByAge = [
    {
      ageGroup: 'U8 & U10',
      teams: ['Little Dribblers', 'Mini Ballers'],
      headCoach: { name: 'Sarah Johnson', experience: '8 years', specialization: 'Youth Development' },
      assistants: [{ name: 'Mike Davis', role: 'Assistant Coach' }],
      manager: 'Emma Wilson'
    },
    {
      ageGroup: 'U12 & U14', 
      teams: ['Rising Stars', 'Court Warriors'],
      headCoach: { name: 'James Brown', experience: '12 years', specialization: 'Skills Development' },
      assistants: [{ name: 'Lisa Garcia', role: 'Assistant Coach' }],
      manager: 'Robert Taylor'
    },
    {
      ageGroup: 'U16 & U18',
      teams: ['Elite Squad', 'Championship Team'],
      headCoach: { name: 'Coach Anderson', experience: '15 years', specialization: 'Competitive Play' },
      assistants: [{ name: 'Coach Williams', role: 'Assistant Coach' }],
      manager: 'Diana Foster'
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

  return (
    <div>
      {/* Season Summary */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Season Summary</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color === 'text-orange-600' ? 'from-orange-100 to-orange-200' : 'from-blue-100 to-blue-200'} mb-4`}>
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}{stat.suffix || ''}
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet the dedicated leaders who make our basketball club a place where young athletes thrive and grow.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                  <Button size="sm" variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Corner */}
      <section id="training" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Coaches Corner</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our experienced coaching staff is dedicated to developing each player's potential through expert guidance and mentorship.
          </p>
          
          <div className="space-y-8">
            {coachesByAge.map((group, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{group.ageGroup} Teams</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.teams.map((team, teamIndex) => (
                        <Badge key={teamIndex} variant="outline" className="border-orange-200 text-orange-600">
                          {team}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-3">Head Coach</h4>
                      <p className="font-bold text-gray-900 mb-1">{group.headCoach.name}</p>
                      <p className="text-sm text-gray-600 mb-1">{group.headCoach.experience}</p>
                      <p className="text-sm text-orange-700">{group.headCoach.specialization}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">Assistant Staff</h4>
                      {group.assistants.map((assistant, assistantIndex) => (
                        <div key={assistantIndex} className="mb-2">
                          <p className="font-bold text-gray-900">{assistant.name}</p>
                          <p className="text-sm text-blue-700">{assistant.role}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Team Manager</h4>
                      <p className="font-bold text-gray-900">{group.manager}</p>
                      <p className="text-sm text-gray-600">Operations & Logistics</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Contact Coaching Team
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                      View Training Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section id="news" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Latest News & Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      article.category === 'Training' ? 'bg-orange-500' :
                      article.category === 'Games' ? 'bg-blue-500' : 'bg-green-500'
                    } text-white`}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <Button size="sm" variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-3 rounded-full">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Start your basketball journey with us. Choose your age group and begin developing skills, making friends, and having fun!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {['U8', 'U10', 'U12', 'U14', 'U16', 'U18'].map((age) => (
              <Button key={age} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 py-3">
                {age}
              </Button>
            ))}
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-white">
              <Target className="w-5 h-5 mr-2" />
              <span>Professional coaching for all skill levels</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <Users className="w-5 h-5 mr-2" />
              <span>Build lasting friendships and teamwork skills</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <Trophy className="w-5 h-5 mr-2" />
              <span>Competitive games and tournaments</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-4 rounded-full text-lg font-bold shadow-lg transform hover:scale-105 transition-all">
            Register Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cebci.au/wp-content/uploads/2022/08/CE-Logo-White-Background.png" 
                  alt="Cranbourne Eagles Logo" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-lg font-bold">Cranbourne Eagles Basketball Club</span>
              </div>
              <p className="text-gray-400 mb-4">
                Developing young athletes through basketball since 2010. Join our community of players, coaches, and families at Cranbourne Eagles.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2 hover:bg-orange-600">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-orange-600">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-orange-600">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#teams" className="hover:text-orange-400 transition-colors">Our Teams</a></li>
                <li><a href="#training" className="hover:text-orange-400 transition-colors">Training Programs</a></li>
                <li><a href="#news" className="hover:text-orange-400 transition-colors">News & Events</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                  <span>123 Basketball Ave, Sports City, SC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-orange-400" />
                  <span>(555) 123-BALL</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-orange-400" />
                  <span>info@cranbourne-eagles.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and events.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 px-4 py-2 rounded-r-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cranbourne Eagles Basketball Club. All rights reserved. | Built with ❤️ for young athletes</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage2;