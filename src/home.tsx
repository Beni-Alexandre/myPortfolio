import Header from "./components/Header";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Footer from "./components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12 mt-200px">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay-1">
            A passionate frontend developer creating stunning web experiences
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors animate-fade-in-delay-2"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full mx-auto md:mx-0 shadow-lg"
            />
          </div>
          <div>
            <p className="mb-4">
              I'm a frontend developer with X years of experience, specializing
              in creating responsive and user-friendly web applications. My
              expertise includes React, Next.js, and modern CSS frameworks like
              Tailwind CSS.
            </p>
            <p className="mb-6">
              When I'm not coding, you can find me [your hobbies or interests].
              I'm passionate about [something you're passionate about] and
              always eager to learn new technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Twitter className="w-6 h-6" />
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
