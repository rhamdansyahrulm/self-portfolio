import Image from "next/image";

import React from 'react'

import { blog_list } from "@/constants";

const Blog_content = ({ blog_val })  => {
    return (
        <div className="opacity-80 hover:cursor-pointer hover:opacity-100">
            <div className="w-[100%] relative h-[400px]">
                <Image src={blog_val.image} alt="blog" layout="fill" className="object-cover"/>
            </div>
            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                <div className="w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                    {blog_val.date}
                </div>
                <div className="flex flex-col md:flex-row items-center mt-[1rem]">
                    <h3 className="text-white text-center font-bold mx-auto">{blog_val.title}</h3>
                </div>
            </div>
        </div>
    )
}

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-gradient-to-b from-[#141414] to-black">
        <h1 className="text-[15px] font-bold uppercase text-slate-200 mb-[1rem] text-left ml-[10%]">
        What I have done so far
        </h1>
        <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize font-bold text-white text-left ml-[10%]">
            My <span className="text-yellow-400">BLOG</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
            {blog_list.map ((blog_val, index) =>
                <Blog_content blog_val = {blog_val}/>
            )}
        </div>
    </div>
  )
}

export default Blog