import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6 mt-20">
      <div className="container-x grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-extrabold text-lg mb-3">
            IT<span className="text-blue-500">Startup</span>
          </h3>
          <p className="text-sm text-gray-400">Building digital products that matter.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">hello@itstartup.com</p>
          <p className="text-sm">+880 123 456 789</p>
        </div>
      </div>
      <div className="container-x border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ITStartup. All rights reserved.
      </div>
    </footer>
  );
}