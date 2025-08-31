import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { blogs } from '../data/blogsData.jsx';
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Blog Not Found</h2>
          <Link to="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:pt-20 pt-6">
      <Helmet>
        <title>{post.title} - Revolve  Blog</title>
        <meta
          name="description"
          content={`Read more on the Revolve  blog about ${post.title.toLowerCase()}.`}
        />
        <meta
          name="keywords"
          content={`${post.title.toLowerCase()}, Revolve  blog, technology insights, business intelligence, cloud migration, data engineering`}
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-navy mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
          </header>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;