import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const userInfo = {
  name: "Nicolas Murray",
  position: "Full-Stack Developer",
  description:
    "Creating seamless web experiences with expertise in React, Node.js and PostgreSQL. Driven by clean code, innovative solutions, and scalable applications.",
};

export const projects = [
  {
    title: "Mini Messagin App",
    description:
      "A simple web application where users can add messages to a shared feed. All messages are visible to everyone in real-time, making it a great platform for quick announcements, group chats, or leaving notes. Ideal for small teams or communities looking for a lightweight messaging solution.",
    image: "https://i.postimg.cc/g2MNx20y/messagesapp.jpg",
    link: "https://minimessaginapp.netlify.app/",
    stack: [
      <FaReact className="stack-icon" />,
      <FaNodeJs className="stack-icon" />,
      <BiLogoPostgresql className="stack-icon" />,
    ],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/005/715/816/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg",
    link: "#",
    stack: [
      <FaReact className="stack-icon" />,
      <FaNodeJs className="stack-icon" />,
    ],
  },
];
