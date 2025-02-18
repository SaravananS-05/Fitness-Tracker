import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faChartBar, 
  faClipboardList, 
  faUtensils, 
  faCog, 
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex font-roboto">
      {/* Fixed Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-gray-100 py-4 shadow-md">
        <nav className="flex flex-col h-full px-4">
          <div>
            <h1 className="text-3xl font-bold mt-6 mb-6 text-teal-400">Fitness Tracker</h1>
            <Link 
              to="/home" 
              className="flex items-center py-3 px-4 mt-20 rounded hover:bg-gray-700 transition-colors text-lg"
            >
              <FontAwesomeIcon icon={faHome} className="h-6 w-6 mr-2 text-teal-400" />
              Home
            </Link>
            <Link 
              to="/exercises" 
              className="flex items-center py-3 px-4 rounded hover:bg-gray-700 transition-colors text-lg"
            >
              <FontAwesomeIcon icon={faClipboardList} className="h-6 w-6 mr-2 text-teal-400" />
              Exercises
            </Link>
            <Link 
              to="/nutrition" 
              className="flex items-center py-3 px-4 rounded hover:bg-gray-700 transition-colors text-lg"
            >
              <FontAwesomeIcon icon={faUtensils} className="h-6 w-6 mr-2 text-teal-400" />
              Nutrition
            </Link>
            <Link 
              to="/progress" 
              className="flex items-center py-3 px-4 rounded hover:bg-gray-700 transition-colors text-lg"
            >
              <FontAwesomeIcon icon={faChartBar} className="h-6 w-6 mr-2 text-teal-400" />
              Progress
            </Link>
            <Link 
              to="/settings" 
              className="flex items-center py-3 px-4 rounded hover:bg-gray-700 transition-colors text-lg"
            >
              <FontAwesomeIcon icon={faCog} className="h-6 w-6 mr-2 text-teal-400" />
              Settings
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center py-3 px-4 mt-auto rounded hover:bg-[rgba(107,105,206,0.49)] transition-colors text-lg w-full text-left"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="h-6 w-6 mr-2 text-teal-400" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col flex-grow justify-between items-center text-center ml-64">
        <div>
          <h2 className="text-5xl font-bold text-teal-400 mb-4">Welcome to Fitness Tracker</h2>
          <p className="text-xl text-gray-300 mb-8">
            Track your workouts, monitor your nutrition, and stay motivated with our community challenges.
          </p>
        </div>

        {/* Extra Content Section */}
        <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-8">
          {/* Workout Highlights */}
          <section className="text-left">
            <h3 className="text-3xl font-bold text-teal-400 mb-4">Workout Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-xl text-teal-400 font-semibold mb-2">HIIT Session</h4>
                <p className="text-gray-300">
                  Burn calories fast with a high intensity interval training session.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-xl text-teal-400 font-semibold mb-2">Strength Training</h4>
                <p className="text-gray-300">
                  Build muscle and boost your metabolism with targeted exercises.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-xl text-teal-400 font-semibold mb-2">Yoga Flow</h4>
                <p className="text-gray-300">
                  Improve flexibility and reduce stress with a calming yoga flow.
                </p>
              </div>
            </div>
          </section>

          {/* Nutrition Advice */}
          <section className="text-left">
            <h3 className="text-3xl font-bold text-teal-400 mb-4">Nutrition Advice</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Stay hydrated: Drink at least 8 glasses of water daily.</li>
              <li>Include protein in every meal to support muscle recovery.</li>
              <li>Eat plenty of fruits and vegetables for essential vitamins and minerals.</li>
              <li>Avoid processed foods and opt for whole, natural options.</li>
            </ul>
          </section>

          {/* Community Challenges */}
          <section className="text-left">
            <h3 className="text-3xl font-bold text-teal-400 mb-4">Community Challenges</h3>
            <p className="text-gray-300 mb-4">
              Join our weekly challenges to stay motivated and compete with other fitness enthusiasts.
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>7-Day Step Challenge: Walk 10,000 steps daily.</li>
              <li>30-Minute Workout Challenge: Complete a 30-minute workout session every day.</li>
              <li>Healthy Eating Challenge: Track your meals and maintain a balanced diet for a week.</li>
            </ul>
          </section>
          
          {/* User Progress */}
          <section className="text-left">
            <h3 className="text-3xl font-bold text-teal-400 mb-4">User Progress</h3>
            <p className="text-gray-300 mb-4">
              Monitor your progress with detailed analytics and insights.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <p className="text-teal-400 font-semibold">Current Streak: 5 days</p>
              <p className="text-gray-300">Calories Burned This Week: 3500 kcal</p>
              <p className="text-gray-300">Total Workouts: 12</p>
            </div>
          </section>

          {/* Success Stories */}
          <section className="text-left">
            <h3 className="text-3xl font-bold text-teal-400 mb-4">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-xl text-teal-400 font-semibold mb-2">John's Transformation</h4>
                <p className="text-gray-300">
                  John lost 20lbs and gained confidence through consistent workouts and a balanced diet.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-xl text-teal-400 font-semibold mb-2">Sarah's Journey</h4>
                <p className="text-gray-300">
                  Sarah improved her endurance and overall health by joining our community challenges.
                </p>
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="text-left">
            <h3 className="text-3xl font-bold text-teal-400 mb-4">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-xl text-teal-400 font-semibold mb-2">Marathon Prep</h4>
                <p className="text-gray-300">
                  Get ready for the upcoming marathon with our endurance training sessions.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-xl text-teal-400 font-semibold mb-2">Yoga Retreat</h4>
                <p className="text-gray-300">
                  Join our weekend retreat to relax, rejuvenate, and improve your flexibility.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-xl text-teal-400 font-semibold mb-2">Nutrition Workshop</h4>
                <p className="text-gray-300">
                  Learn how to create balanced meals with expert advice from top nutritionists.
                </p>
              </div>
            </div>
          </section>

          {/* Trainer Spotlight */}
          <section className="text-left">
            <h3 className="text-3xl font-bold text-teal-400 mb-4">Trainer Spotlight</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg shadow flex items-center">
                <img src="https://via.placeholder.com/80" alt="Trainer" className="w-20 h-20 rounded-full mr-4" />
                <div>
                  <h4 className="text-xl text-teal-400 font-semibold mb-1">Alex Johnson</h4>
                  <p className="text-gray-300">Strength and conditioning specialist with 10+ years of experience.</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow flex items-center">
                <img src="https://via.placeholder.com/80" alt="Trainer" className="w-20 h-20 rounded-full mr-4" />
                <div>
                  <h4 className="text-xl text-teal-400 font-semibold mb-1">Emily Davis</h4>
                  <p className="text-gray-300">Certified yoga instructor and wellness coach passionate about holistic health.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="w-full bg-gray-800 text-gray-100 py-4 mt-8">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <p>&copy; 2025 Fitness Tracker. All rights reserved.</p>
            <div className="space-x-4">
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
