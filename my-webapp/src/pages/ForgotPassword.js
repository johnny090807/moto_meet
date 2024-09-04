import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import ErrorSnackBar from '../components/ErrorSnackBar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const auth = getAuth();

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset link sent!', email);
    } catch (error) {
        setSnackbarVisible(true)
        setError(error.message);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset your password
        </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={resetPassword} method="POST">
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
            </label>
            <div className="mt-2">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Send reset link
            </button>
            </div>
            <div>
                <p className="text-center text-sm text-gray-500">
                <a href="/login">Back to login</a>
                </p>
            </div>
           <ErrorSnackBar message={error} onClose={() => setSnackbarVisible(false)} visible={snackbarVisible}/>
        </form>
        </div>
    </div>
  );
};

export default ForgotPassword;