import React, { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const TeamPage = memo(() => {
  const { teamName } = useParams();
  const navigate = useNavigate();

  // Team data with coach and player information
  const teamsData = {
    'Kareem': {
      age: 'U8',
      gender: 'Boys',
      grade: 'Saturday U8 Boys Grey',
      coach: {
        name: 'Sarah Johnson',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&q=80',
        email: 'sarah.johnson@cebci.com',
        phone: '0412 345 678'
      },
      assistant: 'Mike Davis',
      manager: 'Emma Wilson',
      players: [
        { number: 5, name: 'Tommy Chen', photo: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 7, name: 'Lucas Brown', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 10, name: 'James Wilson', photo: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 12, name: 'Oliver Taylor', photo: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 15, name: 'Noah Martinez', photo: 'https://images.unsplash.com/photo-1474447976065-67d23accb1e3?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 21, name: 'Ethan Anderson', photo: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 23, name: 'Liam Garcia', photo: 'https://images.unsplash.com/photo-1625504615927-c14f4f309b63?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 32, name: 'Mason Rodriguez', photo: 'https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 42, name: 'William Lee', photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 45, name: 'Benjamin Kim', photo: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 50, name: 'Henry Zhang', photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 55, name: 'Alexander White', photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop&crop=face&q=80' }
      ]
    },
    'Jewel': {
      age: 'U8',
      gender: 'Girls',
      grade: 'Saturday U8 Girls Blue',
      coach: {
        name: 'Emily Chen',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&q=80',
        email: 'emily.chen@cebci.com',
        phone: '0423 456 789'
      },
      assistant: 'Lisa Taylor',
      manager: 'Anna Garcia',
      players: [
        { number: 3, name: 'Emma Davis', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 8, name: 'Sophia Martinez', photo: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 11, name: 'Olivia Johnson', photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 14, name: 'Ava Brown', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 16, name: 'Mia Wilson', photo: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 20, name: 'Isabella Garcia', photo: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 24, name: 'Charlotte Lee', photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 27, name: 'Amelia Taylor', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 30, name: 'Harper Anderson', photo: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 33, name: 'Ella White', photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=face&q=80' }
      ]
    },
    'Bryant': {
      age: 'U10',
      gender: 'Boys',
      grade: 'Saturday U10 Boys Gold',
      coach: {
        name: 'Mike Davis',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80',
        email: 'mike.davis@cebci.com',
        phone: '0434 567 890'
      },
      assistant: 'Tom Anderson',
      manager: 'Sarah Kim',
      players: [
        { number: 4, name: 'Ryan Martinez', photo: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 6, name: 'Tyler Johnson', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 9, name: 'Jackson Brown', photo: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 13, name: 'Dylan Wilson', photo: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 17, name: 'Carter Davis', photo: 'https://images.unsplash.com/photo-1474447976065-67d23accb1e3?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 19, name: 'Luke Garcia', photo: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 22, name: 'Connor Lee', photo: 'https://images.unsplash.com/photo-1625504615927-c14f4f309b63?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 25, name: 'Nathan Taylor', photo: 'https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 28, name: 'Isaac Anderson', photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 31, name: 'Caleb White', photo: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 34, name: 'Joshua Kim', photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 36, name: 'Andrew Zhang', photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 40, name: 'Daniel Rodriguez', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&q=80' },
        { number: 44, name: 'Matthew Harris', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face&q=80' }
      ]
    },
    // Add more teams with similar structure...
    // For brevity, I'll add a few more key teams and use a default for others
  };

  // Default team data for teams not explicitly defined
  const getDefaultTeam = (name, age, gender) => ({
    age: age,
    gender: gender,
    grade: `Saturday ${age} ${gender} Division`,
    coach: {
      name: `Coach ${name}`,
      photo: gender === 'Girls'
        ? 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&q=80'
        : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80',
      email: `coach.${name.toLowerCase()}@cebci.com`,
      phone: '0400 000 000'
    },
    assistant: 'Assistant Coach',
    manager: 'Team Manager',
    players: Array.from({ length: 12 }, (_, i) => ({
      number: i + 1,
      name: `Player ${i + 1}`,
      photo: gender === 'Girls'
        ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face&q=80'
        : 'https://images.unsplash.com/photo-1546554137-f86b9593a222?w=300&h=300&fit=crop&crop=face&q=80'
    }))
  });

  // Get team data or use default
  const team = teamsData[teamName] || getDefaultTeam(teamName, 'U10', 'Mixed');

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

      {/* Team Header */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{teamName}</h1>
              <Badge className="bg-white text-orange-600 text-lg px-4 py-1">
                {team.age} {team.gender}
              </Badge>
              <p className="text-white/90 mt-2">{team.grade}</p>
            </div>
            <Users className="w-20 h-20 text-white/30" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Coaching Staff */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coaching Staff</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Head Coach */}
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="text-center">
                  <img
                    src={team.coach.photo}
                    alt={team.coach.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-orange-500"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{team.coach.name}</h3>
                  <p className="text-sm text-orange-600 font-semibold mb-3">Head Coach</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{team.coach.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{team.coach.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assistant Coach */}
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&q=80"
                    alt={team.assistant}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{team.assistant}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">Assistant Coach</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>assistant@cebci.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Manager */}
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face&q=80"
                    alt={team.manager}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{team.manager}</h3>
                  <p className="text-sm text-green-600 font-semibold mb-3">Team Manager</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>manager@cebci.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Roster */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Roster</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {team.players.map((player) => (
              <Card key={player.number} className="bg-white shadow hover:shadow-lg transition-all group">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="relative mb-3">
                      <img
                        src={player.photo}
                        alt={player.name}
                        className="w-full aspect-square rounded-lg object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {player.number}
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">{player.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});

TeamPage.displayName = 'TeamPage';

export default TeamPage;
