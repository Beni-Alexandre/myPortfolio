import { FileDown, Briefcase, GraduationCap } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

const experiences: Experience[] = [
  {
    title: "IT Support Intern",
    company: "IITA Benin",
    period: "Jul2023 - Aug2023",
    description:
      "Assited users in resolving technical issues, maintaining IT infrastructure,  and ensuring that technology resources are working effectively and efficiently.",
  },
  {
    title: " Senior Frontend developer",
    company: "IKIGAI Benin",
    period: "Nov2024 - Feb 2025",
    description: "Developed and maintained client website",
  },
];

const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science ",
    institution: "KAAF University Ghana",
    year: "Sep2022 - Nov2026 ",
  },
];

function About() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12 mt-[64px]">
        <h1 className="text-2xl md:text-3xl  mb-8">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center  ">
          <div>
            <img
              src="/mypic02.jpg"
              alt="Alexandre"
              width={600}
              height={300}
              className="rounded-lg shadow-lg animate-fade-in  "
            />
            <h2 className="  font-bold animate-fade-in-delay-1  ">
              Alexandre HONFOGA
            </h2>
            <p className="animate-fade-in-delay-1 mb-10">Frontend Developer</p>

            <div className="animate-fade-in-delay-1">
              <p className="mb-4">
                Hello! I'm Alexandre, a passionate frontend developer with 3
                years of experience in creating beautiful and functional web
                applications. I specialize in React, Next.js, and modern CSS
                frameworks like Tailwind CSS.
              </p>
              <p className="mb-4">
                My journey in web development started in 2022. Since then, I've
                worked on a variety of projects, from small business websites to
                large-scale web applications.
              </p>
              <p className="mb-4">
                When I'm not coding, you can find me playing basketball. I
                believe in continuous learning and staying up-to-date with the
                latest web technologies and best practices.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-delay-2">
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
              href="/Alexandre_Resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors mt-6"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </a>
            <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
              <Briefcase className="mr-2" /> Experience
            </h2>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.company} | {exp.period}
                </p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
            <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.institution} | {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
