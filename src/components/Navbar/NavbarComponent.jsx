import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaEnvelope,
  FaPlusSquare,
  FaUserCircle,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";
import { CiHeart, CiMenuBurger, CiFaceSmile } from "react-icons/ci";
import { BiMoviePlay } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NavbarComponent = () => {
  const stories = [
    { name: "itsdougthepu", img: "/home.pics/puppet.png" },
    { name: "openaidalle", img: "/home.pics/rainbow.png" },
    { name: "lewishamilton", img: "/home.pics/childface.png" },
    { name: "wahab.xyz", img: "/home.pics/youthface.png" },
    { name: "defavours", img: "/home.pics/gameboard.png" },
    { name: "mkbhd", img: "/home.pics/profile img.png" },
  ];

  const posts = [
    {
      user: "lewishamilton",
      avatar: "/home.pics/childface.png",
      image: "/home.pics/helmet.png",
      rating: "741,368 likes",
      description: "Parabens Ayrton, minha inspiração sempre! 🏆",
      language: "See translation",
      reviewCount: "View all 13,384 comments",
      commentPlaceholder: "Add a comment...",
    },
    {
      username: "Kurzgesagt",
      avatar: "/home.pics/sky.png",
      image: "/home.pics/string theory.png",
      likes: 6724,
      mainPost: {
        username: "kurzgesagt",
        text: "For every video we upload to YouTube we create different versions of the final thumbnail...",
        commentsCount: "View all 37 comments",
      },
      comments: [
        {
          username: "kurzgesagt",
          replyTo: "_cazme_",
          text: "Careful, please don't burn the final thumbnail with too many fire emojis 🙏",
        },
        {
          username: "kurzgesagt",
          replyTo: "xandrames2",
          text: "🤗✨",
        },
      ],
      addCommentPlaceholder: "Add a comment…",
    },
    {
      user: "Discovery",
      avatar: "/home.pics/discovery.png",
      image: "/home.pics/owe.png",
       rating: "78,780 likes",
      description: "discovery if you had to choose, where would you be the fastest air, land, or sea?...",
      language: "See translation",
      reviewCount: "View all 456 comments",
      commentPlaceholder: "Add a comment...",
    },
  ];


//        // Data for the suggested profiles
// const suggestions = [
//   { name: 'Kirti Chadha', status: 'Follows you', imageUrl: 'https://picsum.photos/70/70?random=1', isFollowing: true },
//   { name: 'Durgesh Nandini', status: 'Followed by chirag_sir', imageUrl: 'https://picsum.photos/70/70?random=2', isFollowing: false },
//   { name: 'Riya Sharma', status: 'Suggested for you', imageUrl: 'https://picsum.photos/70/70?random=3', isFollowing: false },
//   { name: 'Anil Kapoor', status: 'New to platform', imageUrl: 'https://picsum.photos/70/70?random=4', isFollowing: false },
//   { name: 'Priya Verma', status: 'Followed by 2 people', imageUrl: 'https://picsum.photos/70/70?random=5', isFollowing: false },
//   // Add more profiles here to make it scroll
// ];



  return (
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* Mobile Top Nav */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 lg:hidden sticky top-0 z-50 bg-white text-black">
          <h1 className="text-xl font-bold">instagram</h1>
          <div className="flex gap-4 text-xl text-gray-600">
            <FaHome />
            <FaSearch />
            <FaCompass />
            <BiMoviePlay />
            <FaEnvelope />
            <CiHeart />
            <FaPlusSquare />
            <FaUserCircle />
            <CiMenuBurger />
            {/* 👇 Clerk user button */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in" className="text-blue-500">
                Sign in
              </Link>
            </SignedOut>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex w-full">
          {/* Left Sidebar */}
          <div className="hidden lg:flex w-64 p-6 border-r border-gray-200 flex-col text-gray-600 fixed h-screen sticky top-0">
            <h1 className="text-2xl font-bold mb-6">Instagram</h1>
            <nav className="flex flex-col gap-4 text-lg">
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <FaHome /> Home
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <FaSearch /> Search
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <FaCompass /> Explore
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <BiMoviePlay /> Reels
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <FaEnvelope /> Messages
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <CiHeart /> Notifications
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <FaPlusSquare /> Create
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <FaUserCircle /> Profile
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <CiMenuBurger /> More
              </a>
            </nav>
          </div>

          {/* Feed */}
          <div className="flex-1 max-w-2xl mx-auto w-full">
            {/* Stories */}
            <div className="flex gap-4 p-4 border-b border-gray-200 overflow-x-auto bg-white text-gray-600">
              {stories.map((story, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center flex-shrink-0"
                >
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-14 h-14 rounded-full border-2 border-pink-500"
                  />
                  <span className="text-xs mt-1">{story.name}</span>
                </div>
              ))}
            </div>

            {/* Posts */}
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 bg-white text-gray-600"
              >
                <div className="flex items-center gap-3 p-4 text-gray-300">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-semibold text-gray-600">{post.user}</span> .18h
                </div>
                <img src={post.image} alt="" className="w-full" />
                <div className="py-4 px-4 space-y-2">
                  {/* Post Actions */}
                  <div className="flex justify-between">
                    <ul className="flex items-center mb-2 text-2xl gap-6">
                      <FaRegHeart size={28} />
                      <FaRegComment
                        style={{ transform: "scaleX(-1)" }}
                        size={28}
                      />
                      <FiSend size={28} />
                    </ul>
                    <ul>
                      <FaRegBookmark size={28} />
                    </ul>
                  </div>

                  {/* Post Details */}
                  <p>
                    <span className="font-semibold">{post.rating}</span>
                  </p>
                  <p>
                    <span className="font-semibold">{post.user}</span>{" "}
                    {post.description}
                  </p>
                  <p>
                    <span className="font-semibold">{post.language}</span>
                  </p>
                  <p className="text-gray-500">{post.reviewCount}</p>

                  <p>
                    <span className="font-semibold">
                      {post.mainPost?.username}
                    </span>{""}
                    {post.mainPost?.text}
                  </p>
                  <p className="text-gray-500">
                    {post.mainPost?.commentsCount}
                  </p>

                  {post.comments?.map((comment, index) => (
                    <p key={index}>
                      <span className="font-semibold">{comment.username}</span>{" "}
                      @{comment.replyTo} {comment.text}
                    </p>
                  ))}

                  {/* Add Comment */}
                  <p className="flex justify-between items-center mt-2">
                    <span className="text-gray-500">
                      {post.commentPlaceholder}
                    </span>{" "}
                    <CiFaceSmile size={20} />
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="hidden xl:block w-72 p-6 border-l border-gray-200 text-gray-600 sticky top-0 self-start h-screen overflow-y-auto">
            {/* User Profile Summary */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/home.pics/2nd pro.png"
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex justify-between w-full">
                <ul>
                <p className="font-semibold text-gray-600">UpVox_</p>
                <p className="font-semibold text-gray-400">UpVox</p>
                </ul>
                <button className="text-blue-500 text-sm">Switch</button>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold text-gray-400 text-lg">Suggestions for you</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/sidebar/skyview.png"
                    alt="alto"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex justify-between w-full">
                    <ul>
                      <li className="text-sm font-medium text-gray-600">imkirtichadha</li>
                      <li className="text-xs text-gray-400">Followed you</li>
                    </ul>
                    <button className="text-blue-500 text-xs text-blue-500">Follow</button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="/sidebar/homeview.png"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex justify-between w-full">
                    <ul>
                      <li className="text-sm font-medium text-gray-600">organic__algorithm</li>
                      <li className="text-xs text-gray-400">Followed by chirag_singla17</li>
                    </ul>
                    <button className="text-blue-500 text-xs text-blue-400">Follow</button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src="/sidebar/bankriver.png"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex justify-between w-full">
                    <ul>
                      <li className="text-sm font-medium">im__grohit</li>
                      <li className="text-xs text-gray-400">Followed by chirag_singla17</li>
                    </ul>
                    <button className="text-blue-500 text-xs">Follow</button>
                  </div>
                </div>

                  <div className="flex items-center gap-3">
                  <img
                    src=" /sidebar/poolview.png"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex justify-between w-full">
                    <ul>
                      <li className="text-sm font-medium">saurabh952</li>
                      <li className="text-xs text-gray-400">Followed you</li>
                    </ul>
                    <button className="text-blue-500 text-xs">Follow</button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src="/sidebar/forestview.png"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex justify-between w-full">
                    <ul>
                      <li className="text-sm font-medium">sarthakbrl</li>
                      <li className="text-xs text-gray-400">Followed you</li>
                    </ul>
                    <button className="text-blue-500 text-xs">Follow</button>
                  </div>
                </div>

                <p className="text-sm text-gray-400">About . Help . Press . API . Jobs . Privacy . Terms . Location . Language . Meta Verified</p>
               
                <p className="text-xs text-gray-400">© 2023 INSTAGRAM FROM META</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
