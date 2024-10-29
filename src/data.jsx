import { FaReact , FaJs } from "react-icons/fa";

const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_640.jpg",
      link:"#",
      stack: [<FaReact className="stack-icon"/> , <FaJs className="stack-icon"/>],
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/715/816/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg",
      link:"#",
      stack: [<FaReact className="stack-icon"/> , <FaJs className="stack-icon"/>],
    },
   
  ];

export default projects