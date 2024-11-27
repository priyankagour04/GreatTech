import React from "react";
import { motion } from "framer-motion";
import ExploreMoreBtn from "../../components/Buttons/ExploreMoreBtn";
import CardImg1 from "../../assets/images/blog-image1.jpg";
import CardImg2 from "../../assets/images/blog-image2.jpg";
import CardImg3 from "../../assets/images/blog-image3.jpg";
import { FaUser, FaComments } from "react-icons/fa"; // Icons for user and comments

// Animation variants for card
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Initially hidden (comes from below)
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5, // Delay for staggering effect
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Blogs = () => {
  // Step 1: Create an array of blog data
  const blogData = [
    {
      id: 1,
      img: CardImg1,
      date: "10 Dec",
      author: "Admin",
      comments: 0,
      title: "Necessity May Give us Best Virtual Court",
    },
    {
      id: 2,
      img: CardImg2,
      date: "12 Dec",
      author: "Admin",
      comments: 0,
      title: "Tackling the Changes of Retail Industry",
    },
    {
      id: 3,
      img: CardImg3,
      date: "15 Dec",
      author: "Admin",
      comments: 0,
      title: "Easy and Most Powerful Server and Platform",
    },
  ];

  return (
    <div className="container mx-auto p-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-5 mb-5 text-blue-500">
        <div className="w-10 h-3 outline outline-2 rounded-xl">
        <div className="w-5 h-3 bg-Blue-500 rounded-xl"></div>
        </div>
          <h1 className="text-xl font-semibold mb-1">Blog & News</h1>
        </div>
        <h1 className="text-4xl font-bold">Explore Blogs and News</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Step 2: Map over the blogData array */}
  {blogData.map((blog, index) => (
    <motion.div
      key={blog.id}
      className="bg-white shadow-xl"
      custom={index} // Custom index for staggered animation
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animation triggers when it comes into view
      variants={cardVariants}
    >
      <div className="relative">
        <img src={blog.img} alt={`Blog ${blog.id}`} className="w-full object-cover " />
        <div className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-lg">
          <span className="font-bold me-2">{blog.date.split(" ")[0]}</span>
          <span className="font-bold">{blog.date.split(" ")[1]}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <FaUser /> <span>By {blog.author}</span>
          <FaComments /> <span>{blog.comments} Comments</span>
        </div>
        <h2 className="text-xl font-bold my-4">{blog.title}</h2>
        <ExploreMoreBtn label="Read More" />
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default Blogs;
