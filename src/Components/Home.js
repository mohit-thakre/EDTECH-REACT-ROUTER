import React from "react";

const Home = () => {
  return (
    <div>
      <header className=" py-4">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold text-center">
            Welcome to Studynotion
          </h1>
          <p className="text-white text-lg text-center">
            Explore the depths of knowledge with our diverse courses
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-bold mb-2">
              Data Structures and Algorithms (DSA)
            </h3>
            <p className="text-gray-700 mb-2">
              Master the fundamentals of data structures and algorithms to ace
              coding interviews and build efficient software solutions.
            </p>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Enroll Now
            </button>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
            <p className="text-gray-700 mb-2">
              Learn the art of extracting insights from data and making informed
              decisions through data analytics techniques.
            </p>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Enroll Now
            </button>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-700 mb-2">
              Build dynamic and responsive websites using the latest web
              development technologies and frameworks.
            </p>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Enroll Now
            </button>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-bold mb-2">Web Designing</h3>
            <p className="text-gray-700 mb-2">
              Create visually appealing and user-friendly web designs with
              principles of web designing and UI/UX.
            </p>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Why Study with Studynotion?
        </h2>
        <p className="text-lg text-gray-100 text-center leading-relaxed">
          At Studynotion, we are committed to providing high-quality and
          accessible education to empower learners worldwide. Our courses are
          designed and taught by industry experts to ensure that you acquire
          practical skills and knowledge that are relevant in today's
          competitive environment. Whether you're a beginner looking to start
          your learning journey or an experienced professional seeking to
          enhance your skills, Stusynotion offers a diverse range of courses to
          help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default Home;
