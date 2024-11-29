function Contact(){
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600">
            We'd love to hear from you! Fill out the form below, or reach us at the provided contact details.
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="p-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-4 w-[70%]">
              If you have any questions, suggestions, or concerns, feel free to get in touch with us. We're here to help!
            </p>
            <ul className="text-gray-600">
              <li className="mb-2">
                <strong>Email:</strong> support@blogsite.com
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +1 (234) 567-890
              </li>
              <li className="mb-2">
                <strong>Address:</strong> 123 Blogsite Lane, Indore, MP
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 font-bold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 font-bold mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Blogsite. All Rights Reserved.</p>
          <p className="text-sm mt-2">
            Follow us on: 
            <a href="#" className="underline ml-2">Twitter</a>, 
            <a href="#" className="underline ml-2">Facebook</a>, 
            <a href="#" className="underline ml-2">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact