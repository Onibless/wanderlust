import React from 'react';

const SignUp: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  return (
    <div className="min-h-screen  mb-8 flex items-center justify-center bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-green-800">Sign up for an account</h2>
        </div>
        <form className="mt-8" >
          <div className="rounded-md shadow-sm">
            <div>
              <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-300 placeholder-green-500 text-green-900 rounded-t-md focus:outline-none focus:shadow-outline-green focus:border-green-400 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
            </div>
            <div className="mt-4">
              <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-300 placeholder-green-500 text-green-900 rounded-b-md focus:outline-none focus:shadow-outline-green focus:border-green-400 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm leading-5">
              <p>By signing up, you agree to our <a href="#" className="font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition ease-in-out duration-150">terms of service</a>.</p>
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// onSubmit={handleSubmit}
export default SignUp;
