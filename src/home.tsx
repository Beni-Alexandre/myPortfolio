import Header from "./components/Header";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Footer from "./components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-12 mt-[40px] min-h-screen lg:min-h-screen overflow-y-auto  ">
        <div className="md:w-1/2 text-center md:text-left mb-5">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-500">ALEXANDRE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay-1">
            A passionate frontend developer creating stunning web experiences.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full hover:bg-indigo-800 transition-colors animate-fade-in-delay-2"
          >
            View My Works
            <ArrowRight className="motion-safe:animate-ping  ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="md:w-1/2 animate-fade-in-right">
          <div className="grid place-items-center mb-5">
            <img
              src="./mypic06.jpg"
              alt="alexandre"
              width={300}
              height={400}
              className="rounded-full mx-auto md:mx-0 shadow-lg img01 text-center"
            />
          </div>
          <div className="flex flex-col items-center ">
            <p className="mb-4    dark:text-slate-400">
              I am a passionate and driven Frontend Developer with over 2 years
              of experience in creating dynamic and responsive web applications.
              I specialize in transforming complex requirements into intuitive
              and visually appealing user interfaces. My technical expertise
              spans HTML, JavaScript, React, and Next.js, along with modern CSS
              frameworks like Tailwind CSS and Bootstrap, which I leverage to
              build high-quality and scalable web solutions.
            </p>

            <div className="flex justify-center  space-x-4">
              <a
                href="https://github.com/Beni-Alexandre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/honfoga-alexandre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
