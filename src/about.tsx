import { FileDown } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12 mt-[64px]">
        <h1 className="text-2xl md:text-3xl  mb-8">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/mypic02.jpg"
              alt="Alexandre"
              width={600}
              height={300}
              className="rounded-lg shadow-lg "
            />
            <h2 className="  font-bold ">Alexandre HONFOGA</h2>
            <p className="">Frontend Developer</p>
          </div>

          <div>
            <p className="mb-4">
              Hello! I'm Alexandre, a passionate frontend developer with 3 years
              of experience in creating beautiful and functional web
              applications. I specialize in React, Next.js, and modern CSS
              frameworks like Tailwind CSS.
            </p>
            <p className="mb-4">
              My journey in web development started in 2022. Since then, I've
              worked on a variety of projects, from small business websites to
              large-scale web applications.
            </p>
            <p className="mb-4">
              When I'm not coding, you can find me playing basketball. I believe
              in continuous learning and staying up-to-date with the latest web
              technologies and best practices.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React, Next.js</li>
              <li>Tailwind CSS, Styled Components</li>
              <li>Git, GitHub</li>
              <li>Responsive Web Design</li>
              <li>Web Accessibility</li>
              <li>Java</li>
            </ul>
            <a
              href="/your_name_cv.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors mt-6"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
