import React from 'react';
import { Clock, Users, CheckCircle, BookOpen, Award, Star, GraduationCap } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Basic Recitation",
      icon: <BookOpen className="h-12 w-12" />,
      description: "Master the fundamentals of Qur'anic reading with proper pronunciation and basic rules.",
      duration: "3 months",
      schedule: "2 classes per week",
      features: [
        "Introduction to Arabic alphabet",
        "Basic pronunciation rules",
        "Short surah memorization",
        "Fundamental Tajweed rules"
      ],
      outcomes: [
        "Read Qur'an with basic proficiency",
        "Understand basic Arabic letters",
        "Memorize selected short surahs",
        "Practice daily recitation"
      ]
    },
    {
      title: "Tajweed Mastery",
      icon: <Award className="h-12 w-12" />,
      description: "Perfect your Qur'anic pronunciation with advanced Tajweed rules and practical application.",
      duration: "6 months",
      schedule: "3 classes per week",
      features: [
        "Advanced pronunciation techniques",
        "Detailed Tajweed rules",
        "Practical application",
        "Regular assessments"
      ],
      outcomes: [
        "Master Tajweed rules",
        "Improve recitation quality",
        "Gain certification",
        "Teach basic Tajweed"
      ]
    },
    {
      title: "Hifz Program",
      icon: <Star className="h-12 w-12" />,
      description: "Comprehensive program for memorizing the entire Qur'an with proper understanding.",
      duration: "2-3 years",
      schedule: "Daily sessions",
      features: [
        "Structured memorization plan",
        "Regular revision sessions",
        "One-on-one mentoring",
        "Progress tracking"
      ],
      outcomes: [
        "Complete Qur'an memorization",
        "Strong revision technique",
        "Teaching capability",
        "Lifetime certification"
      ]
    },
    {
      title: "Individual Madrasa",
      icon: <GraduationCap className="h-12 w-12" />,
      description: "Personalized Islamic education program tailored to your learning goals and schedule.",
      duration: "Flexible",
      schedule: "Custom schedule",
      features: [
        "Customized curriculum",
        "Flexible timing",
        "Personal attention",
        "Progress reports"
      ],
      outcomes: [
        "Achieve personal goals",
        "Balanced learning approach",
        "Strong Islamic foundation",
        "Continuous growth"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 calligraphy-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of Qur'anic education programs designed 
            to meet your learning needs and spiritual goals.
          </p>
        </div>
      </section>

      {/* Detailed Course Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
                      <p className="text-gray-600 mb-6">{course.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Features</h3>
                          <ul className="space-y-3">
                            {course.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Outcomes</h3>
                          <ul className="space-y-3">
                            {course.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-6 items-center">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-2 text-emerald-500" />
                          Duration: {course.duration}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-2 text-emerald-500" />
                          {course.schedule}
                        </div>
                        <button className="ml-auto bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;