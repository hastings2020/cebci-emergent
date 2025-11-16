import React, { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Users, Mail, Phone, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { getTeamByName } from '../data/teamsData';
import Navigation from './Navigation';

const TeamPage = memo(() => {
  const { teamName } = useParams();
  const navigate = useNavigate();

  // Get team data from centralized teamsData
  const teamData = getTeamByName(teamName);

  // Generate placeholder players for display
  const generatePlayers = (count, gender) => {
    return Array.from({ length: count }, (_, i) => ({
      number: i + 1,
      name: `Player ${i + 1}`,
      photo: gender === 'Girls'
        ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face&q=80'
        : 'https://images.unsplash.com/photo-1546554137-f86b9593a222?w=300&h=300&fit=crop&crop=face&q=80'
    }));
  };

  // If team not found, show error
  if (!teamData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Team Not Found</h1>
          <p className="text-gray-600 mb-6">The team "{teamName}" could not be found.</p>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-amber-500 to-green-600">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // Use team data with generated players
  const team = {
    ...teamData,
    players: generatePlayers(teamData.playerCount, teamData.gender)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Team Header */}
      <div className="bg-gradient-to-r from-amber-500 to-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{teamName}</h1>
              <Badge className="bg-white text-amber-600 text-lg px-4 py-1">
                {team.age} {team.gender}
              </Badge>
              <p className="text-white/90 mt-2">{team.grade}</p>
            </div>
            <Users className="w-20 h-20 text-white/30" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Training & Match Schedule */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Training Schedule */}
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Training</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Day & Time</p>
                      <p className="text-gray-900 font-semibold">{team.training.day}s, {team.training.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Location</p>
                      <p className="text-gray-900 font-semibold">{team.training.location}</p>
                      <p className="text-sm text-gray-600">{team.training.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Schedule */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Match Day</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Day & Time</p>
                      <p className="text-gray-900 font-semibold">{team.matchDay.day}s, {team.matchDay.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Venue</p>
                      <p className="text-gray-900 font-semibold">{team.matchDay.venue}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

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
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-amber-500"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{team.coach.name}</h3>
                  <p className="text-sm text-amber-600 font-semibold mb-3">Head Coach</p>
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
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{team.assistant}</h3>
                  <p className="text-sm text-green-600 font-semibold mb-3">Assistant Coach</p>
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
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-amber-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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
