import React, { memo } from 'react';
import { Trophy, Calendar, Target, Users, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Homepage2 = memo(() => {
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
      bio: '15 years coaching experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&q=80',
      contact: 'david@kidsbasketball.com'
    },
    {
      name: 'Jennifer Lee',
      position: 'Head of Youth Development',
      bio: 'Sports psychology PhD',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face&q=80',
      contact: 'jennifer@kidsbasketball.com'
    },
    {
      name: 'Marcus Thompson',
      position: 'Training Director',
      bio: 'Former professional player',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&q=80',
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
      image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=150&fit=crop&q=80',
      category: 'Training',
      date: '2 days ago'
    },
    {
      title: 'U16 Team Wins Regional Championship',
      excerpt: 'Our Elite Squad dominated the regional finals...',
      image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=150&fit=crop&q=80',
      category: 'Games',
      date: '1 week ago'
    },
    {
      title: 'New Equipment Donation from Local Business',
      excerpt: 'Thanks to SportsPro for donating new basketballs...',
      image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=150&fit=crop&q=80',
      category: 'Events',
      date: '2 weeks ago'
    }
  ];

  return (
    <div>
      {/* Season Summary - Compact */}
      <section className="py-6 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-4">Season Summary</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {seasonStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${stat.color === 'text-orange-600' ? 'from-orange-100 to-orange-200' : 'from-blue-100 to-blue-200'} mb-2`}>
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}{stat.suffix || ''}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team - Compact */}
      <section id="about" className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-2">Leadership Team</h2>
          <p className="text-center text-xs text-gray-600 mb-4 max-w-2xl mx-auto">
            Meet the dedicated leaders who make our basketball club a place where young athletes thrive.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {leadership.map((leader, index) => (
              <Card key={index} className="group overflow-hidden bg-white shadow hover:shadow-md transition-all">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-3">
                  <h3 className="text-sm font-bold text-gray-900 mb-0.5">{leader.name}</h3>
                  <p className="text-xs text-orange-600 font-semibold mb-2">{leader.position}</p>
                  <p className="text-xs text-gray-600 mb-2">{leader.bio}</p>
                  <Button size="sm" variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 text-xs py-1">
                    <Mail className="w-3 h-3 mr-1" />
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Corner - Compact */}
      <section id="training" className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-2">Coaches Corner</h2>
          <p className="text-center text-xs text-gray-600 mb-4 max-w-2xl mx-auto">
            Our experienced coaching staff is dedicated to developing each player's potential.
          </p>

          <div className="space-y-3">
            {coachesByAge.map((group, index) => (
              <Card key={index} className="bg-white shadow">
                <CardContent className="p-4">
                  <div className="mb-3">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{group.ageGroup} Teams</h3>
                    <div className="flex flex-wrap gap-1">
                      {group.teams.map((team, teamIndex) => (
                        <Badge key={teamIndex} variant="outline" className="border-orange-200 text-orange-600 text-xs">
                          {team}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-lg">
                      <h4 className="text-xs font-semibold text-orange-900 mb-2">Head Coach</h4>
                      <p className="text-sm font-bold text-gray-900 mb-0.5">{group.headCoach.name}</p>
                      <p className="text-xs text-gray-600 mb-0.5">{group.headCoach.experience}</p>
                      <p className="text-xs text-orange-700">{group.headCoach.specialization}</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
                      <h4 className="text-xs font-semibold text-blue-900 mb-2">Assistant Staff</h4>
                      {group.assistants.map((assistant, assistantIndex) => (
                        <div key={assistantIndex} className="mb-1">
                          <p className="text-sm font-bold text-gray-900">{assistant.name}</p>
                          <p className="text-xs text-blue-700">{assistant.role}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg">
                      <h4 className="text-xs font-semibold text-gray-900 mb-2">Team Manager</h4>
                      <p className="text-sm font-bold text-gray-900">{group.manager}</p>
                      <p className="text-xs text-gray-600">Operations & Logistics</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs">
                      Contact Team
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 text-xs">
                      View Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates - Compact */}
      <section id="news" className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-4">Latest News & Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {news.map((article, index) => (
              <Card key={index} className="group overflow-hidden bg-white shadow hover:shadow-md transition-all">
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className={`${
                      article.category === 'Training' ? 'bg-orange-500' :
                      article.category === 'Games' ? 'bg-blue-500' : 'bg-green-500'
                    } text-white text-xs`}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-gray-500 mb-1">{article.date}</p>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">{article.title}</h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{article.excerpt}</p>
                  <Button size="sm" variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 text-xs py-1">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-2 text-sm rounded-full">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Call-to-Action - Compact */}
      <section className="py-8 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Join Our Team?</h2>
          <p className="text-sm text-orange-100 mb-4 max-w-2xl mx-auto">
            Start your basketball journey with us. Choose your age group and begin developing skills!
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
            {['U8', 'U10', 'U12', 'U14', 'U16', 'U18'].map((age) => (
              <Button key={age} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 py-2 text-sm">
                {age}
              </Button>
            ))}
          </div>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center justify-center text-white">
              <Target className="w-4 h-4 mr-2" />
              <span>Professional coaching</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <Users className="w-4 h-4 mr-2" />
              <span>Build teamwork skills</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <Trophy className="w-4 h-4 mr-2" />
              <span>Competitive games</span>
            </div>
          </div>

          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-sm rounded-full font-bold shadow-lg">
            Register Now
          </Button>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer id="contact" className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="https://cebci.au/wp-content/uploads/2022/08/CE-Logo-White-Background.png"
                  alt="Logo"
                  className="w-6 h-6 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="text-sm font-bold">Cranbourne Eagles</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Developing young athletes through basketball since 2010.
              </p>
              <div className="flex space-x-2">
                <Button size="sm" variant="ghost" className="p-1 hover:bg-orange-600">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-1 hover:bg-orange-600">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-1 hover:bg-orange-600">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-xs text-gray-400">
                <li><a href="#teams" className="hover:text-orange-400">Our Teams</a></li>
                <li><a href="#training" className="hover:text-orange-400">Training</a></li>
                <li><a href="#news" className="hover:text-orange-400">News</a></li>
                <li><a href="#about" className="hover:text-orange-400">About</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Contact</h3>
              <div className="space-y-2 text-xs text-gray-400">
                <p>123 Basketball Ave</p>
                <p>(555) 123-BALL</p>
                <p>info@cranbourne-eagles.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Newsletter</h3>
              <p className="text-xs text-gray-400 mb-2">Stay updated with our latest news.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500 text-xs"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-blue-600 px-3 py-1 rounded-r-lg text-xs">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-4 pt-4 text-center text-xs text-gray-400">
            <p>&copy; 2024 Cranbourne Eagles Basketball Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
});

Homepage2.displayName = 'Homepage2';

export default Homepage2;
