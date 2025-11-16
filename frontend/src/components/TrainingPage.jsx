import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { Clock, MapPin, Calendar, Users, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { teamsData, getTrainingByDay } from '../data/teamsData';

const TrainingPage = memo(() => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState('All');
  const [selectedAge, setSelectedAge] = useState('All');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const ages = ['All', 'U8', 'U10', 'U12', 'U14', 'U16', 'U18'];

  // Filter teams based on selections
  const filteredTeams = teamsData.filter(team => {
    const dayMatch = selectedDay === 'All' || team.training.day === selectedDay;
    const ageMatch = selectedAge === 'All' || team.age === selectedAge;
    return dayMatch && ageMatch;
  });

  // Group by day for display
  const groupedByDay = {};
  filteredTeams.forEach(team => {
    const day = team.training.day;
    if (!groupedByDay[day]) {
      groupedByDay[day] = [];
    }
    groupedByDay[day].push(team);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Schedule</h1>
          <p className="text-xl text-amber-100">
            Find your team's training times, locations, and match days
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Filter Schedule</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Day Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Training Day</label>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedDay('All')}
                  variant={selectedDay === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={selectedDay === 'All' ? 'bg-gradient-to-r from-amber-500 to-green-600 text-white' : ''}
                >
                  All Days
                </Button>
                {days.map(day => (
                  <Button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    variant={selectedDay === day ? 'default' : 'outline'}
                    size="sm"
                    className={selectedDay === day ? 'bg-gradient-to-r from-amber-500 to-green-600 text-white' : ''}
                  >
                    {day}
                  </Button>
                ))}
              </div>
            </div>

            {/* Age Group Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Age Group</label>
              <div className="flex flex-wrap gap-2">
                {ages.map(age => (
                  <Button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    variant={selectedAge === age ? 'default' : 'outline'}
                    size="sm"
                    className={selectedAge === age ? 'bg-gradient-to-r from-amber-500 to-green-600 text-white' : ''}
                  >
                    {age}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-amber-600">{filteredTeams.length}</span> team{filteredTeams.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Training Schedule by Day */}
        {Object.keys(groupedByDay).sort((a, b) => {
          const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          return dayOrder.indexOf(a) - dayOrder.indexOf(b);
        }).map(day => (
          <div key={day} className="mb-8">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-amber-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">{day}</h2>
              <Badge className="ml-3 bg-amber-100 text-orange-800">
                {groupedByDay[day].length} team{groupedByDay[day].length !== 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedByDay[day].map(team => (
                <Card key={team.id} className="hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate(`/team/${team.name}`)}>
                  <CardContent className="p-6">
                    {/* Team Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{team.name}</h3>
                        <Badge className="mt-1 bg-gradient-to-r from-amber-500 to-green-600 text-white text-xs">
                          {team.age} {team.gender}
                        </Badge>
                      </div>
                    </div>

                    {/* Training Time */}
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{team.training.time}</p>
                          <p className="text-xs text-gray-600">Training Time</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{team.training.location}</p>
                          <p className="text-xs text-gray-600">{team.training.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Trophy className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{team.matchDay.day} {team.matchDay.time}</p>
                          <p className="text-xs text-gray-600">Match Day - {team.matchDay.venue}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Users className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{team.coach.name}</p>
                          <p className="text-xs text-gray-600">Head Coach</p>
                        </div>
                      </div>
                    </div>

                    {/* View Team Button */}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/team/${team.name}`);
                      }}
                      className="w-full mt-4 bg-gradient-to-r from-amber-500 to-green-600 text-white text-sm"
                    >
                      View Team Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* No Results */}
        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No training sessions found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
            <Button
              onClick={() => {
                setSelectedDay('All');
                setSelectedAge('All');
              }}
              className="bg-gradient-to-r from-amber-500 to-green-600 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});

TrainingPage.displayName = 'TrainingPage';

export default TrainingPage;
