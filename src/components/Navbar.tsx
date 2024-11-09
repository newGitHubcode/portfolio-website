import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-black p-4 fixed w-full z-10 top-0 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg-2 font-bold">
                    <Link href="/">Portfolio</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="#about" className="text-gray-300 hover:text-white">
                        About
                    </Link>
                    <Link href="#skills" className="text-gray-300 hover:text-white">
                        Skills
                    </Link>
                    <Link href="#projects" className="text-gray-300 hover:text-white">
                        Projects
                    </Link>
                    <Link href="#feedback" className="text-gray-300 hover:text-white">
                        Feedback
                    </Link>
                    <Link href="#contact" className="text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
