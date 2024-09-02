import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">My portfolio</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="#about" className="text-gray-300 hover:text-white">
                        About
                    </Link>
                    <Link href="#projects" className="text-gray-300 hover:text-white">
                        Projects
                    </Link>
                    <Link href="#skills" className="text-gray-300 hover:text-white">
                        Skills
                    </Link>
                    <Link href="#testimonials" className="text-gray-300 hover:text-white">
                        Testimonials
                    </Link>
                    <Link href="#contact" className="text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}