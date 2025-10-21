import React, { useState, useEffect, memo } from 'react';
import { ChevronLeft, ChevronRight, Clock, Trophy, Users, Target, Star, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Homepage = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeScorersTab, setActiveScorersTab] = useState('U8');

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
    { type: 'upcoming', title: 'Pippen vs Thunder', time: '2 days, 14 hours', location: 'Home Court', icon: Clock },
    { type: 'score', title: 'Wade Won!', score: '68-54', opponent: 'Lightning', icon: Trophy },
    { type: 'scorer', title: 'Top Scorer', player: 'Jake Thompson', points: '24 pts', icon: Star },
    { type: 'upcoming', title: 'Gigi vs Storm', time: '5 days, 3 hours', location: 'Away', icon: Clock },
    { type: 'score', title: 'Durant Victory', score: '42-38', opponent: 'Tigers', icon: Trophy }
  ];

  const seasonStats = [
    { label: 'Total Players', value: 520, icon: Users, color: 'text-orange-600' },
    { label: 'Games Played', value: 342, icon: Calendar, color: 'text-blue-600' },
    { label: 'Win Rate', value: 68, icon: Trophy, color: 'text-orange-600', suffix: '%' },
    { label: 'Points Scored', value: 18456, icon: Target, color: 'text-blue-600' }
  ];

  const topScorers = {
    U8: [
      { rank: 1, name: 'Tommy Chen', team: 'Kareem', points: 156, games: 12 },
      { rank: 2, name: 'Emma Davis', team: 'Jewel', points: 142, games: 12 },
      { rank: 3, name: 'Lucas Brown', team: 'Kareem', points: 128, games: 11 }
    ],
    U10: [
      { rank: 1, name: 'Michael Zhang', team: 'Curry', points: 284, games: 15 },
      { rank: 2, name: 'Sophie Wilson', team: 'Gigi', points: 267, games: 15 },
      { rank: 3, name: 'Ryan Martinez', team: 'Magic', points: 245, games: 14 }
    ],
    U12: [
      { rank: 1, name: 'Alex Johnson', team: 'Pippen', points: 412, games: 18 },
      { rank: 2, name: 'Maya Patel', team: 'Meyers', points: 398, games: 18 },
      { rank: 3, name: 'Connor Smith', team: 'Drexler', points: 376, games: 17 }
    ],
    U14: [
      { rank: 1, name: 'Jordan Lee', team: 'Barkley', points: 486, games: 16 },
      { rank: 2, name: 'Isabella Garcia', team: 'A\'ja', points: 468, games: 16 },
      { rank: 3, name: 'Ethan Taylor', team: 'Durant', points: 445, games: 15 }
    ],
    U16: [
      { rank: 1, name: 'Jake Thompson', team: 'Wade', points: 524, games: 14 },
      { rank: 2, name: 'Olivia Anderson', team: 'Cunningham', points: 502, games: 14 },
      { rank: 3, name: 'Noah White', team: 'Tatum', points: 487, games: 13 }
    ],
    U18: [
      { rank: 1, name: 'Marcus Johnson', team: 'James', points: 568, games: 12 },
      { rank: 2, name: 'Sophia Rodriguez', team: 'Delle Donne', points: 542, games: 12 },
      { rank: 3, name: 'Daniel Kim', team: 'Webb', points: 521, games: 11 }
    ]
  };

  const teamLadder = [
    { pos: 1, team: 'Wade', age: 'U16 Boys', played: 24, wins: 22, losses: 2, pointsFor: 1856, lastThree: ['W', 'W', 'W'] },
    { pos: 2, team: 'James', age: 'U18 Boys', played: 22, wins: 20, losses: 2, pointsFor: 1742, lastThree: ['W', 'W', 'W'] },
    { pos: 3, team: 'Pippen', age: 'U12 Boys', played: 26, wins: 21, losses: 5, pointsFor: 1698, lastThree: ['W', 'L', 'W'] },
    { pos: 4, team: 'Barkley', age: 'U14 Boys', played: 24, wins: 19, losses: 5, pointsFor: 1645, lastThree: ['W', 'W', 'L'] },
    { pos: 5, team: 'Cunningham', age: 'U16 Girls', played: 23, wins: 18, losses: 5, pointsFor: 1589, lastThree: ['W', 'W', 'W'] },
    { pos: 6, team: 'Delle Donne', age: 'U18 Girls', played: 21, wins: 17, losses: 4, pointsFor: 1534, lastThree: ['W', 'W', 'L'] },
    { pos: 7, team: 'Curry', age: 'U10 Boys', played: 20, wins: 16, losses: 4, pointsFor: 1432, lastThree: ['W', 'W', 'W'] },
    { pos: 8, team: 'Tatum', age: 'U16 Boys', played: 24, wins: 16, losses: 8, pointsFor: 1398, lastThree: ['L', 'W', 'W'] },
    { pos: 9, team: 'Magic', age: 'U10 Boys', played: 19, wins: 15, losses: 4, pointsFor: 1367, lastThree: ['W', 'L', 'W'] },
    { pos: 10, team: 'Durant', age: 'U14 Boys', played: 23, wins: 15, losses: 8, pointsFor: 1334, lastThree: ['W', 'W', 'L'] },
    { pos: 11, team: 'Gigi', age: 'U10 Girls', played: 18, wins: 14, losses: 4, pointsFor: 1298, lastThree: ['W', 'W', 'W'] },
    { pos: 12, team: 'Meyers', age: 'U12 Girls', played: 20, wins: 14, losses: 6, pointsFor: 1267, lastThree: ['L', 'W', 'W'] },
    { pos: 13, team: 'Kareem', age: 'U8 Boys', played: 18, wins: 13, losses: 5, pointsFor: 1234, lastThree: ['W', 'W', 'L'] },
    { pos: 14, team: 'Doncic', age: 'U10 Boys', played: 19, wins: 13, losses: 6, pointsFor: 1212, lastThree: ['W', 'L', 'W'] },
    { pos: 15, team: 'Fox', age: 'U18 Girls', played: 20, wins: 13, losses: 7, pointsFor: 1189, lastThree: ['W', 'W', 'W'] },
    { pos: 16, team: 'Rodman', age: 'U14 Boys', played: 22, wins: 12, losses: 10, pointsFor: 1156, lastThree: ['L', 'W', 'L'] },
    { pos: 17, team: 'Mambacita', age: 'U10 Girls', played: 17, wins: 12, losses: 5, pointsFor: 1134, lastThree: ['W', 'W', 'W'] },
    { pos: 18, team: 'A\'ja', age: 'U14 Girls', played: 21, wins: 12, losses: 9, pointsFor: 1109, lastThree: ['W', 'L', 'W'] },
    { pos: 19, team: 'Pettit', age: 'U12 Girls', played: 19, wins: 11, losses: 8, pointsFor: 1087, lastThree: ['W', 'W', 'L'] },
    { pos: 20, team: 'Harper', age: 'U14 Boys', played: 20, wins: 11, losses: 9, pointsFor: 1064, lastThree: ['L', 'W', 'W'] },
    { pos: 21, team: 'Luol', age: 'U16 Boys', played: 23, wins: 11, losses: 12, pointsFor: 1042, lastThree: ['L', 'L', 'W'] },
    { pos: 22, team: 'Clark', age: 'U16 Girls', played: 20, wins: 10, losses: 10, pointsFor: 1019, lastThree: ['W', 'L', 'L'] },
    { pos: 23, team: 'Drexler', age: 'U12 Boys', played: 21, wins: 10, losses: 11, pointsFor: 998, lastThree: ['L', 'W', 'L'] },
    { pos: 24, team: 'Jewel', age: 'U8 Girls', played: 16, wins: 10, losses: 6, pointsFor: 976, lastThree: ['W', 'W', 'W'] },
    { pos: 25, team: 'Bryant', age: 'U10 Boys', played: 18, wins: 9, losses: 9, pointsFor: 954, lastThree: ['W', 'L', 'W'] },
    { pos: 26, team: 'Stockton', age: 'U16 Boys', played: 22, wins: 9, losses: 13, pointsFor: 932, lastThree: ['L', 'L', 'W'] },
    { pos: 27, team: 'Swoopes', age: 'U14 Girls', played: 19, wins: 9, losses: 10, pointsFor: 911, lastThree: ['W', 'L', 'L'] },
    { pos: 28, team: 'Irving', age: 'U10 Boys', played: 17, wins: 8, losses: 9, pointsFor: 889, lastThree: ['L', 'W', 'W'] },
    { pos: 29, team: 'Havlicek', age: 'U14 Boys', played: 20, wins: 8, losses: 12, pointsFor: 867, lastThree: ['L', 'L', 'W'] },
    { pos: 30, team: 'Crystal', age: 'U12 Girls', played: 18, wins: 8, losses: 10, pointsFor: 845, lastThree: ['W', 'W', 'L'] },
    { pos: 31, team: 'Mutombo', age: 'U18 Boys', played: 19, wins: 7, losses: 12, pointsFor: 823, lastThree: ['L', 'W', 'L'] },
    { pos: 32, team: 'Diamond', age: 'U16 Girls', played: 19, wins: 7, losses: 12, pointsFor: 801, lastThree: ['L', 'L', 'W'] },
    { pos: 33, team: 'Garnett', age: 'U16 Boys', played: 21, wins: 7, losses: 14, pointsFor: 779, lastThree: ['L', 'W', 'L'] },
    { pos: 34, team: 'Mills', age: 'U10 Mixed', played: 16, wins: 7, losses: 9, pointsFor: 757, lastThree: ['W', 'L', 'W'] },
    { pos: 35, team: 'Lobo', age: 'U14 Girls', played: 18, wins: 6, losses: 12, pointsFor: 735, lastThree: ['L', 'L', 'L'] },
    { pos: 36, team: 'Kuminga', age: 'U12 Boys', played: 19, wins: 6, losses: 13, pointsFor: 713, lastThree: ['L', 'W', 'L'] },
    { pos: 37, team: 'Greer', age: 'U10 Boys', played: 17, wins: 6, losses: 11, pointsFor: 691, lastThree: ['W', 'L', 'L'] },
    { pos: 38, team: 'Sharman', age: 'U14 Boys', played: 18, wins: 5, losses: 13, pointsFor: 669, lastThree: ['L', 'L', 'W'] },
    { pos: 39, team: 'Webb', age: 'U18 Boys', played: 17, wins: 5, losses: 12, pointsFor: 647, lastThree: ['L', 'W', 'L'] },
    { pos: 40, team: 'Mini Hustlers', age: 'U10 Boys', played: 16, wins: 5, losses: 11, pointsFor: 625, lastThree: ['L', 'L', 'W'] },
    { pos: 41, team: 'Nowitzki', age: 'U12 Boys', played: 18, wins: 4, losses: 14, pointsFor: 603, lastThree: ['L', 'L', 'L'] },
    { pos: 42, team: 'Warriors', age: 'U12 Boys', played: 17, wins: 4, losses: 13, pointsFor: 581, lastThree: ['W', 'L', 'L'] },
    { pos: 43, team: 'Shulga', age: 'U16 Boys', played: 19, wins: 3, losses: 16, pointsFor: 559, lastThree: ['L', 'L', 'L'] },
    { pos: 44, team: 'Webber', age: 'U16 Boys', played: 18, wins: 3, losses: 15, pointsFor: 537, lastThree: ['L', 'W', 'L'] },
    { pos: 45, team: 'Payton', age: 'U16 Boys', played: 15, wins: 2, losses: 13, pointsFor: 515, lastThree: ['L', 'L', 'L'] },
    { pos: 46, team: 'Jashanti', age: 'U16 Girls', played: 14, wins: 2, losses: 12, pointsFor: 493, lastThree: ['L', 'L', 'W'] }
  ];

  const teams = [
    { age: 'U8', name: 'Kareem', gender: 'Boys', coach: 'Sarah Johnson', players: 12, image: 'https://images.unsplash.com/photo-1521830101529-057b1dfd9784?w=300&h=200&fit=crop&q=80' },
    { age: 'U8', name: 'Jewel', gender: 'Girls', coach: 'Emily Chen', players: 10, image: 'https://images.unsplash.com/photo-1521830101529-057b1dfd9784?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Bryant', gender: 'Boys', coach: 'Mike Davis', players: 14, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Curry', gender: 'Boys', coach: 'James Wilson', players: 15, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Doncic', gender: 'Boys', coach: 'Robert Lee', players: 14, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Greer', gender: 'Boys', coach: 'Tom Anderson', players: 13, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Irving', gender: 'Boys', coach: 'Chris Martin', players: 14, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Magic', gender: 'Boys', coach: 'Steve Brown', players: 15, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Mini Hustlers', gender: 'Boys', coach: 'Dan White', players: 12, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Gigi', gender: 'Girls', coach: 'Lisa Taylor', players: 13, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Mambacita', gender: 'Girls', coach: 'Anna Garcia', players: 12, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U10', name: 'Mills', gender: 'Mixed', coach: 'Paul Martinez', players: 14, image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Drexler', gender: 'Boys', coach: 'Emma Wilson', players: 15, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Kuminga', gender: 'Boys', coach: 'Mark Thompson', players: 14, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Nowitzki', gender: 'Boys', coach: 'Kevin Harris', players: 13, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Pippen', gender: 'Boys', coach: 'Ryan Clark', players: 16, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Warriors', gender: 'Boys', coach: 'Josh Moore', players: 13, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Crystal', gender: 'Girls', coach: 'Sarah Kim', players: 12, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Meyers', gender: 'Girls', coach: 'Jennifer Lopez', players: 14, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U12', name: 'Pettit', gender: 'Girls', coach: 'Michelle Scott', players: 13, image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Barkley', gender: 'Boys', coach: 'James Brown', players: 15, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Durant', gender: 'Boys', coach: 'Alex Turner', players: 16, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Harper', gender: 'Boys', coach: 'David Miller', players: 14, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Havlicek', gender: 'Boys', coach: 'Brian Wilson', players: 15, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Rodman', gender: 'Boys', coach: 'Eric Davis', players: 14, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Sharman', gender: 'Boys', coach: 'Nick Johnson', players: 13, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'A\'ja', gender: 'Girls', coach: 'Rachel Green', players: 14, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Lobo', gender: 'Girls', coach: 'Amy Roberts', players: 12, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U14', name: 'Swoopes', gender: 'Girls', coach: 'Laura Martin', players: 13, image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Garnett', gender: 'Boys', coach: 'Michael Stevens', players: 14, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Luol', gender: 'Boys', coach: 'Peter Jackson', players: 15, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Payton', gender: 'Boys', coach: 'Tony Allen', players: 13, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Shulga', gender: 'Boys', coach: 'Greg Thomas', players: 14, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Stockton', gender: 'Boys', coach: 'John Walker', players: 15, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Tatum', gender: 'Boys', coach: 'Chris Evans', players: 16, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Wade', gender: 'Boys', coach: 'Lisa Garcia', players: 15, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Webber', gender: 'Boys', coach: 'Sam Cooper', players: 14, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Clark', gender: 'Girls', coach: 'Kate Wilson', players: 13, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Cunningham', gender: 'Girls', coach: 'Diana Foster', players: 14, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Diamond', gender: 'Girls', coach: 'Jessica Brown', players: 12, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U16', name: 'Jashanti', gender: 'Girls', coach: 'Maya Singh', players: 11, image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=300&h=200&fit=crop&q=80' },
    { age: 'U18', name: 'James', gender: 'Boys', coach: 'Robert Taylor', players: 14, image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469?w=300&h=200&fit=crop&q=80' },
    { age: 'U18', name: 'Mutombo', gender: 'Boys', coach: 'Kevin Adams', players: 13, image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469?w=300&h=200&fit=crop&q=80' },
    { age: 'U18', name: 'Parker', gender: 'Boys', coach: 'Tom Hughes', players: 12, image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469?w=300&h=200&fit=crop&q=80' },
    { age: 'U18', name: 'Webb', gender: 'Boys', coach: 'Ryan Mitchell', players: 13, image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469?w=300&h=200&fit=crop&q=80' },
    { age: 'U18', name: 'Delle Donne', gender: 'Girls', coach: 'Amanda White', players: 13, image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469?w=300&h=200&fit=crop&q=80' },
    { age: 'U18', name: 'Fox', gender: 'Girls', coach: 'Nicole Davis', players: 14, image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469?w=300&h=200&fit=crop&q=80' }
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

      {/* Live Updates Section - Reduced Height */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-lg font-bold text-center text-gray-900 mb-3">Live Updates</h2>
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
            {liveUpdates.map((update, index) => {
              const IconComponent = update.icon;
              return (
                <Card key={index} className="min-w-56 bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-2">
                    <div className="flex items-center justify-between mb-1">
                      <IconComponent className={`w-4 h-4 ${update.type === 'upcoming' ? 'text-blue-600' : update.type === 'score' ? 'text-orange-600' : 'text-yellow-600'}`} />
                      <Badge variant={update.type === 'upcoming' ? 'default' : update.type === 'score' ? 'destructive' : 'secondary'} className="text-xs py-0 px-1">
                        {update.type === 'upcoming' ? 'Upcoming' : update.type === 'score' ? 'Result' : 'Player'}
                      </Badge>
                    </div>
                    <h3 className="text-xs font-semibold text-gray-900 mb-1">{update.title}</h3>
                    {update.time && <p className="text-xs text-gray-600 mb-0.5">In {update.time}</p>}
                    {update.score && <p className="text-base font-bold text-orange-600 mb-0.5">{update.score}</p>}
                    {update.points && <p className="text-xs font-semibold text-blue-600">{update.points}</p>}
                    {update.opponent && <p className="text-xs text-gray-600">vs {update.opponent}</p>}
                    {update.location && <p className="text-xs text-gray-600">{update.location}</p>}
                    {update.player && <p className="text-xs text-gray-900 font-medium">{update.player}</p>}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Season Stats - Full Width - Reduced Height */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-lg font-bold text-center text-gray-900 mb-3">Season Stats</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {seasonStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-2">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${stat.color === 'text-orange-600' ? 'from-orange-100 to-orange-200' : 'from-blue-100 to-blue-200'} mb-1`}>
                      <IconComponent className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-0.5">
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

      {/* Season Standings Section */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-4">Season Standings</h2>
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Top Scorers */}
            <Card className="bg-white shadow">
              <CardContent className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">Top Scorers</h3>

                {/* Tabs */}
                <div className="flex overflow-x-auto space-x-1 mb-3 border-b border-gray-200">
                  {['U8', 'U10', 'U12', 'U14', 'U16', 'U18'].map((age) => (
                    <button
                      key={age}
                      onClick={() => setActiveScorersTab(age)}
                      className={`px-3 py-1 text-xs font-medium transition-colors ${
                        activeScorersTab === age
                          ? 'text-orange-600 border-b-2 border-orange-600'
                          : 'text-gray-600 hover:text-orange-500'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>

                {/* Scorers List */}
                <div className="space-y-2">
                  {topScorers[activeScorersTab].map((scorer) => (
                    <div key={scorer.rank} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${
                          scorer.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                          scorer.rank === 2 ? 'bg-gray-300 text-gray-900' :
                          'bg-orange-300 text-orange-900'
                        }`}>
                          {scorer.rank}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{scorer.name}</p>
                          <p className="text-xs text-gray-600">{scorer.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-orange-600">{scorer.points}</p>
                        <p className="text-xs text-gray-500">{scorer.games} games</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Ladder */}
            <Card className="bg-white shadow">
              <CardContent className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">Team Ladder</h3>

                {/* Table with fixed height and scroll */}
                <div className="overflow-auto max-h-[280px]">
                  <table className="w-full text-xs">
                    <thead className="sticky top-0 bg-white">
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-1 font-semibold text-gray-700">Pos</th>
                        <th className="text-left py-2 px-1 font-semibold text-gray-700">Team</th>
                        <th className="text-center py-2 px-1 font-semibold text-gray-700">P</th>
                        <th className="text-center py-2 px-1 font-semibold text-gray-700">W-L</th>
                        <th className="text-center py-2 px-1 font-semibold text-gray-700">PF</th>
                        <th className="text-center py-2 px-1 font-semibold text-gray-700">L3</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamLadder.map((team) => (
                        <tr key={team.pos} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-2 px-1">
                            <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                              team.pos === 1 ? 'bg-yellow-400 text-yellow-900' :
                              team.pos === 2 ? 'bg-gray-300 text-gray-900' :
                              team.pos === 3 ? 'bg-orange-300 text-orange-900' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {team.pos}
                            </span>
                          </td>
                          <td className="py-2 px-1">
                            <p className="font-semibold text-gray-900">{team.team}</p>
                            <p className="text-xs text-gray-500">{team.age}</p>
                          </td>
                          <td className="text-center py-2 px-1 text-gray-700">{team.played}</td>
                          <td className="text-center py-2 px-1">
                            <span className="font-semibold text-gray-900">{team.wins}-{team.losses}</span>
                          </td>
                          <td className="text-center py-2 px-1 font-semibold text-orange-600">{team.pointsFor}</td>
                          <td className="text-center py-2 px-1">
                            <div className="flex justify-center space-x-0.5">
                              {team.lastThree.map((result, idx) => (
                                <span
                                  key={idx}
                                  className={`w-4 h-4 flex items-center justify-center rounded text-xs font-bold ${
                                    result === 'W' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                  }`}
                                >
                                  {result}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
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
                      {team.age} {team.gender}
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
