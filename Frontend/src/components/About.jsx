import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate =useNavigate();
  return (
    <>
    <div className="bg-slate-900 text-white min-h-screen">
  
      <header className="bg-blue-700 py-6">
        <div className="container mx-auto px-4 flex items-center">
          <button
          onClick={()=>navigate("/")}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-500 focus:outline-none"
          >
            Back
          </button>
          <h1 className="text-3xl font-bold ml-4">About Us</h1>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-8 lg:mb-0 p-4">
            <h2 className="text-2xl font-bold mb-4 ">Our Story</h2>
            <p className="text-gray-300 mb-4 ">
              Welcome to our bookstore! We are passionate about connecting readers with their next great read. Our journey began with a love for books and a vision to create a space where book enthusiasts could explore, discover, and immerse themselves in the world of literature.
            </p>
            <p className="text-gray-300 mb-4">
              From classic novels to modern bestsellers, we curate a wide selection of books to cater to every reader's taste. Whether you're a casual reader or a literary aficionado, our bookstore is designed to be your go-to destination for all things books.
            </p>
            <p className="text-gray-300">
              Join us in our mission to promote the joy of reading and support a community of book lovers.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="https://img.freepik.com/free-photo/student-reading-book-bookcases_23-2147848098.jpg?t=st=1725085228~exp=1725088828~hmac=ebf21096bae97d2e1dced71a0192818f68f5b7793ebf5169dcd04388495090aa&w=996" alt="Bookstore" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="flex flex-col md:flex-row md:justify-center">
            <div className="md:w-1/3 text-center px-4">
              <p className="text-gray-300">
                Our mission is to foster a love for reading by providing an extensive range of books and creating a welcoming environment for all book lovers. We believe that books have the power to inspire, educate, and transform lives, and we are committed to making them accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Bookstore. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default About