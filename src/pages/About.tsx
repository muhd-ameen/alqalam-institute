import React from 'react';
import { Users, Book, Heart, Award } from 'lucide-react';

const About = () => {
  const teachers = [
    {
      name: "Ustadh Ahmad Hassan",
      role: "Senior Quran Instructor",
      specialization: "Tajweed & Qira'at",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      name: "Ustadha Sarah Rahman",
      role: "Hifz Program Director",
      specialization: "Quran Memorization",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Ustadh Mohammed Ali",
      role: "Arabic Language Expert",
      specialization: "Classical Arabic",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16">
      {/* Mission Section */}
      <section className="py-20 calligraphy-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "Connecting Hearts to the Qur'an through excellence in education, 
              fostering a deep understanding and love for Allah's words in every student."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Book className="h-8 w-8" />, title: "Quality Education" },
              { icon: <Heart className="h-8 w-8" />, title: "Nurturing Environment" },
              { icon: <Users className="h-8 w-8" />, title: "Community Focus" },
              { icon: <Award className="h-8 w-8" />, title: "Islamic Values" }
            ].map((item, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teachers</h2>
            <p className="text-lg text-gray-600">Learn from experienced and qualified instructors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{teacher.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{teacher.role}</p>
                  <p className="text-gray-600">{teacher.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Al Qalam Institute has been at the forefront of 
                Islamic education, combining traditional teaching methods with modern 
                educational approaches. Our journey began with a simple mission: to 
                make Qur'anic education accessible to everyone while maintaining the 
                highest standards of teaching.
              </p>
              <p className="text-gray-600">
                Over the years, we have helped thousands of students develop a 
                deeper connection with the Qur'an, fostering an environment of 
                learning, growth, and spiritual development.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80" 
                  alt="Islamic Architecture" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;