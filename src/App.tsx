import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Phone, Calendar, MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileImage from './Mysql.jpeg'
import { useInView } from 'react-intersection-observer';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
  {/* Animated background elements */}
  <div className="container mx-auto px-2 py-16 md:py-16 relative flex-2 items-center justify-between gap-5">
    <motion.div
      className="max-w-2xl flex-1"
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ left: '10%', top: '20%' }}
    />
    <motion.div
      className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      animate={{
        x: [0, -50, 0],
        y: [0, 100, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ right: '10%', top: '10%' }}
    />
  </div>

  {/* Content */}
  <div className="container mx-auto px-6 py-16 md:py-32 relative">
    {/* Constrain the inner content width and center it */}
    <div className="flex items-center justify-between max-w-5xl mx-auto">
      <motion.div
        className="max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            SIVARAMAKRISHNAN S
          </h1>
        </motion.div>
        <motion.div variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">
            Full Stack Developer
          </h2>
        </motion.div>
        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-8 text-gray-300">
          <a href="mailto:sivaramakrishnan3194@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={20} />
            sivaramakrishnan3194@gmail.com
          </a>
          <a href="tel:7092211201" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={20} />
            7092211201
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={20} />
            Chennai, India
          </span>
        </motion.div>
        <motion.p variants={fadeIn} className="text-lg text-gray-300 mb-8 leading-relaxed">
          Full-stack developer with 3.7+ years of experience in React.js, Next.js, PHP, and MySQL, along with recent expertise in .NET Core and Azure DevOps. Proven ability to design and deploy scalable solutions that enhance performance and user satisfaction.
        </motion.p>
        <motion.div variants={fadeIn} className="flex gap-4">
          <a href="https://github.com/siva12443" className="p-2 hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/sivaramakrishnan-s-257294228" className="p-2 hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:sivaramakrishnan3194@gmail.com" className="p-2 hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div 
        className="hidden md:block flex-shrink-0 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative w-64 h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-blue-400/30">
          <img 
            src={ProfileImage} 
            alt="Sivaramakrishnan"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
          />
        </div>
        
        {/* Floating Icon Version */}
        <div className="absolute -bottom-6 right-0 bg-gray-800 p-3 rounded-full border-2 border-blue-400/20">
          <img 
            src={ProfileImage} 
            alt="Icon"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </div>
</header>


      {/*Skill Section */}
      <section className="container mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-12">Skills</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Frontend Card */}
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold mb-4">Frontend</h3>
      <ul className="text-gray-300 list-disc list-inside space-y-2">
        <li>React JS</li>
        <li>React Native</li>
        <li>JavaScript (ES6+)</li>
        <li>Next.js</li>
        <li>HTML5/CSS3</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    {/* Backend Card */}
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold mb-4">Backend</h3>
      <ul className="text-gray-300 list-disc list-inside space-y-2">
        <li>ASP.NET Core (C#)</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>RESTful APIs</li>
      </ul>
    </div>

    {/* Mobile & Languages Card */}
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold mb-4">Mobile & Languages</h3>
      <ul className="text-gray-300 list-disc list-inside space-y-2">
        <li>React Native</li>
        <li>Kivy</li>
        <li>Python</li>
        <li>Java</li>
        <li>C#</li>
        <li>VB.NET</li>
      </ul>
    </div>

    {/* Tools & DevOps Card */}
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
      <ul className="text-gray-300 list-disc list-inside space-y-2">
        <li>Git/GitHub</li>
        <li>Azure DevOps</li>
        <li>Postman</li>
        <li>Azure Hosting</li>
      </ul>
    </div>
  </div>
</section>
      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12">Professional Experience</motion.h2>
          
          <motion.div variants={fadeIn} className="space-y-12">
            {/* Easy2Work */}
            <div className="bg-gray-800/50 rounded-lg p-8">
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                <span className="text-blue-400 flex items-center gap-2">
                  <Building size={18} />
                  Easy2Work
                </span>
                <span className="text-gray-400 flex items-center gap-2">
                  <Calendar size={18} />
                  05/2024 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Led end-to-end development of large-scale applications using React.js, Next.js, and PHP.</li>
                <li>Designed and deployed 3+ major features independently, including a real-time analytics dashboard using Next.js reducing latency by 30%.</li>
                <li>Contributed to the migration of legacy applications to modern web platforms, improving efficiency by 20%.</li>
                <li>Collaborating with cross-functional teams to enhance application performance and usability.</li>
              </ul>
            </div>

            {/* Baleen Media */}
            <div className="bg-gray-800/50 rounded-lg p-8">
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <h3 className="text-2xl font-semibold">Full Stack Developer (Part-Time)</h3>
                <span className="text-blue-400 flex items-center gap-2">
                  <Building size={18} />
                  Baleen Media
                </span>
                <span className="text-gray-400 flex items-center gap-2">
                  <Calendar size={18} />
                  07/2021 – 04/2024
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Optimized Windows LOB application performance by 25% via code refactoring and MySQL query tuning, reducing load times from 8s to 2s.</li>
                <li>Involved in the migration of a Windows LOB (Line of Business) application to mobile, utilizing Next.js and PHP.</li>
                <li>Built a scalable health tracker app using React.js and PHP, adopted by 200+ employees to process 500+ daily wellness data points with 99.9% uptime.</li>
                <li>Created an Enquiry application using React-Native and PHP.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Personal Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">Personal Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Annapoorni Mobile Application</h3>
            <p className="text-gray-300 mb-4">
              Developed using Kivy and Python, enabling students to efficiently access daily canteen meal records. Integrated SQLite for data management, reducing manual errors and improving record accuracy.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Apperture Quiz Mobile Application</h3>
            <p className="text-gray-300 mb-4">
              Built a large-scale MCQ platform for 1,000+ students using React Native and local storage for real-time updates without internet connectivity.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Sardar Mobile Application</h3>
            <p className="text-gray-300 mb-4">
              Enabled 5,000+ event registrations with one-time entry validation using React Native and Google Sheets API, reducing administrative workload by 60%.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Construction Website</h3>
            <p className="text-gray-300 mb-4">
              Modern, responsive construction company website with interactive UI using React.js (Vite) and CSS3.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates & Education Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/50">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Certificates</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-blue-400">•</span>
                <div>
                  <h3 className="font-semibold">Advanced React</h3>
                  <p className="text-gray-400">Coursera – Meta</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-400">•</span>
                <div>
                  <h3 className="font-semibold">Crash Course on Python</h3>
                  <p className="text-gray-400">Coursera - University Of Michigan</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-400">•</span>
                <div>
                  <h3 className="font-semibold">Introduction to Web Development</h3>
                  <p className="text-gray-400">Coursera - IBM</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-400">•</span>
                <div>
                  <h3 className="font-semibold">Getting Started with Git and GitHub</h3>
                  <p className="text-gray-400">Coursera - IBM</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">B.Sc. Computer Science</h3>
                <p className="text-gray-400">A.M. Jain College</p>
                <p className="text-gray-400">2021 – 2024</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Higher Secondary Education</h3>
                <p className="text-gray-400">Avichi Higher Secondary School</p>
                <p className="text-gray-400">2019 – 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
        <div className="max-w-2xl">
          <p className="text-gray-300 mb-8">
            I'm currently open to new opportunities. Feel free to reach out if you'd like to discuss potential collaborations.
          </p>
          <a 
            href="mailto:sivaramakrishnan3194@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>© 2025 • Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;