import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Navigation = memo(({ variant = 'default' }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to teams section (only works on homepage)
  const scrollToTeams = () => {
    const teamsSection = document.getElementById('teams');
    if (teamsSection) {
      teamsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    } else {
      // If not on homepage, navigate to homepage
      navigate('/#teams');
    }
  };

  return (
    <nav className={`${variant === 'sticky' ? 'fixed' : 'sticky'} top-0 left-0 right-0 bg-white shadow z-50`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <img
              src="https://cebci.au/wp-content/uploads/2022/08/CE-Logo-White-Background.png"
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-sm md:text-base font-bold text-gray-900">Cranbourne Eagles</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={scrollToTeams} className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">Teams</button>
            <button onClick={() => navigate('/training')} className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">Training</button>
            <button onClick={() => navigate('/news')} className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">News</button>
            <button onClick={() => navigate('/about')} className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">About</button>
            <button onClick={() => navigate('/contact')} className="text-sm text-gray-700 hover:text-orange-500 px-2 py-1">Contact</button>
            <Button onClick={() => navigate('/registration')} className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-1 text-sm rounded-full">
              Join
            </Button>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-3 py-2 space-y-1">
            <button onClick={() => { scrollToTeams(); setIsMenuOpen(false); }} className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500 w-full text-left">Teams</button>
            <button onClick={() => { navigate('/training'); setIsMenuOpen(false); }} className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500 w-full text-left">Training</button>
            <button onClick={() => { navigate('/news'); setIsMenuOpen(false); }} className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500 w-full text-left">News</button>
            <button onClick={() => { navigate('/about'); setIsMenuOpen(false); }} className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500 w-full text-left">About</button>
            <button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }} className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-500 w-full text-left">Contact</button>
            <Button onClick={() => { navigate('/registration'); setIsMenuOpen(false); }} className="w-full mt-1 bg-gradient-to-r from-orange-500 to-blue-600 text-white text-sm rounded-full">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
