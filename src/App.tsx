import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className={`font-bold text-lg md:text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Genius Study Circle
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-indigo-500 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              Free Trial
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl p-6 mt-2 absolute left-4 right-4">
            {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-full font-semibold"
            >
              Book Free Trial
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>📚</div>
        <div className="absolute top-1/3 right-[15%] text-3xl animate-bounce" style={{ animationDelay: '1s' }}>🎓</div>
        <div className="absolute bottom-1/4 left-[20%] text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>✨</div>
        <div className="absolute top-[60%] right-[10%] text-4xl animate-bounce" style={{ animationDelay: '2s' }}>🚀</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="text-yellow-400">🎉</span>
            <span className="text-white/90 text-sm font-medium">Targeted Revision Sessions Based on Mock Exam Feedback</span>
            <span className="text-yellow-400">🎉</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            <span className="block">Online 1-to-1</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Tailored Tuition
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Prepare for main exams with confidence. Learn smarter, save more & achieve top grades with Genius Study Circle.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['11+', 'GCSE', 'A-Level', 'Higher SQA'].map((level) => (
              <span
                key={level}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium"
              >
                {level}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:shadow-yellow-500/30 transition-all transform hover:scale-105"
            >
              📞 Book FREE Trial Today
            </a>
            <a
              href="#services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
            >
              Explore Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              15+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              DBS-Checked Tutors
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Trial Available
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

function Services() {
  const subjects = [
    { name: 'Mathematics', icon: '📐', color: 'from-blue-500 to-indigo-600' },
    { name: 'Further Maths', icon: '🔢', color: 'from-purple-500 to-indigo-600' },
    { name: 'Physics', icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
    { name: 'Chemistry', icon: '🧪', color: 'from-green-500 to-teal-600' },
    { name: 'Computer Science', icon: '💻', color: 'from-orange-500 to-red-600' },
    { name: 'Python Programming', icon: '🐍', color: 'from-yellow-500 to-orange-600' },
  ];

  const levels = [
    { name: '11+ Preparation', desc: 'Build strong foundations for grammar and independent school entrance exams', icon: '🎯' },
    { name: 'GCSE', desc: 'Comprehensive coverage of all exam boards with past paper practice', icon: '📖' },
    { name: 'A-Level', desc: 'Deep subject mastery with challenging problem-solving techniques', icon: '🏆' },
    { name: 'Higher SQA', desc: 'Scottish qualification support with tailored exam strategies', icon: '🎓' },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Subjects We Teach
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Personalised lessons, doubt-clearing, past papers & exam feedback across all major subjects
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${subject.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                {subject.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{subject.name}</h3>
            </div>
          ))}
        </div>

        {/* Levels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level) => (
            <div
              key={level.name}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{level.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{level.name}</h3>
              <p className="text-gray-600 text-sm">{level.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🔥 Affordable Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Quality education shouldn't break the bank. Invest in your future today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* GCSE Plan */}
          <div className="relative bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              GCSE
            </div>
            <div className="pt-4">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-extrabold text-gray-900">£30</span>
                <span className="text-gray-500">/session</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for GCSE students aiming for top grades</p>
              <ul className="space-y-3 mb-8">
                {[
                  'All GCSE subjects covered',
                  'Personalised lesson plans',
                  'Past paper practice',
                  'Mock exam feedback sessions',
                  'Doubt-clearing support',
                  'Flexible scheduling',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* A-Level Plan */}
          <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl shadow-indigo-500/20 hover:shadow-3xl transition-all duration-300 transform md:-translate-y-4">
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              ⭐ A-Level
            </div>
            <div className="pt-4">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-extrabold">£35</span>
                <span className="text-white/70">/session</span>
              </div>
              <p className="text-white/80 mb-6">Advanced tuition for A-Level excellence</p>
              <ul className="space-y-3 mb-8">
                {[
                  'All A-Level subjects covered',
                  'Advanced problem-solving',
                  'Exam technique mastery',
                  'Targeted revision sessions',
                  'University prep guidance',
                  'Priority scheduling',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/90">
                    <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-white text-indigo-700 py-3.5 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          * All sessions are 1 hour. Free trial lesson available for new students.
        </p>
      </div>
    </section>
  );
}

function ReferralBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-5xl mb-4 block">🎁</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Referral Bonus!
        </h2>
        <p className="text-xl text-gray-800 mb-2">
          Refer a friend to <strong>Genius Study Circle</strong>
        </p>
        <p className="text-2xl font-bold text-indigo-700 mb-2">
          💷 Get £20 OFF your next lesson!
        </p>
        <p className="text-gray-700 text-lg">
          (Your friend benefits too!)
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl"
        >
          Refer a Friend Now →
        </a>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: '👨‍🏫',
      title: '15+ Years Experience',
      desc: 'Our tutors bring over 15 years of dedicated teaching experience to every session.',
    },
    {
      icon: '🎯',
      title: 'Personalised Lessons',
      desc: 'Every lesson is tailored to your learning style, pace, and specific needs.',
    },
    {
      icon: '📝',
      title: 'Past Papers & Exam Feedback',
      desc: 'Extensive practice with past papers and detailed feedback on mock exams.',
    },
    {
      icon: '🛡️',
      title: 'DBS-Checked Tutors',
      desc: 'All our tutors are fully DBS-checked for your peace of mind.',
    },
    {
      icon: '💡',
      title: 'Doubt-Clearing Sessions',
      desc: 'Dedicated time to address every question and strengthen understanding.',
    },
    {
      icon: '🚀',
      title: 'Limited Slots Available',
      desc: 'We maintain small student numbers to ensure quality attention for each learner.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Genius Study Circle Difference
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We don't just teach — we inspire confidence and build foundations for lifelong success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RevisionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-48 h-48 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-5xl mb-4 block">🐣✨</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Prepare for Main Exams with Confidence
        </h2>
        <p className="text-xl text-white/80 mb-2">
          📚 Targeted Revision Sessions based on Mock Exam Feedback
        </p>
        <p className="text-lg text-white/70">
          🚀 Learn smarter, save more & achieve top grades!
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book Your FREE Trial Today
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take the first step towards academic excellence. Contact us now!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <a href="tel:07576996755" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900 font-semibold">07576 996755</p>
                  </div>
                </a>

                <a href="tel:07523645566" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone (Alt)</p>
                    <p className="text-gray-900 font-semibold">07523 645566</p>
                  </div>
                </a>

                <a href="mailto:info@geniusstudycircle.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-semibold">info@geniusstudycircle.com</p>
                  </div>
                </a>

                <a href="https://www.geniusstudycircle.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="text-gray-900 font-semibold">www.geniusstudycircle.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:07576996755"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/447576996755"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="07XXX XXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Level of Study</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white">
                  <option value="">Select level...</option>
                  <option value="11+">11+ Preparation</option>
                  <option value="gcse">GCSE</option>
                  <option value="alevel">A-Level</option>
                  <option value="sqa">Higher SQA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your learning goals..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:scale-[1.02]"
              >
                Book FREE Trial Lesson 🎓
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">Genius Study Circle</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Online 1-to-1 tailored tuition for 11+, GCSE, A-Level & Higher SQA. 
              15+ years of teaching experience with DBS-checked tutors.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/447576996755" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:info@geniusstudycircle.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:07576996755" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Subjects</h4>
            <ul className="space-y-3">
              {['Mathematics', 'Further Maths', 'Physics', 'Chemistry', 'Computer Science', 'Python'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Genius Study Circle. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            🌐 www.geniusstudycircle.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-['Poppins',sans-serif] antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <ReferralBanner />
      <WhyChooseUs />
      <RevisionBanner />
      <Contact />
      <Footer />
    </div>
  );
}
