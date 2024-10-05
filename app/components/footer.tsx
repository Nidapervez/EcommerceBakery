export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row md:items-start">
        <div className="w-full md:w-1/4 flex-shrink-0 mx-auto text-center md:text-left mb-10 md:mb-0">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
            <img
              src="/images/nidz.jpg" // Make sure this path is correct
              alt="NidzWeb Logo"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
            <span className="ml-3 text-xl">NidzWeb</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Your go-to place for web solutions.
          </p>
        </div>
        
        <div className="flex-grow flex flex-wrap md:pl-20">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LINKS
            </h2>
            <nav className="flex space-x-4 mb-10">
              <li>
                <a 
                  href="https://portfolio-nida-pervezs-projects.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-800"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Nidapervez" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-800"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/nida-pervez-8468202b6/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-800"
                >
                  LinkedIn
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Contact: <a href="mailto:nnpervez333@gmail.com" className="text-gray-600 hover:text-gray-800">nnpervez333@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
