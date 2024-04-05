import { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send a request to your server to authenticate the user
        // For demonstration, we'll just show a console message based on some mock authentication logic
        if (email === "example@example.com" && password === "password") {
            console.log("Login successful!");
            // Redirect to another page upon successful login
            router.push('/dashboard'); // Assuming you have a dashboard page
        } else {
            console.log("Invalid email or password. Please try again.");
            // Display error message to the user or perform other actions upon failed login
        }
    };

    return (
        <div className="max-w-md w-full bg-green-50 p-8 rounded shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-green-700 text-sm font-bold mb-2">Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:border-green-500" placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-green-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:border-green-500" placeholder="Enter your password" required />
                </div>
                <div className="mb-4">
                    <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">Login</button>
                </div>
            </form>
            <div className="text-sm text-green-600">
                <p>Don't have an account? <a href="#" className="text-green-500 hover:underline">Sign up</a></p>
                <p>Forgot your password? <a href="#" className="text-green-500 hover:underline">Reset it</a></p>
            </div>
        </div>
    );
};

export default Login;
