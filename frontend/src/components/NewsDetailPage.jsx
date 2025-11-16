import React, { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { Calendar, User, Clock, Share2, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { newsArticles } from '../data/newsData';

const NewsDetailPage = memo(() => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the article by slug
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Button onClick={() => navigate('/news')} className="bg-gradient-to-r from-amber-500 to-green-600">
            View All News
          </Button>
        </div>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <Badge className={`${
            article.category === 'Training' ? 'bg-amber-500' :
            article.category === 'Games' ? 'bg-green-500' : 'bg-green-500'
          } text-white mb-4`}>
            {article.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Share Buttons */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700">Share this article:</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" className="flex items-center space-x-1">
              <Facebook className="w-4 h-4" />
              <span>Share</span>
            </Button>
            <Button size="sm" variant="outline" className="flex items-center space-x-1">
              <Twitter className="w-4 h-4" />
              <span>Tweet</span>
            </Button>
          </div>
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: '#374151'
          }}
        />

        {/* Back Button */}
        <div className="pt-8 border-t border-gray-200">
          <Button
            onClick={() => navigate('/news')}
            className="bg-gradient-to-r from-amber-500 to-green-600 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All News
          </Button>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles
              .filter(a => a.category === article.category && a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate(`/news/${relatedArticle.slug}`)}
                >
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <Badge className={`${
                      relatedArticle.category === 'Training' ? 'bg-amber-500' :
                      relatedArticle.category === 'Games' ? 'bg-green-500' : 'bg-green-500'
                    } text-white mb-2 text-xs`}>
                      {relatedArticle.category}
                    </Badge>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </article>

      {/* Add CSS for prose content */}
      <style jsx>{`
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
        }
        .prose ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
});

NewsDetailPage.displayName = 'NewsDetailPage';

export default NewsDetailPage;
