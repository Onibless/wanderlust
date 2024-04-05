// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const Login: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();

//     useEffect(() => {
//         // Prefetch the dashboard page to mark the component as client-side
//         router.prefetch('/dashboard');
//     }, []);

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         // Here you would typically send a request to your server to authenticate the user
//         // For demonstration, we'll just show a console message based on some mock authentication logic
//         if (email === "example@example.com" && password === "password") {
//             console.log("Login successful!");
//             // Redirect to another page upon successful login
//             router.push('/dashboard'); // Assuming you have a dashboard page
//         } else {
//             console.log("Invalid email or password. Please try again.");
//             // Display error message to the user or perform other actions upon failed login
//         }
//     };

//     return (
//         <div className="max-w-md w-full bg-green-50 p-8 rounded shadow-md">
//             <h2 className="text-2xl font-semibold text-green-800 mb-4">Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-green-700 text-sm font-bold mb-2">Email Address</label>
//                     <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:border-green-500" placeholder="Enter your email" required />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block text-green-700 text-sm font-bold mb-2">Password</label>
//                     <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:border-green-500" placeholder="Enter your password" required />
//                 </div>
//                 <div className="mb-4">
//                     <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">Login</button>
//                 </div>
//             </form>
//             <div className="text-sm text-green-600">
//                 <p>Don't have an account? <a href="#" className="text-green-500 hover:underline">Sign up</a></p>
//                 <p>Forgot your password? <a href="#" className="text-green-500 hover:underline">Reset it</a></p>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React from 'react';
import Link from 'next/link';
import SignUp from './signup';

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-green-800">Log in to your account</h2>
        </div>
        <form className="mt-8" >
          <div className="rounded-md shadow-sm">
            <div>
              <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-300 placeholder-green-500 text-green-900 rounded-t-md focus:outline-none focus:shadow-outline-green focus:border-green-400 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
            </div>
            <div className=" mt-4">
              <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-300 placeholder-green-500 text-green-900 rounded-b-md focus:outline-none focus:shadow-outline-green focus:border-green-400 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out" />
              <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-green-900">
                Remember me
              </label>
            </div>

            <div className="text-sm leading-5">
              <a href="/" className="font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Don't have an account <Link href="/Signup"> Sign up?</Link> 
              </a>
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

