import { Link } from "react-router-dom";

export function Homepage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-blue-100">
            <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center max-w-lg">
                <img src="/logo.svg" alt="Brain Logo" className="h-16 mb-4" />
                <h1 className="text-4xl font-bold text-purple-700 mb-2">Welcome to Brain</h1>
                <p className="text-gray-600 text-center mb-6">
                    Collect, organize, and share your favorite YouTube videos and Tweets and many more to add in one place.<br />
                    Sign up to get started or sign in if you already have an account!
                </p>
                <div className="flex gap-4">
                    <Link to="/signup">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition cursor-pointer">Sign Up</button>
                    </Link>
                    <Link to="/signin">
                        <button className="bg-gray-200 text-purple-700 px-6 py-2 rounded hover:bg-gray-300 transition cursor-pointer">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}