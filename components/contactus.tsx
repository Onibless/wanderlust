import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import React from 'react';

const Contactus = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 mb-5">
          
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>
                <p className="text-lg mb-8 text-white">Feel free to reach out to us for any inquiries or feedback.</p>

                <form className="max-w-lg w-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-black font-medium">Your Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-black font-medium">Your Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-black font-medium">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"></textarea>
                    </div>
                    <button type="submit" className="bg-white text-black px-6 py-3 rounded-md hover:bg-green-600 transition duration-200">Send Message</button>
                </form>
            </main>

            
        </div>
    );
};

export default Contactus;
