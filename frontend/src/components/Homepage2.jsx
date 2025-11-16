import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Target, Users, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { newsArticles } from '../data/newsData';

const Homepage2 = memo(() => {
  const navigate = useNavigate();
  const [activeCoachesTab, setActiveCoachesTab] = useState('U8');
  const [activeTeamTab, setActiveTeamTab] = useState({
    U8: 'Kareem',
    U10: 'Bryant',
    U12: 'Drexler',
    U14: 'Barkley',
    U16: 'Garnett',
    U18: 'James'
  });

  // Scroll to teams section
  const scrollToTeams = () => {
    const teamsSection = document.getElementById('teams');
    if (teamsSection) {
      teamsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      position: 'Vice President',
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

  const coachesByAge = {
    U8: {
      teams: [
        { name: 'Kareem', gender: 'Boys', grade: 'Saturday U8 Boys Grey', coach: 'Sarah Johnson', assistant: 'Mike Davis', manager: 'Emma Wilson' },
        { name: 'Jewel', gender: 'Girls', grade: 'Saturday U8 Girls Blue', coach: 'Emily Chen', assistant: 'Lisa Taylor', manager: 'Anna Garcia' }
      ]
    },
    U10: {
      teams: [
        { name: 'Bryant', gender: 'Boys', grade: 'Thursday U10 Mixed A Grade', coach: 'Mike Davis', assistant: 'Tom Anderson', manager: 'Sarah Kim' },
        { name: 'Curry', gender: 'Boys', grade: 'Saturday U10 Boys A Grade', coach: 'James Wilson', assistant: 'Chris Martin', manager: 'Jennifer Lopez' },
        { name: 'Doncic', gender: 'Boys', grade: 'Saturday U10 Boys A Grade', coach: 'Robert Lee', assistant: 'Steve Brown', manager: 'Michelle Scott' },
        { name: 'Greer', gender: 'Boys', grade: 'Saturday U10 Boys D2 Grade', coach: 'Tom Anderson', assistant: 'Dan White', manager: 'Rachel Green' },
        { name: 'Irving', gender: 'Boys', grade: 'Saturday U10 Boys C2 Grade', coach: 'Chris Martin', assistant: 'Paul Martinez', manager: 'Amy Roberts' },
        { name: 'Magic', gender: 'Boys', grade: 'Saturday U10 Boys B Grade', coach: 'Steve Brown', assistant: 'Ryan Clark', manager: 'Laura Martin' },
        { name: 'Mini Hustlers', gender: 'Boys', grade: 'Saturday U10 Boys C3 Grade', coach: 'Dan White', assistant: 'Josh Moore', manager: 'Kate Wilson' },
        { name: 'Gigi', gender: 'Girls', grade: 'Saturday U10 Girls A Grade', coach: 'Lisa Taylor', assistant: 'Sarah Kim', manager: 'Diana Foster' },
        { name: 'Mambacita', gender: 'Girls', grade: 'Saturday U10 Girls A Grade', coach: 'Anna Garcia', assistant: 'Jennifer Lopez', manager: 'Jessica Brown' },
        { name: 'Mills', gender: 'Mixed', grade: 'Thursday U10 Mixed C1 Grade', coach: 'Paul Martinez', assistant: 'Ryan Clark', manager: 'Maya Singh' }
      ]
    },
    U12: {
      teams: [
        { name: 'Drexler', gender: 'Boys', grade: 'Saturday U12 Boys C2 Grade', coach: 'Emma Wilson', assistant: 'Mark Thompson', manager: 'Amanda White' },
        { name: 'Kuminga', gender: 'Boys', grade: 'Saturday U12 Boys C3 Grade', coach: 'Mark Thompson', assistant: 'Kevin Harris', manager: 'Nicole Davis' },
        { name: 'Nowitzki', gender: 'Boys', grade: 'Saturday U12 Boys D2 Grade', coach: 'Kevin Harris', assistant: 'Ryan Clark', manager: 'Sarah Johnson' },
        { name: 'Pippen', gender: 'Boys', grade: 'Saturday U12 Boys A Grade', coach: 'Ryan Clark', assistant: 'Josh Moore', manager: 'Emily Chen' },
        { name: 'Warriors', gender: 'Boys', grade: 'Saturday U12 Boys E1 Grade', coach: 'Josh Moore', assistant: 'Tom Anderson', manager: 'Lisa Taylor' },
        { name: 'Crystal', gender: 'Girls', grade: 'Saturday U12 Girls C3 Grade', coach: 'Sarah Kim', assistant: 'Jennifer Lopez', manager: 'Anna Garcia' },
        { name: 'Meyers', gender: 'Girls', grade: 'Saturday U12 Girls B Grade', coach: 'Jennifer Lopez', assistant: 'Michelle Scott', manager: 'Diana Foster' },
        { name: 'Pettit', gender: 'Girls', grade: 'Saturday U12 Girls B Grade', coach: 'Michelle Scott', assistant: 'Rachel Green', manager: 'Jessica Brown' }
      ]
    },
    U14: {
      teams: [
        { name: 'Barkley', gender: 'Boys', grade: 'Saturday U14 Boys C1 Grade', coach: 'James Brown', assistant: 'Alex Turner', manager: 'Kate Wilson' },
        { name: 'Durant', gender: 'Boys', grade: 'Saturday U14 Boys C3 Grade', coach: 'Alex Turner', assistant: 'David Miller', manager: 'Maya Singh' },
        { name: 'Harper', gender: 'Boys', grade: 'Saturday U14 Boys C1 Grade', coach: 'David Miller', assistant: 'Brian Wilson', manager: 'Amanda White' },
        { name: 'Havlicek', gender: 'Boys', grade: 'Saturday U14 Boys C2 Grade', coach: 'Brian Wilson', assistant: 'Eric Davis', manager: 'Nicole Davis' },
        { name: 'Rodman', gender: 'Boys', grade: 'Saturday U14 Boys C1 Grade', coach: 'Eric Davis', assistant: 'Nick Johnson', manager: 'Sarah Johnson' },
        { name: 'Sharman', gender: 'Boys', grade: 'Saturday U14 Boys D2 Grade', coach: 'Nick Johnson', assistant: 'James Brown', manager: 'Emily Chen' },
        { name: 'A\'ja', gender: 'Girls', grade: 'Saturday U14 Girls B Grade', coach: 'Rachel Green', assistant: 'Amy Roberts', manager: 'Lisa Taylor' },
        { name: 'Lobo', gender: 'Girls', grade: 'Saturday U14 Girls C2 Grade', coach: 'Amy Roberts', assistant: 'Laura Martin', manager: 'Anna Garcia' },
        { name: 'Swoopes', gender: 'Girls', grade: 'Saturday U14 Girls C1 Grade', coach: 'Laura Martin', assistant: 'Rachel Green', manager: 'Diana Foster' }
      ]
    },
    U16: {
      teams: [
        { name: 'Garnett', gender: 'Boys', grade: 'Saturday U16 Boys D1 Grade', coach: 'Michael Stevens', assistant: 'Peter Jackson', manager: 'Jessica Brown' },
        { name: 'Luol', gender: 'Boys', grade: 'Saturday U16 Boys C2 Grade', coach: 'Peter Jackson', assistant: 'Tony Allen', manager: 'Kate Wilson' },
        { name: 'Payton', gender: 'Boys', grade: 'TBD', coach: 'Tony Allen', assistant: 'Greg Thomas', manager: 'Maya Singh' },
        { name: 'Shulga', gender: 'Boys', grade: 'Saturday U16 Boys E2 Grade', coach: 'Greg Thomas', assistant: 'John Walker', manager: 'Amanda White' },
        { name: 'Stockton', gender: 'Boys', grade: 'Saturday U16 Boys D3 Grade', coach: 'John Walker', assistant: 'Chris Evans', manager: 'Nicole Davis' },
        { name: 'Tatum', gender: 'Boys', grade: 'Saturday U16 Boys C2 Grade', coach: 'Chris Evans', assistant: 'Lisa Garcia', manager: 'Sarah Johnson' },
        { name: 'Wade', gender: 'Boys', grade: 'Saturday U16 Boys B Grade', coach: 'Lisa Garcia', assistant: 'Sam Cooper', manager: 'Emily Chen' },
        { name: 'Webber', gender: 'Boys', grade: 'Saturday U16 Boys E1 Grade', coach: 'Sam Cooper', assistant: 'Michael Stevens', manager: 'Lisa Taylor' },
        { name: 'Clark', gender: 'Girls', grade: 'Saturday U16 Girls C1 Grade', coach: 'Kate Wilson', assistant: 'Diana Foster', manager: 'Anna Garcia' },
        { name: 'Cunningham', gender: 'Girls', grade: 'Saturday U16 Girls A Grade', coach: 'Diana Foster', assistant: 'Jessica Brown', manager: 'Diana Foster' },
        { name: 'Diamond', gender: 'Girls', grade: 'Saturday U16 Girls C2 Grade', coach: 'Jessica Brown', assistant: 'Maya Singh', manager: 'Jessica Brown' },
        { name: 'Jashanti', gender: 'Girls', grade: 'TBD', coach: 'Maya Singh', assistant: 'Kate Wilson', manager: 'Kate Wilson' }
      ]
    },
    U18: {
      teams: [
        { name: 'James', gender: 'Boys', grade: 'Sunday U18 Boys A Grade', coach: 'Robert Taylor', assistant: 'Kevin Adams', manager: 'Amanda White' },
        { name: 'Mutombo', gender: 'Boys', grade: 'Sunday U18 Boys C1 Grade', coach: 'Kevin Adams', assistant: 'Tom Hughes', manager: 'Nicole Davis' },
        { name: 'Parker', gender: 'Boys', grade: 'TBD', coach: 'Tom Hughes', assistant: 'Ryan Mitchell', manager: 'Sarah Johnson' },
        { name: 'Webb', gender: 'Boys', grade: 'Sunday U18 Boys C3 Grade', coach: 'Ryan Mitchell', assistant: 'Robert Taylor', manager: 'Emily Chen' },
        { name: 'Delle Donne', gender: 'Girls', grade: 'Sunday U19 Girls A Grade', coach: 'Amanda White', assistant: 'Nicole Davis', manager: 'Lisa Taylor' },
        { name: 'Fox', gender: 'Girls', grade: 'Sunday U19 Girls A Grade', coach: 'Nicole Davis', assistant: 'Amanda White', manager: 'Anna Garcia' }
      ]
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
  };

  const handleTeamTabChange = (ageGroup, teamName) => {
    setActiveTeamTab(prev => ({
      ...prev,
      [ageGroup]: teamName
    }));
  };

  return (
    <div>
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
                  <p className="text-xs text-amber-600 font-semibold mb-2">{leader.position}</p>
                  <p className="text-xs text-gray-600 mb-2">{leader.bio}</p>
                  <Button size="sm" variant="outline" className="w-full border-amber-200 text-amber-600 hover:bg-amber-50 text-xs py-1">
                    <Mail className="w-3 h-3 mr-1" />
                    Contact
                  </Button>
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
            {newsArticles.slice(0, 3).map((article, index) => (
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
                      article.category === 'Training' ? 'bg-amber-500' :
                      article.category === 'Games' ? 'bg-green-500' : 'bg-green-500'
                    } text-white text-xs`}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-gray-500 mb-1">{formatDate(article.date)}</p>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">{article.title}</h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{article.excerpt}</p>
                  <Button
                    onClick={() => navigate(`/news/${article.slug}`)}
                    size="sm"
                    variant="outline"
                    className="w-full border-amber-200 text-amber-600 hover:bg-amber-50 text-xs py-1"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button
              onClick={() => navigate('/news')}
              className="bg-gradient-to-r from-amber-500 to-green-600 text-white px-6 py-2 text-sm rounded-full"
            >
              View All News
            </Button>
          </div>
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
                <Button size="sm" variant="ghost" className="p-1 hover:bg-amber-600">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-1 hover:bg-amber-600">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-1 hover:bg-amber-600">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-xs text-gray-400">
                <li><button onClick={scrollToTeams} className="hover:text-amber-400 text-left">Our Teams</button></li>
                <li><button onClick={() => navigate('/training')} className="hover:text-amber-400 text-left">Training</button></li>
                <li><button onClick={() => navigate('/news')} className="hover:text-amber-400 text-left">News</button></li>
                <li><button onClick={() => navigate('/about')} className="hover:text-amber-400 text-left">About</button></li>
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
                  className="flex-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-amber-500 text-xs"
                />
                <Button className="bg-gradient-to-r from-amber-500 to-green-600 px-3 py-1 rounded-r-lg text-xs">
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
