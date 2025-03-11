import React from 'react';
import { Users, Calendar, GraduationCap, BookOpen, Heart, Star, Shield, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-emerald-600" />,
      title: "Qualified Teachers",
      description: "Learn from certified Qur'an teachers with years of experience"
    },
    {
      icon: <Calendar className="h-8 w-8 text-emerald-600" />,
      title: "Flexible Schedules",
      description: "Choose from multiple time slots that fit your daily routine"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Personalized Learning",
      description: "One-on-one and group classes tailored to your needs"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
      title: "Comprehensive Curriculum",
      description: "Structured learning path from basics to advanced studies"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Compassion",
      description: "Teaching with patience and understanding"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Excellence",
      description: "Striving for the highest standards"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "Upholding Islamic principles"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Achievement",
      description: "Celebrating student success"
    }
  ];

  return (
    <section className="py-20 geometric-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Al Qalam Institute?</h2>
          <p className="text-lg text-gray-600">Experience excellence in Qur'anic education through our unique features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600">Guided by Islamic principles in everything we do</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                {value.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;