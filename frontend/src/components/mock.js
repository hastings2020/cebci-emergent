// Mock data for the basketball club website

export const mockHeroImages = [
  {
    url: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469',
    title: 'Young Champions in Action',
    subtitle: 'Building Skills, Character & Friendship'
  },
  {
    url: 'https://images.unsplash.com/photo-1727449301929-bcd5b8b920de', 
    title: 'Team Spirit & Excellence',
    subtitle: 'Every Game is a Learning Experience'
  },
  {
    url: 'https://images.pexels.com/photos/30637225/pexels-photo-30637225.jpeg',
    title: 'Future Basketball Stars',
    subtitle: 'Join Our Growing Family'
  }
];

export const mockLiveUpdates = [
  {
    type: 'upcoming',
    title: 'U12 vs Eagles',
    time: '2 days, 14 hours',
    location: 'Home Court'
  },
  {
    type: 'score',
    title: 'U16 Won!',
    score: '68-54',
    opponent: 'Thunder Bolts'
  },
  {
    type: 'scorer',
    title: 'Top Scorer',
    player: 'Jake Thompson',
    points: '24 pts'
  },
  {
    type: 'upcoming',
    title: 'U10 vs Lions',
    time: '5 days, 3 hours',
    location: 'Away'
  },
  {
    type: 'score',
    title: 'U14 Victory',
    score: '42-38',
    opponent: 'City Sharks'
  }
];

export const mockTeams = [
  { 
    id: 1,
    age: 'U8', 
    name: 'Little Dribblers', 
    coach: 'Sarah Johnson', 
    players: 12, 
    image: 'https://images.unsplash.com/photo-1521830101529-057b1dfd9784',
    wins: 8,
    losses: 2,
    description: 'Our youngest team focuses on fun fundamentals and basic skills development.'
  },
  { 
    id: 2,
    age: 'U10', 
    name: 'Mini Ballers', 
    coach: 'Mike Davis', 
    players: 15, 
    image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133',
    wins: 12,
    losses: 3,
    description: 'Building on basics with more structured gameplay and teamwork.'
  },
  { 
    id: 3,
    age: 'U12', 
    name: 'Rising Stars', 
    coach: 'Emma Wilson', 
    players: 18, 
    image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160',
    wins: 15,
    losses: 5,
    description: 'Developing competitive skills while maintaining the joy of the game.'
  },
  { 
    id: 4,
    age: 'U14', 
    name: 'Court Warriors', 
    coach: 'James Brown', 
    players: 16, 
    image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055',
    wins: 18,
    losses: 4,
    description: 'Advanced skills training with competitive league participation.'
  },
  { 
    id: 5,
    age: 'U16', 
    name: 'Elite Squad', 
    coach: 'Lisa Garcia', 
    players: 14, 
    image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40',
    wins: 22,
    losses: 3,
    description: 'High-level competitive play preparing for college recruitment.'
  },
  { 
    id: 6,
    age: 'U18', 
    name: 'Championship Team', 
    coach: 'Robert Taylor', 
    players: 12, 
    image: 'https://images.unsplash.com/photo-1559838831-d8fbd8af6469',
    wins: 25,
    losses: 2,
    description: 'Elite level training for college-bound student athletes.'
  }
];

export const mockSeasonStats = [
  { label: 'Total Players', value: 87 },
  { label: 'Games Played', value: 156 },
  { label: 'Win Rate', value: 78, suffix: '%' },
  { label: 'Points Scored', value: 8924 }
];

export const mockLeadership = [
  {
    id: 1,
    name: 'David Martinez',
    position: 'Club President',
    bio: '15 years coaching experience, former college player',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    contact: 'david@kidsbasketball.com',
    phone: '(555) 123-4567'
  },
  {
    id: 2,
    name: 'Jennifer Lee',
    position: 'Head of Youth Development', 
    bio: 'Sports psychology PhD, youth development specialist',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    contact: 'jennifer@kidsbasketball.com',
    phone: '(555) 123-4568'
  },
  {
    id: 3,
    name: 'Marcus Thompson',
    position: 'Training Director',
    bio: 'Former professional player, certified trainer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    contact: 'marcus@kidsbasketball.com',
    phone: '(555) 123-4569'
  }
];

export const mockCoachesByAge = [
  {
    id: 1,
    ageGroup: 'U8 & U10',
    teams: ['Little Dribblers', 'Mini Ballers'],
    headCoach: { 
      name: 'Sarah Johnson', 
      experience: '8 years', 
      specialization: 'Youth Development',
      certifications: ['Youth Basketball Coach', 'First Aid/CPR'],
      email: 'sarah@kidsbasketball.com'
    },
    assistants: [
      { name: 'Mike Davis', role: 'Assistant Coach', experience: '3 years' }
    ],
    manager: {
      name: 'Emma Wilson',
      role: 'Team Manager',
      responsibilities: 'Operations & Logistics'
    }
  },
  {
    id: 2,
    ageGroup: 'U12 & U14', 
    teams: ['Rising Stars', 'Court Warriors'],
    headCoach: { 
      name: 'James Brown', 
      experience: '12 years', 
      specialization: 'Skills Development',
      certifications: ['Advanced Basketball Coach', 'Youth Sports Psychology'],
      email: 'james@kidsbasketball.com'
    },
    assistants: [
      { name: 'Lisa Garcia', role: 'Assistant Coach', experience: '5 years' }
    ],
    manager: {
      name: 'Robert Taylor',
      role: 'Team Manager',
      responsibilities: 'Operations & Logistics'
    }
  },
  {
    id: 3,
    ageGroup: 'U16 & U18',
    teams: ['Elite Squad', 'Championship Team'],
    headCoach: { 
      name: 'Coach Anderson', 
      experience: '15 years', 
      specialization: 'Competitive Play',
      certifications: ['Professional Basketball Coach', 'Strength & Conditioning'],
      email: 'anderson@kidsbasketball.com'
    },
    assistants: [
      { name: 'Coach Williams', role: 'Assistant Coach', experience: '7 years' }
    ],
    manager: {
      name: 'Diana Foster',
      role: 'Team Manager',
      responsibilities: 'Operations & Logistics'
    }
  }
];

export const mockNews = [
  {
    id: 1,
    title: 'Summer Training Camp Registration Open',
    excerpt: 'Join us for intensive skills development this summer. Early bird pricing available until March 15th.',
    content: 'Our annual summer training camp is designed to take your game to the next level...',
    image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?w=400&h=200&fit=crop',
    category: 'Training',
    date: '2024-03-10',
    author: 'Sarah Johnson',
    featured: true
  },
  {
    id: 2,
    title: 'U16 Team Wins Regional Championship',
    excerpt: 'Our Elite Squad dominated the regional finals with outstanding teamwork and determination.',
    content: 'In a thrilling championship game, our U16 Elite Squad defeated the Thunder Bolts 68-54...',
    image: 'https://images.unsplash.com/photo-1520399636535-24741e71b160?w=400&h=200&fit=crop',
    category: 'Games',
    date: '2024-03-03',
    author: 'Lisa Garcia',
    featured: true
  },
  {
    id: 3,
    title: 'New Equipment Donation from Local Business',
    excerpt: 'Thanks to SportsPro for donating new basketballs and training equipment worth $5,000.',
    content: 'We are grateful to SportsPro for their generous donation of new basketballs...',
    image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?w=400&h=200&fit=crop',
    category: 'Events',
    date: '2024-02-28',
    author: 'David Martinez',
    featured: false
  },
  {
    id: 4,
    title: 'Player Spotlight: Jake Thompson',
    excerpt: 'Meet our star player who scored 24 points in the championship game.',
    content: 'Jake Thompson has been with our club for 4 years and continues to impress...',
    image: 'https://images.unsplash.com/photo-1513635625218-6956bc843133?w=400&h=200&fit=crop',
    category: 'Players',
    date: '2024-02-25',
    author: 'Marcus Thompson',
    featured: false
  }
];

export const mockSchedule = [
  {
    id: 1,
    team: 'U12 Rising Stars',
    opponent: 'Eagles',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'Home Court',
    type: 'League Game'
  },
  {
    id: 2,
    team: 'U10 Mini Ballers',
    opponent: 'Lions',
    date: '2024-03-18',
    time: '2:00 PM',
    location: 'Lions Sports Center',
    type: 'League Game'
  },
  {
    id: 3,
    team: 'U16 Elite Squad',
    opponent: 'Thunder Bolts',
    date: '2024-03-20',
    time: '6:00 PM',
    location: 'Home Court',
    type: 'Playoff Game'
  }
];

export const mockRegistrationData = {
  ageGroups: ['U8', 'U10', 'U12', 'U14', 'U16', 'U18'],
  benefits: [
    'Professional coaching for all skill levels',
    'Build lasting friendships and teamwork skills', 
    'Competitive games and tournaments',
    'Character development and sportsmanship',
    'Physical fitness and health benefits',
    'College recruitment opportunities (U16+)'
  ],
  pricing: {
    'U8': { monthly: 75, season: 600 },
    'U10': { monthly: 85, season: 680 },
    'U12': { monthly: 95, season: 760 },
    'U14': { monthly: 105, season: 840 },
    'U16': { monthly: 115, season: 920 },
    'U18': { monthly: 125, season: 1000 }
  }
};

export const mockContactInfo = {
  address: '123 Basketball Ave, Sports City, SC 12345',
  phone: '(555) 123-BALL',
  email: 'info@kidsbasketball.com',
  hours: {
    weekdays: '3:00 PM - 9:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: '1:00 PM - 5:00 PM'
  },
  socialMedia: {
    facebook: 'https://facebook.com/kidsbasketballclub',
    instagram: 'https://instagram.com/kidsbasketball',
    twitter: 'https://twitter.com/kidsbball'
  }
};