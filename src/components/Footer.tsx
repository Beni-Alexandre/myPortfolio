import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
