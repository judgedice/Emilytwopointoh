import { Link } from 'react-router-dom';

export function About() {
  const skills = [
    'UX Design',
    'AI Design',
    'Design Strategy',
    'Team Leadership',
    'Product Design',
    'Design Systems',
    'User Research',
    'Wireframing & Prototyping',
  ];

  const highlights = [
    'Led the UX for AI guild within IBM and co-wrote the UX for AI Principles',
    'Presenter at UXPA on the role of AI in UX (2021, 2024)',
    'Invitation to the Advisory Board - Women in Leadership, Pompea College of Business, University of New Haven',
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl mb-6">About</h2>
            <p className="text-lg text-gray-600 mb-6">
              I build high-performing, global design teams grounded in trust, collaboration, and shared purpose. I love helping designers reach their full potential and creating inclusive spaces where creativity, accountability, and innovation thrive.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With deep expertise in UX, AI design, and design systems, I turn complex challenges into clear, scalable solutions that make a real impact for both users and the business. I've led cross-functional teams, partnered closely with product and engineering, and shaped end-to-end design strategies that scale across global organizations.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I'm looking for a senior design leadership role where I can help shape product vision, elevate design maturity, and strengthen organizational impact while continuing to grow as a design leader.
            </p>
            <Link
              to="/management-strategy"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-black hover:bg-blue-200 transition-all duration-500 mt-2"
            >
              <span className="text-lg">My Management Strategy</span>
              <span className="text-xl">→</span>
            </Link>
          </div>

          <div>
            <h3 className="text-2xl mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="p-4 border border-gray-200 hover:border-black transition-colors"
                >
                  <p className="text-sm tracking-wide">{skill}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl mb-6">Highlights</h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700 pl-4 border-l-2 border-gray-300">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}