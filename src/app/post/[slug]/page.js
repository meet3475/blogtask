import Header from "@/app/components/Header/Header";
import { blogs } from "@/app/config/config";


export async function generateMetadata({ params }) {
  const blog = blogs.find(item => item.slug === params.slug);
  return {
    title: blog ? `${blog.title} | My Blog` : "Blog Not Found | My Blog",
    description: blog ? blog.description : "The blog you are looking for does not exist."
  };
}

export default function BlogDetail({ params }) {
    const blog = blogs.find((item) => item.slug === params.slug);
    console.log("blog ::150", blog);

    if (!blog) {
        return (
            <>
                <Header />
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h3 className="text-red-500 text-xl font-semibold">Blog not found.</h3>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="p-10 rounded-2xl border border-[#5c0303]">
                    <h3 className="text-3xl font-bold text-[#5c0303] mb-4">{blog.title}</h3>
                    <p className="text-base text-gray-700 mt-4">{blog.description}</p>
                    <p className="text-sm text-gray-500 mb-2">Published on: {blog.publishedDate}</p>
                </div>
            </div>
        </>
    );
}
