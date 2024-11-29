function AboutUs(){
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600">
            Learn more about Blogsite, our mission, and how we’re building a community for bloggers.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="About Us Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              At Blogsite, we believe that everyone has a story to tell. Our platform empowers
              individuals to share their thoughts, experiences, and ideas with a global audience.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to create a community where writers and readers come together to
              inspire and be inspired. We aim to provide a seamless and user-friendly blogging
              experience.
            </p>
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

export default AboutUs;
