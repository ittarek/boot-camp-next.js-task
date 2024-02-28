const commonNavData = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path:"/editors",
    title:"Editors"
  },{
    path:"/social",
    title:"Social"
  },{
    path:"/craime",
    title:"Craime"
  },{
    path:"/internation",
    title:"International"
  }
  
];

export const afterLoginNavData = [
  ...commonNavData,
  {
    path: "/dashBoard",
    title: "Dashboard",
  },
  {
    path: "/addNews",
    title: "Add News",
  },
];

export const beforeLoginNavData = [
  ...commonNavData,
  {
    path: "/signup",
    title: "Signup",
  },
  {
    path: "/login",
    title: "Login",
  },
];
