function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
