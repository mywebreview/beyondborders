import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StudyAbroad</h3>
            <p className="text-gray-400">
              Your trusted partner for international education in the UK and Canada.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link href="/enroll" className="text-gray-400 hover:text-white">Enroll</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/programs?country=uk" className="text-gray-400 hover:text-white">Study in UK</Link></li>
              <li><Link href="/programs?country=canada" className="text-gray-400 hover:text-white">Study in Canada</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@studyabroad.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Form</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} StudyAbroad Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
