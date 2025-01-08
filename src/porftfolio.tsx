import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const projects = [
  {
    title: "Ikigai",
    description: "Local company website when users can view the products ",
    image: "/ikigai.png",
    link: "https://ikigai-sigma-nine.vercel.app/",
  },
  {
    title: "Game scorer",
    description:
      "Web App to take game scores during basketball,fottball and voleyball matches",
    image: "/gamescorer.jpg",
    link: "https://beni-alexandre.github.io/Game-scorer/",
  },
  {
    title: "Alexuni",
    description: "An imaginary University",
    image: "/alexuni.png",
    link: "https://beni-alexandre.github.io/Alex-University/",
  },
];

function Portfolio() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12 mt-[64px]">
        <h1 className="text-2xl md:text-3xl mb-8">My Portfolio</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Portfolio;
