// Comprehensive team data for Cranbourne Eagles Basketball Club
// Including training schedules, match days, coaches, and players

export const teamsData = [
  // U8 Teams
  {
    id: 1,
    name: 'Kareem',
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
    training: {
      day: 'Tuesday',
      time: '5:00 PM - 6:00 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '9:00 AM',
      venue: 'Home Court'
    },
    playerCount: 12
  },
  {
    id: 2,
    name: 'Jewel',
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
    training: {
      day: 'Wednesday',
      time: '4:30 PM - 5:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '10:00 AM',
      venue: 'Home Court'
    },
    playerCount: 10
  },

  // U10 Teams
  {
    id: 3,
    name: 'Bryant',
    age: 'U10',
    gender: 'Boys',
    grade: 'Thursday U10 Mixed A Grade',
    coach: {
      name: 'Mike Davis',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'mike.davis@cebci.com',
      phone: '0434 567 890'
    },
    assistant: 'Tom Anderson',
    manager: 'Sarah Kim',
    training: {
      day: 'Monday',
      time: '5:30 PM - 6:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Thursday',
      time: '6:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 4,
    name: 'Curry',
    age: 'U10',
    gender: 'Boys',
    grade: 'Saturday U10 Boys A Grade',
    coach: {
      name: 'James Wilson',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'james.wilson@cebci.com',
      phone: '0445 678 901'
    },
    assistant: 'Chris Martin',
    manager: 'Jennifer Lopez',
    training: {
      day: 'Tuesday',
      time: '6:00 PM - 7:00 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '11:00 AM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 5,
    name: 'Doncic',
    age: 'U10',
    gender: 'Boys',
    grade: 'Saturday U10 Boys A Grade',
    coach: {
      name: 'Robert Lee',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'robert.lee@cebci.com',
      phone: '0456 789 012'
    },
    assistant: 'Steve Brown',
    manager: 'Michelle Scott',
    training: {
      day: 'Wednesday',
      time: '5:30 PM - 6:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '12:00 PM',
      venue: 'Home Court'
    },
    playerCount: 14
  },
  {
    id: 6,
    name: 'Greer',
    age: 'U10',
    gender: 'Boys',
    grade: 'Saturday U10 Boys D2 Grade',
    coach: {
      name: 'Tom Anderson',
      photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'tom.anderson@cebci.com',
      phone: '0467 890 123'
    },
    assistant: 'Dan White',
    manager: 'Rachel Green',
    training: {
      day: 'Thursday',
      time: '5:00 PM - 6:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '1:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 13
  },
  {
    id: 7,
    name: 'Irving',
    age: 'U10',
    gender: 'Boys',
    grade: 'Saturday U10 Boys C2 Grade',
    coach: {
      name: 'Chris Martin',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'chris.martin@cebci.com',
      phone: '0478 901 234'
    },
    assistant: 'Paul Martinez',
    manager: 'Amy Roberts',
    training: {
      day: 'Tuesday',
      time: '4:30 PM - 5:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '2:00 PM',
      venue: 'Home Court'
    },
    playerCount: 14
  },
  {
    id: 8,
    name: 'Magic',
    age: 'U10',
    gender: 'Boys',
    grade: 'Saturday U10 Boys B Grade',
    coach: {
      name: 'Steve Brown',
      photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'steve.brown@cebci.com',
      phone: '0489 012 345'
    },
    assistant: 'Ryan Clark',
    manager: 'Laura Martin',
    training: {
      day: 'Monday',
      time: '6:00 PM - 7:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '3:00 PM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 9,
    name: 'Mini Hustlers',
    age: 'U10',
    gender: 'Boys',
    grade: 'Saturday U10 Boys C3 Grade',
    coach: {
      name: 'Dan White',
      photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'dan.white@cebci.com',
      phone: '0490 123 456'
    },
    assistant: 'Josh Moore',
    manager: 'Kate Wilson',
    training: {
      day: 'Friday',
      time: '4:30 PM - 5:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '4:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 12
  },
  {
    id: 10,
    name: 'Gigi',
    age: 'U10',
    gender: 'Girls',
    grade: 'Saturday U10 Girls A Grade',
    coach: {
      name: 'Lisa Taylor',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'lisa.taylor@cebci.com',
      phone: '0401 234 567'
    },
    assistant: 'Sarah Kim',
    manager: 'Diana Foster',
    training: {
      day: 'Wednesday',
      time: '6:00 PM - 7:00 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '10:30 AM',
      venue: 'Home Court'
    },
    playerCount: 13
  },
  {
    id: 11,
    name: 'Mambacita',
    age: 'U10',
    gender: 'Girls',
    grade: 'Saturday U10 Girls A Grade',
    coach: {
      name: 'Anna Garcia',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'anna.garcia@cebci.com',
      phone: '0412 345 678'
    },
    assistant: 'Jennifer Lopez',
    manager: 'Jessica Brown',
    training: {
      day: 'Thursday',
      time: '5:30 PM - 6:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '11:30 AM',
      venue: 'Home Court'
    },
    playerCount: 12
  },
  {
    id: 12,
    name: 'Mills',
    age: 'U10',
    gender: 'Mixed',
    grade: 'Thursday U10 Mixed C1 Grade',
    coach: {
      name: 'Paul Martinez',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'paul.martinez@cebci.com',
      phone: '0423 456 789'
    },
    assistant: 'Ryan Clark',
    manager: 'Maya Singh',
    training: {
      day: 'Tuesday',
      time: '5:00 PM - 6:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Thursday',
      time: '7:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },

  // U12 Teams
  {
    id: 13,
    name: 'Drexler',
    age: 'U12',
    gender: 'Boys',
    grade: 'Saturday U12 Boys C2 Grade',
    coach: {
      name: 'Emma Wilson',
      photo: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'emma.wilson@cebci.com',
      phone: '0434 567 890'
    },
    assistant: 'Mark Thompson',
    manager: 'Amanda White',
    training: {
      day: 'Monday',
      time: '6:30 PM - 7:45 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '9:00 AM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 14,
    name: 'Kuminga',
    age: 'U12',
    gender: 'Boys',
    grade: 'Saturday U12 Boys C3 Grade',
    coach: {
      name: 'Mark Thompson',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'mark.thompson@cebci.com',
      phone: '0445 678 901'
    },
    assistant: 'Kevin Harris',
    manager: 'Nicole Davis',
    training: {
      day: 'Wednesday',
      time: '6:00 PM - 7:15 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '10:00 AM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 15,
    name: 'Nowitzki',
    age: 'U12',
    gender: 'Boys',
    grade: 'Saturday U12 Boys D2 Grade',
    coach: {
      name: 'Kevin Harris',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'kevin.harris@cebci.com',
      phone: '0456 789 012'
    },
    assistant: 'Ryan Clark',
    manager: 'Sarah Johnson',
    training: {
      day: 'Tuesday',
      time: '6:30 PM - 7:45 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '11:00 AM',
      venue: 'Home Court'
    },
    playerCount: 13
  },
  {
    id: 16,
    name: 'Pippen',
    age: 'U12',
    gender: 'Boys',
    grade: 'Saturday U12 Boys A Grade',
    coach: {
      name: 'Ryan Clark',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'ryan.clark@cebci.com',
      phone: '0467 890 123'
    },
    assistant: 'Josh Moore',
    manager: 'Emily Chen',
    training: {
      day: 'Monday',
      time: '7:00 PM - 8:15 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '12:00 PM',
      venue: 'Home Court'
    },
    playerCount: 16
  },
  {
    id: 17,
    name: 'Warriors',
    age: 'U12',
    gender: 'Boys',
    grade: 'Saturday U12 Boys E1 Grade',
    coach: {
      name: 'Josh Moore',
      photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'josh.moore@cebci.com',
      phone: '0478 901 234'
    },
    assistant: 'Tom Anderson',
    manager: 'Lisa Taylor',
    training: {
      day: 'Thursday',
      time: '6:00 PM - 7:15 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '1:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 13
  },
  {
    id: 18,
    name: 'Crystal',
    age: 'U12',
    gender: 'Girls',
    grade: 'Saturday U12 Girls C3 Grade',
    coach: {
      name: 'Sarah Kim',
      photo: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'sarah.kim@cebci.com',
      phone: '0489 012 345'
    },
    assistant: 'Jennifer Lopez',
    manager: 'Anna Garcia',
    training: {
      day: 'Wednesday',
      time: '5:30 PM - 6:45 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '2:00 PM',
      venue: 'Home Court'
    },
    playerCount: 12
  },
  {
    id: 19,
    name: 'Meyers',
    age: 'U12',
    gender: 'Girls',
    grade: 'Saturday U12 Girls B Grade',
    coach: {
      name: 'Jennifer Lopez',
      photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'jennifer.lopez@cebci.com',
      phone: '0490 123 456'
    },
    assistant: 'Michelle Scott',
    manager: 'Diana Foster',
    training: {
      day: 'Tuesday',
      time: '6:00 PM - 7:15 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '3:00 PM',
      venue: 'Home Court'
    },
    playerCount: 14
  },
  {
    id: 20,
    name: 'Pettit',
    age: 'U12',
    gender: 'Girls',
    grade: 'Saturday U12 Girls B Grade',
    coach: {
      name: 'Michelle Scott',
      photo: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'michelle.scott@cebci.com',
      phone: '0401 234 567'
    },
    assistant: 'Rachel Green',
    manager: 'Jessica Brown',
    training: {
      day: 'Thursday',
      time: '5:30 PM - 6:45 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '4:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 13
  },

  // U14 Teams
  {
    id: 21,
    name: 'Boomers',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys A Grade',
    coach: {
      name: 'David Thompson',
      photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'david.thompson@cebci.com',
      phone: '0412 345 678'
    },
    assistant: 'Brad Johnson',
    manager: 'Karen Smith',
    training: {
      day: 'Monday',
      time: '7:00 PM - 8:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '1:00 PM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 22,
    name: 'Duncan',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys B Grade',
    coach: {
      name: 'Brad Johnson',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'brad.johnson@cebci.com',
      phone: '0423 456 789'
    },
    assistant: 'Scott Miller',
    manager: 'Helen Davis',
    training: {
      day: 'Tuesday',
      time: '7:00 PM - 8:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '2:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 23,
    name: 'Exum',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys C Grade',
    coach: {
      name: 'Scott Miller',
      photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'scott.miller@cebci.com',
      phone: '0434 567 890'
    },
    assistant: 'Tim Brown',
    manager: 'Patricia Wilson',
    training: {
      day: 'Wednesday',
      time: '6:30 PM - 8:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '3:00 PM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 24,
    name: 'Ginobili',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys D Grade',
    coach: {
      name: 'Tim Brown',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'tim.brown@cebci.com',
      phone: '0445 678 901'
    },
    assistant: 'Greg Anderson',
    manager: 'Linda Martinez',
    training: {
      day: 'Thursday',
      time: '6:30 PM - 8:00 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '9:00 AM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 25,
    name: 'KD',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys B2 Grade',
    coach: {
      name: 'Greg Anderson',
      photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'greg.anderson@cebci.com',
      phone: '0456 789 012'
    },
    assistant: 'Andrew White',
    manager: 'Susan Taylor',
    training: {
      day: 'Monday',
      time: '6:00 PM - 7:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '4:00 PM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 26,
    name: 'KG',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys C2 Grade',
    coach: {
      name: 'Andrew White',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'andrew.white@cebci.com',
      phone: '0467 890 123'
    },
    assistant: 'Peter Garcia',
    manager: 'Barbara Lee',
    training: {
      day: 'Wednesday',
      time: '7:00 PM - 8:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '10:00 AM',
      venue: 'Home Court'
    },
    playerCount: 14
  },
  {
    id: 27,
    name: 'Longley',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys D2 Grade',
    coach: {
      name: 'Peter Garcia',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'peter.garcia@cebci.com',
      phone: '0478 901 234'
    },
    assistant: 'Frank Rodriguez',
    manager: 'Nancy Kim',
    training: {
      day: 'Friday',
      time: '6:00 PM - 7:30 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '5:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 13
  },
  {
    id: 28,
    name: 'Manu',
    age: 'U14',
    gender: 'Mixed',
    grade: 'Thursday U14 Mixed B Grade',
    coach: {
      name: 'Frank Rodriguez',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'frank.rodriguez@cebci.com',
      phone: '0489 012 345'
    },
    assistant: 'Carlos Martinez',
    manager: 'Maria Gonzalez',
    training: {
      day: 'Tuesday',
      time: '6:00 PM - 7:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Thursday',
      time: '7:30 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 29,
    name: 'Pierce',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys A2 Grade',
    coach: {
      name: 'Carlos Martinez',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'carlos.martinez@cebci.com',
      phone: '0490 123 456'
    },
    assistant: 'Robert Lee',
    manager: 'Angela Chen',
    training: {
      day: 'Thursday',
      time: '7:00 PM - 8:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '11:00 AM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 30,
    name: 'Shaq',
    age: 'U14',
    gender: 'Boys',
    grade: 'Saturday U14 Boys E Grade',
    coach: {
      name: 'Anthony Davis',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'anthony.davis@cebci.com',
      phone: '0401 234 567'
    },
    assistant: 'Marcus Williams',
    manager: 'Deborah Scott',
    training: {
      day: 'Friday',
      time: '5:00 PM - 6:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '6:00 PM',
      venue: 'Home Court'
    },
    playerCount: 14
  },

  // U16 Teams
  {
    id: 31,
    name: 'Boomers',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys A Grade',
    coach: {
      name: 'Marcus Williams',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'marcus.williams@cebci.com',
      phone: '0412 345 678'
    },
    assistant: 'Jason Taylor',
    manager: 'Christine Roberts',
    training: {
      day: 'Monday',
      time: '7:30 PM - 9:00 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '12:00 PM',
      venue: 'Home Court'
    },
    playerCount: 16
  },
  {
    id: 32,
    name: 'CP3',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys B Grade',
    coach: {
      name: 'Jason Taylor',
      photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'jason.taylor@cebci.com',
      phone: '0423 456 789'
    },
    assistant: 'Kevin Brown',
    manager: 'Rebecca Anderson',
    training: {
      day: 'Tuesday',
      time: '7:30 PM - 9:00 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '1:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 15
  },
  {
    id: 33,
    name: 'Dame',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys C Grade',
    coach: {
      name: 'Kevin Brown',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'kevin.brown@cebci.com',
      phone: '0434 567 890'
    },
    assistant: 'Derek Miller',
    manager: 'Shannon White',
    training: {
      day: 'Wednesday',
      time: '7:30 PM - 9:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '2:00 PM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 34,
    name: 'Flash',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys D Grade',
    coach: {
      name: 'Derek Miller',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'derek.miller@cebci.com',
      phone: '0445 678 901'
    },
    assistant: 'Stephen Clark',
    manager: 'Melissa Harris',
    training: {
      day: 'Thursday',
      time: '7:30 PM - 9:00 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '7:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 35,
    name: 'Hakeem',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys B2 Grade',
    coach: {
      name: 'Stephen Clark',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'stephen.clark@cebci.com',
      phone: '0456 789 012'
    },
    assistant: 'Patrick Moore',
    manager: 'Donna Lewis',
    training: {
      day: 'Monday',
      time: '6:30 PM - 8:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '3:00 PM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 36,
    name: 'Harden',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys C2 Grade',
    coach: {
      name: 'Patrick Moore',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'patrick.moore@cebci.com',
      phone: '0467 890 123'
    },
    assistant: 'Brian Walker',
    manager: 'Sandra Young',
    training: {
      day: 'Wednesday',
      time: '6:30 PM - 8:00 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '4:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 37,
    name: 'Kyrie',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys A2 Grade',
    coach: {
      name: 'Brian Walker',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'brian.walker@cebci.com',
      phone: '0478 901 234'
    },
    assistant: 'Gary Hall',
    manager: 'Dorothy King',
    training: {
      day: 'Friday',
      time: '7:00 PM - 8:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '8:00 PM',
      venue: 'Home Court'
    },
    playerCount: 16
  },
  {
    id: 38,
    name: 'LBJ',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys Premier',
    coach: {
      name: 'Gary Hall',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'gary.hall@cebci.com',
      phone: '0489 012 345'
    },
    assistant: 'Richard Allen',
    manager: 'Carol Wright',
    training: {
      day: 'Tuesday',
      time: '7:00 PM - 8:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '5:00 PM',
      venue: 'Home Court'
    },
    playerCount: 16
  },
  {
    id: 39,
    name: 'Stockton',
    age: 'U16',
    gender: 'Boys',
    grade: 'Saturday U16 Boys D2 Grade',
    coach: {
      name: 'Richard Allen',
      photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'richard.allen@cebci.com',
      phone: '0490 123 456'
    },
    assistant: 'Larry Young',
    manager: 'Janet Lopez',
    training: {
      day: 'Thursday',
      time: '6:30 PM - 8:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '9:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },

  // U18 Teams
  {
    id: 40,
    name: 'AI',
    age: 'U18',
    gender: 'Boys',
    grade: 'Saturday U18 Boys Premier',
    coach: {
      name: 'Larry Young',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'larry.young@cebci.com',
      phone: '0401 234 567'
    },
    assistant: 'Kenneth Hill',
    manager: 'Michelle Green',
    training: {
      day: 'Monday',
      time: '8:00 PM - 9:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '6:00 PM',
      venue: 'Home Court'
    },
    playerCount: 16
  },
  {
    id: 41,
    name: 'Boomers',
    age: 'U18',
    gender: 'Boys',
    grade: 'Saturday U18 Boys A Grade',
    coach: {
      name: 'Kenneth Hill',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'kenneth.hill@cebci.com',
      phone: '0412 345 678'
    },
    assistant: 'Steven Adams',
    manager: 'Betty Baker',
    training: {
      day: 'Tuesday',
      time: '8:00 PM - 9:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '7:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 15
  },
  {
    id: 42,
    name: 'Clutch',
    age: 'U18',
    gender: 'Boys',
    grade: 'Saturday U18 Boys B Grade',
    coach: {
      name: 'Steven Adams',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'steven.adams@cebci.com',
      phone: '0423 456 789'
    },
    assistant: 'Paul Nelson',
    manager: 'Barbara Campbell',
    training: {
      day: 'Wednesday',
      time: '8:00 PM - 9:30 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '7:30 PM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 43,
    name: 'Ice',
    age: 'U18',
    gender: 'Boys',
    grade: 'Saturday U18 Boys C Grade',
    coach: {
      name: 'Paul Nelson',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'paul.nelson@cebci.com',
      phone: '0434 567 890'
    },
    assistant: 'Raymond Carter',
    manager: 'Elizabeth Mitchell',
    training: {
      day: 'Thursday',
      time: '8:00 PM - 9:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '8:00 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 44,
    name: 'Klaw',
    age: 'U18',
    gender: 'Boys',
    grade: 'Saturday U18 Boys A2 Grade',
    coach: {
      name: 'Raymond Carter',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'raymond.carter@cebci.com',
      phone: '0445 678 901'
    },
    assistant: 'Edward Roberts',
    manager: 'Sarah Parker',
    training: {
      day: 'Monday',
      time: '7:00 PM - 8:30 PM',
      location: 'Cranbourne Sports Complex - Court 2',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '8:30 PM',
      venue: 'Home Court'
    },
    playerCount: 16
  },
  {
    id: 45,
    name: 'Melo',
    age: 'U18',
    gender: 'Boys',
    grade: 'Saturday U18 Boys B2 Grade',
    coach: {
      name: 'Edward Roberts',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'edward.roberts@cebci.com',
      phone: '0456 789 012'
    },
    assistant: 'Donald Turner',
    manager: 'Lisa Evans',
    training: {
      day: 'Wednesday',
      time: '7:00 PM - 8:30 PM',
      location: 'Cranbourne Sports Complex - Court 1',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '9:00 PM',
      venue: 'Home Court'
    },
    playerCount: 15
  },
  {
    id: 46,
    name: 'Showtime',
    age: 'U18',
    gender: 'Boys',
    grade: 'Saturday U18 Boys C2 Grade',
    coach: {
      name: 'Donald Turner',
      photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'donald.turner@cebci.com',
      phone: '0467 890 123'
    },
    assistant: 'George Phillips',
    manager: 'Karen Collins',
    training: {
      day: 'Friday',
      time: '7:30 PM - 9:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Saturday',
      time: '9:30 PM',
      venue: 'Away - Various'
    },
    playerCount: 14
  },
  {
    id: 47,
    name: 'The Beard',
    age: 'U18',
    gender: 'Boys',
    grade: 'Saturday U18 Boys D Grade',
    coach: {
      name: 'George Phillips',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80',
      email: 'george.phillips@cebci.com',
      phone: '0478 901 234'
    },
    assistant: 'Charles Edwards',
    manager: 'Mary Stewart',
    training: {
      day: 'Tuesday',
      time: '6:30 PM - 8:00 PM',
      location: 'Cranbourne Sports Complex - Court 3',
      address: '123 Basketball Ave, Cranbourne VIC 3977'
    },
    matchDay: {
      day: 'Sunday',
      time: '10:00 PM',
      venue: 'Home Court'
    },
    playerCount: 14
  }
];

// Helper function to get teams by age group
export const getTeamsByAge = (age) => {
  return teamsData.filter(team => team.age === age);
};

// Helper function to get team by name
export const getTeamByName = (name) => {
  return teamsData.find(team => team.name === name);
};

// Helper function to get all unique age groups
export const getAgeGroups = () => {
  return [...new Set(teamsData.map(team => team.age))].sort();
};

// Helper function to get training schedule grouped by day
export const getTrainingByDay = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const schedule = {};

  days.forEach(day => {
    schedule[day] = teamsData.filter(team => team.training.day === day);
  });

  return schedule;
};

export default teamsData;
