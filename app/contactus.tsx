import { NAV_LINKS } from '.././constants/index';
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";

const  contactus =() => {
  return (
    <>
      <Hero />
      <ContactusPage/>
      <GetApp />
    </>
  )
}

// pages/contact.tsx



const ContactusPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
          
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold mb-4 text-green-800">Contact Us</h1>
                <p className="text-lg mb-8 text-green-700">Feel free to reach out to us for any inquiries or feedback.</p>

                <form className="max-w-lg w-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-green-800 font-medium">Your Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-green-800 font-medium">Your Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-green-800 font-medium">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"></textarea>
                    </div>
                    <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-200">Send Message</button>
                </form>
            </main>

            <footer className="w-full h-20 flex justify-center items-center border-t bg-green-100">
                <p className="text-green-800">Your Website Name &copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default contactus;

