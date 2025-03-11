import React from 'react';
import { BookOpen, Award, Star, GraduationCap, Clock, Users, CheckCircle } from 'lucide-react';

const CourseOverview = () => {
  const courses = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Basic Recitation",
      description: "Master the fundamentals of Qur'anic reading",
      duration: "3 months",
      features: [
        { icon: <Clock className="h-4 w-4" />, text: "2 classes per week" },
        { icon: <Users className="h-4 w-4" />, text: "Small group sessions" },
        { icon: <CheckCircle className="h-4 w-4" />, text: "Basic Arabic included" }
      ]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Tajweed Mastery",
      description: "Perfect your Qur'anic pronunciation",
      duration: "6 months",
      features: [
        { icon: <Clock className="h-4 w-4" />, text: "3 classes per week" },
        { icon: <Users className="h-4 w-4" />, text: "Individual attention" },
        { icon: <CheckCircle className="h-4 w-4" />, text: "Certification included" }
      ]
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Hifz Program",
      description: "Memorize the Holy Qur'an with guidance",
      duration: "2-3 years",
      features: [
        { icon: <Clock className="h-4 w-4" />, text: "Daily sessions" },
        { icon: <Users className="h-4 w-4" />, text: "One-on-one mentoring" },
        { icon: <CheckCircle className="h-4 w-4" />, text: "Structured revision" }
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Individual Madrasa",
      description: "Personalized Islamic education program",
      duration: "Flexible",
      features: [
        { icon: <Clock className="h-4 w-4" />, text: "Flexible schedule" },
        { icon: <Users className="h-4 w-4" />, text: "Custom curriculum" },
        { icon: <CheckCircle className="h-4 w-4" />, text: "Progress tracking" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-emerald-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 islamic-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600">Comprehensive programs designed for your spiritual journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="text-sm text-emerald-600 font-medium mb-4">
                  Duration: {course.duration}
                </div>
                <div className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-emerald-500 mr-2">{feature.icon}</span>
                      {feature.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-emerald-50 hover:bg-emerald-100 transition-colors">
                <button className="w-full text-emerald-600 font-medium hover:text-emerald-700 transition flex items-center justify-center">
                  Learn More
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;