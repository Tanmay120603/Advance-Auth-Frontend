function Home(){
    return(
        <>
        <div className="pt-14"></div>
        <section class="bg-white py-20">
          <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold mb-4 text-gray-800">Welcome to Blogsite</h1>
            <p class="text-gray-600 mb-8">Your one-stop platform to share your stories, connect with others, and explore amazing blogs.</p>
            <a href="#" class="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition">Get Started</a>
          </div>
        </section>
      
        <section class="py-16 bg-gray-50">
          <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="p-8 bg-white rounded-lg shadow">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Write Blogs</h3>
              <p class="text-gray-600">Express yourself by writing and publishing your own blogs effortlessly.</p>
            </div>
            <div class="p-8 bg-white rounded-lg shadow">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Connect with Community</h3>
              <p class="text-gray-600">Engage with like-minded people and build meaningful connections.</p>
            </div>
            <div class="p-8 bg-white rounded-lg shadow">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Explore Trending Topics</h3>
              <p class="text-gray-600">Discover popular blogs and stay updated with the latest trends.</p>
            </div>
          </div>
        </section>
        <footer class="bg-blue-500 text-white py-6">
            <div class="container mx-auto text-center">
                <p>&copy; 2024 Blogsite. All Rights Reserved.</p>
                <p class="text-sm mt-2">Follow us on:
                <a href="#" class="underline">Twitter</a>,
                <a href="#" class="underline">Facebook</a>,
                <a href="#" class="underline">Instagram</a>
                </p>
            </div>
        </footer>
        </>
    )
}

export default Home