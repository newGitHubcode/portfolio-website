export default function Footer() {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <span className="ml-3 text-xl">
                        Portfolio
                    </span>
                </a>

                <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
                    @ {new Date().getFullYear()} 
                </p>
                <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
                    Something here?
                </p>
            </div>
        </footer>
    );
}
