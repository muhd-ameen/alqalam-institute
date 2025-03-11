import React from 'react';
import { BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = {
    guides: [
      {
        title: "Beginner's Guide to Tajweed",
        description: "Essential rules for proper Qur'anic recitation",
        type: "PDF Guide",
        size: "2.5 MB"
      },
      {
        title: "Memorization Techniques",
        description: "Effective methods for Qur'an memorization",
        type: "PDF Guide",
        size: "1.8 MB"
      },
      {
        title: "Arabic Letter Forms",
        description: "Complete guide to Arabic letter variations",
        type: "PDF Guide",
        size: "3.2 MB"
      }
    ],
    videos: [
      {
        title: "Introduction to Tajweed",
        duration: "15 minutes",
        thumbnail: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80"
      },
      {
        title: "Daily Recitation Practice",
        duration: "20 minutes",
        thumbnail: "https://images.unsplash.com/photo-1584286595398-a59511e3c1c3?auto=format&fit=crop&q=80"
      },
      {
        title: "Understanding Makharij",
        duration: "25 minutes",
        thumbnail: "https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&q=80"
      }
    ],
    articles: [
      {
        title: "The Importance of Tajweed",
        author: "Ustadh Ahmad Hassan",
        readTime: "5 min read"
      },
      {
        title: "Building a Daily Qur'an Routine",
        author: "Ustadha Sarah Rahman",
        readTime: "7 min read"
      },
      {
        title: "Understanding Qur'anic Arabic",
        author: "Ustadh Mohammed Ali",
        readTime: "6 min read"
      }
    ]
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 calligraphy-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Learning Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our collection of educational materials to support your Qur'anic studies
          </p>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Study Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{guide.type} • {guide.size}</span>
                      <button className="text-emerald-600 hover:text-emerald-700 flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Video className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.duration}</p>
                  <button className="mt-4 text-emerald-600 hover:text-emerald-700 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">By {article.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <button className="text-emerald-600 hover:text-emerald-700">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;