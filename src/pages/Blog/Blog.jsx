import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Blog() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const blogs = [
        {
            title: "Finding Inner Peace Through Meditation",
            content: "Meditation is more than just sitting quietly – it's a journey into self-discovery and mental clarity. This guide explores different meditation techniques suitable for beginners and experienced practitioners alike. Learn how to establish a daily meditation routine, overcome common challenges, and integrate mindfulness into your everyday life. Discover the science behind meditation's positive effects on mental health and stress reduction.",
            date: "Jun 2024",
            author: "anonymous"
        },
        {
            title: "The Power of Positive Psychology",
            content: "Positive psychology focuses on the strengths that enable individuals and communities to thrive. This article explores key concepts in positive psychology and how they can be applied to improve mental well-being. Learn about the PERMA model, character strengths, and practical exercises to boost happiness and life satisfaction. Discover how shifting your perspective can lead to lasting positive change.",
            date: "Jun 2024",
            author: "anonymous"
        },
        {
            title: "Building Resilience in Challenging Times",
            content: "Resilience is not about avoiding stress but learning to thrive despite it. This comprehensive guide explores practical strategies for building emotional resilience. From developing a growth mindset to strengthening social connections, discover tools and techniques that can help you bounce back from setbacks and adapt to change. Learn how to turn challenges into opportunities for personal growth.",
            date: "Jun 2024",
            author: "anonymous"
        }
    ];

    const openBlog = (blog) => {
        setSelectedBlog(blog);
        setTimeout(() => setIsModalOpen(true), 10);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedBlog(null), 300);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50"
        >
            {/* Hero Section */}
            <div className="relative h-[300px] bg-[#122620] mb-8">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                    <motion.h1 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-center"
                    >
                        Share Your Story
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-center max-w-2xl mb-6"
                    >
                        Your experience could be the light that guides someone else's path
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-[#4FD1C5] text-[#122620] rounded-lg font-semibold hover:bg-[#3DA99F] transition-colors"
                    >
                        Create New Blog
                    </motion.button>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 py-8">
                <motion.div 
                    className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            whileHover={{ y: -5 }}
                            onClick={() => openBlog(blog)}
                            className="group cursor-pointer"
                        >
                            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#4FD1C5]/20">
                                <h2 className="text-xl font-bold mb-4 text-[#122620] group-hover:text-[#4FD1C5] transition-colors">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {blog.content}
                                </p>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{blog.author}</span>
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && selectedBlog && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
                        onClick={closeModal}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8">
                                <h3 className="text-3xl font-bold mb-6 text-[#122620]">{selectedBlog.title}</h3>
                                <div className="prose max-w-none mb-6">
                                    {selectedBlog.content.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-8 pt-4 border-t border-[#4FD1C5]/20">
                                    <div className="text-gray-600">
                                        <p className="font-medium">{selectedBlog.author}</p>
                                        <p className="text-sm">{selectedBlog.date}</p>
                                    </div>
                                    <button 
                                        className="px-6 py-2 bg-[#4FD1C5] text-[#122620] rounded-lg hover:bg-[#3DA99F] transition-colors"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Blog;
