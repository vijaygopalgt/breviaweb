import React from "react";

const blogs = [
  {
    title: "Compare how WordPress vs Shopify Can Impact Your Digital Growth",
    date: "Jun 2024",
    description:
      "Choosing the right website platform can significantly impact your digital growth. This post compares WordPress and Shopify.",
  },
  {
    title: "Compare how WordPress vs Squarespace Can Impact Your Digital Growth",
    date: "Jun 2024",
    description:
      "Choosing the right website platform can significantly impact your digital growth. This post compares WordPress and Squarespace.",
  },
  {
    title: "WordPress vs. Wix: Impact on Digital Growth",
    date: "Jun 2024",
    description:
      "Choosing the right website platform can significantly impact your digital growth. This post compares WordPress and Wix.",
  },
  {
    title: "Mastering Local SEO: Essential Strategies for Small Businesses",
    date: "Jun 2024",
    description:
      "Learn essential strategies for mastering local SEO and improving your visibility in local search rankings and business growth.",
  },
  {
    title: "The Future of Digital Marketing: Trends to Watch",
    date: "Jun 2024",
    description:
      "Explore the emerging trends shaping the future of digital marketing and how businesses can keep trends shaping their future.",
  },
  {
    title: "Why Email Marketing Still Matters in the Digital Age",
    date: "Jun 2024",
    description:
      "Discover the benefits of email marketing and why it remains a powerful tool in the digital age for driving conversions.",
  },
];

const BlogSection = () => {
  return (
    <div className="bg-white text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-purple-600">
          ⚡ Our Blogs
        </h2>
        <h3 className="text-3xl font-bold text-center mb-10">
          Topic of the Week!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 border border-purple-300 rounded-lg shadow-lg hover:shadow-xl transition-all bg-white"
            >
              <p className="text-purple-500 font-semibold text-sm mb-2">
                📅 {blog.date}
              </p>
              <h4 className="text-xl font-bold mb-3">{blog.title}</h4>
              <p className="text-gray-700">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
