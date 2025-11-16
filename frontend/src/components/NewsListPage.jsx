import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { newsArticles } from '../data/newsData';

const NewsListPage = memo(() => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articlesPerPage = 6;

  // Filter articles by category
  const filteredArticles = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Get unique categories
  const categories = ['All', ...new Set(newsArticles.map(article => article.category))];

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

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-xl text-orange-100">
            Stay informed with the latest happenings from Cranbourne Eagles Basketball Club
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Filter by Category:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentArticles.map((article) => (
            <Card
              key={article.id}
              className="group overflow-hidden bg-white shadow hover:shadow-xl transition-all cursor-pointer"
              onClick={() => navigate(`/news/${article.slug}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <Badge className={`${
                    article.category === 'Training' ? 'bg-orange-500' :
                    article.category === 'Games' ? 'bg-blue-500' : 'bg-green-500'
                  } text-white`}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <User className="w-3 h-3 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-200 text-orange-600 hover:bg-orange-50"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      variant={currentPage === pageNumber ? 'default' : 'outline'}
                      size="sm"
                      className={`w-10 ${
                        currentPage === pageNumber
                          ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      {pageNumber}
                    </Button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return <span key={pageNumber} className="text-gray-400">...</span>;
                }
                return null;
              })}
            </div>

            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="flex items-center"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}

        {/* Results Info */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
        </div>
      </div>
    </div>
  );
});

NewsListPage.displayName = 'NewsListPage';

export default NewsListPage;
