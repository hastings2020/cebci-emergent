import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Target, Users, Trophy, Shield, Zap, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const AboutPage = memo(() => {
  const navigate = useNavigate();

  const coreValues = [
    { icon: Heart, title: 'Courage', description: 'Building confidence to face challenges on and off the court' },
    { icon: Users, title: 'Teamwork', description: 'Learning to work together towards common goals' },
    { icon: Shield, title: 'Respect', description: 'Honoring teammates, coaches, opponents, and the game' },
    { icon: Zap, title: 'Discipline', description: 'Developing focus, dedication, and commitment' },
    { icon: Award, title: 'Character', description: 'Growing as individuals with integrity and values' },
    { icon: Trophy, title: 'Perseverance', description: 'Never giving up, learning from every experience' }
  ];

  const stats = [
    { number: '520+', label: 'Active Players', icon: Users },
    { number: '46', label: 'Teams', icon: Trophy },
    { number: '50+', label: 'Dedicated Coaches', icon: Award },
    { number: '2023', label: 'Established', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img
                src="https://cebci.au/wp-content/uploads/2022/08/CE-Logo-White-Background.png"
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-gray-900">Cranbourne Eagles</span>
            </div>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Cranbourne Eagles
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Fostering camaraderie, developing skills, and building character since 2023
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <IconComponent className="w-10 h-10 mx-auto mb-3 text-orange-600" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-orange-600">Cranbourne Eagles Basketball Club Incorporated Association</strong> offers and fosters a camaraderie for its members, families, and teams of players, while catering to individual self-development for future generations of basketball players, ensuring and encouraging inclusivity for all demographics.
                </p>
                <p>
                  Established in the summer of <strong>2023</strong> by dedicated and passionate parents who are insistent on the cultivation of appropriate basketball techniques not offered by other domestic clubs.
                </p>
                <p>
                  Cranbourne Eagles Basketball Club is focused on facilitating unique basketball training to be delivered by talented, proficient, and accomplished volunteer coaches with decades of basketball expertise—from ball handling skills, strength, speed, and ball passing to improve agility and dexterity, rebounding, and overall precision of the game, among other things.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop&q=80"
                alt="Basketball Training"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">2023</div>
                <div className="text-sm">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our aim is to help teach, encourage, and offer the new generation of young players the opportunity to learn and thrive in the fundamental skills of basketball whilst instilling life-lessons and core values such as courage, character, teamwork, discipline, respect, perseverance, and sportsmanship in a positive, safe, and all-encompassing environment that is paramount to all involved.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide as many young athletes the scope and prospect to develop their versatility, incorporate new ones, personal growth, and enjoy the game of basketball. To attain and enhance their skills while playing for fun, and/or to become an intensely advanced player with a competitive drive and desire, as well as passion to become both mentally and physically prepared. With emphasis on becoming the best player they can be.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building tomorrow's champions through fundamental principles and life lessons
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                        <p className="text-sm text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Coaches</h3>
                <p className="text-gray-600">
                  Talented, proficient volunteer coaches with decades of basketball expertise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Environment</h3>
                <p className="text-gray-600">
                  Welcoming all demographics and skill levels in a positive, safe atmosphere
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic Development</h3>
                <p className="text-gray-600">
                  Focus on both basketball skills and life lessons for complete player growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Eagles Family?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Become part of a community that's dedicated to developing young athletes and building character
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-bold"
            >
              Register Now
            </Button>
            <Button
              onClick={() => navigate('/#contact')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg rounded-full font-bold"
            >
              Contact Us
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Cranbourne, Victoria</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span className="text-sm">info@cranbourne-eagles.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="text-sm">(555) 123-BALL</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
