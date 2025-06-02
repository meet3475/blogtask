"use client"
import Link from "next/link";
import Header from "./components/Header/Header";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
import { commands } from "@uiw/react-md-editor";
const customCommands = [commands.bold, commands.italic];
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });


export default function Home() {
  const [blogs, setBlogs] = useState([
    {
      "id": 1,
      "title": "Getting Started with React",
      "slug": "getting-started-with-react",
      "description": "Learn the basics of building user interfaces using React, a powerful JavaScript library.",
      "publishedDate": "2025-05-01"
    },
    {
      "id": 2,
      "title": "Understanding JavaScript Closures",
      "slug": "understanding-javascript-closures",
      "description": "A deep dive into closures in JavaScript and how they help manage scope and memory.",
      "publishedDate": "2025-05-02"
    },
    {
      "id": 3,
      "title": "CSS Grid vs Flexbox",
      "slug": "css-grid-vs-flexbox",
      "description": "Compare two modern layout systems in CSS to know which one to use when.",
      "publishedDate": "2025-05-03"
    },
    {
      "id": 4,
      "title": "Top 10 VS Code Extensions for Web Developers",
      "slug": "top-10-vs-code-extensions-for-web-developers",
      "description": "Boost your productivity with these must-have VS Code extensions.",
      "publishedDate": "2025-05-04"
    },
    {
      "id": 5,
      "title": "What is New in ES2025?",
      "slug": "what-is-new-in-es2025",
      "description": "Explore the latest features added in the ECMAScript 2025 specification.",
      "publishedDate": "2025-05-05"
    },
    {
      "id": 6,
      "title": "Mastering Git and GitHub",
      "slug": "mastering-git-and-github",
      "description": "A practical guide to version control using Git and GitHub.",
      "publishedDate": "2025-05-06"
    },
    {
      "id": 7,
      "title": "Dark Mode in CSS",
      "slug": "dark-mode-in-css",
      "description": "Implementing dark mode using modern CSS techniques and prefers-color-scheme.",
      "publishedDate": "2025-05-07"
    },
    {
      "id": 8,
      "title": "Web Performance Optimization Tips",
      "slug": "web-performance-optimization-tips",
      "description": "Speed up your website with these performance improvement techniques.",
      "publishedDate": "2025-05-08"
    },
    {
      "id": 9,
      "title": "Responsive Design Best Practices",
      "slug": "responsive-design-best-practices",
      "description": "Make your web apps look great on all devices with these responsive design tips.",
      "publishedDate": "2025-05-09"
    },
    {
      "id": 10,
      "title": "Introduction to TypeScript",
      "slug": "introduction-to-typescript",
      "description": "Discover the benefits of using TypeScript in modern JavaScript applications.",
      "publishedDate": "2025-05-10"
    },
    {
      "id": 11,
      "title": "How to Use Redux with React",
      "slug": "how-to-use-redux-with-react",
      "description": "Manage complex state in React applications with Redux.",
      "publishedDate": "2025-05-11"
    },
    {
      "id": 12,
      "title": "Understanding Async/Await in JavaScript",
      "slug": "understanding-async-await-in-javascript",
      "description": "Simplify asynchronous code with async/await syntax.",
      "publishedDate": "2025-05-12"
    },
    {
      "id": 13,
      "title": "A Beginner's Guide to REST APIs",
      "slug": "a-beginners-guide-to-rest-apis",
      "description": "Learn how REST APIs work and how to consume them in web applications.",
      "publishedDate": "2025-05-13"
    },
    {
      "id": 14,
      "title": "Creating Accessible Web Apps",
      "slug": "creating-accessible-web-apps",
      "description": "Ensure your website is usable by everyone with accessibility best practices.",
      "publishedDate": "2025-05-14"
    },
    {
      "id": 15,
      "title": "Node.js Crash Course",
      "slug": "nodejs-crash-course",
      "description": "Get started with backend development using Node.js.",
      "publishedDate": "2025-05-15"
    },
    {
      "id": 16,
      "title": "How to Deploy Your App on Vercel",
      "slug": "how-to-deploy-your-app-on-vercel",
      "description": "A step-by-step guide to deploying web apps quickly on Vercel.",
      "publishedDate": "2025-05-16"
    },
    {
      "id": 17,
      "title": "Building Forms in React",
      "slug": "building-forms-in-react",
      "description": "Learn how to handle form input and validation in React.",
      "publishedDate": "2025-05-17"
    },
    {
      "id": 18,
      "title": "React Router Tutorial",
      "slug": "react-router-tutorial",
      "description": "Add navigation and routing to your React applications.",
      "publishedDate": "2025-05-18"
    },
    {
      "id": 19,
      "title": "Animations with Framer Motion",
      "slug": "animations-with-framer-motion",
      "description": "Create stunning animations in React using Framer Motion.",
      "publishedDate": "2025-05-19"
    },
    {
      "id": 20,
      "title": "Debugging JavaScript Like a Pro",
      "slug": "debugging-javascript-like-a-pro",
      "description": "Tips and tools to effectively debug your JavaScript code.",
      "publishedDate": "2025-05-20"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    publishedDate: ""
  });

  const handleAddBlog = () => {
    const slug = newBlog.title.toLowerCase().split(" ").join("-");
    const updatedBlogs = [
      ...blogs,
      {
        ...newBlog,
        id: blogs.length + 1,
        slug
      }
    ];
    setBlogs(updatedBlogs);
    setNewBlog({ title: "", description: "", publishedDate: "" });
    setShowModal(false);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <h1 className="text-[34px] font-semibold text-[#5c0303]">Blogs List :-</h1>

          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search by blog title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-[#5c0303] rounded-md px-4 py-2 w-full sm:w-72 text-sm"
            />

            <button
              onClick={() => setShowModal(true)}
              className="bg-[#5c0303] text-white px-4 py-2 rounded-md text-sm"
            >
              Add Blog
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-start">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white shadow-md rounded-2xl p-4 border border-[#5c0303]"
            >
              <h2 className="text-lg font-bold mb-2 text-gray-800">{blog.title}</h2>
              <ReactMarkdown>{blog.description}</ReactMarkdown>
              <p className="text-xs text-gray-500 mb-4">
                Published on: {blog.publishedDate}
              </p>

              <Link href={`/post/${blog.slug}`}>
                <button className="px-4 py-2 text-sm font-medium text-[#5c0303] border border-[#5c0303] rounded hover:bg-[#5c0303] hover:text-[white]">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-xl shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-lg font-bold text-red-600"
            >
              x
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#5c0303]">Add New Blog</h2>

            <input
              type="text"
              placeholder="Title"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />

            <label className="block text-sm mb-2 font-medium text-gray-600">Description (Markdown Supported):</label>
            <div data-color-mode="light">
              <MDEditor
                value={newBlog.description}
                onChange={(val) => setNewBlog({ ...newBlog, description: val || "" })}
                commands={customCommands}
              />
            </div>

            <input
              type="date"
              value={newBlog.publishedDate}
              onChange={(e) => setNewBlog({ ...newBlog, publishedDate: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-4"
            />

            <button
              onClick={handleAddBlog}
              className="mt-4 bg-[#5c0303] text-white px-4 py-2 rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </div>
      )}

    </>
  );
}
