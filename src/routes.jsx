import { AtSymbolIcon } from "@heroicons/react/24/solid";
import Home from "./pages/dashboard/home";
const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "Instagram",
    layout: "dashboard",
    pages: [
      {
        icon: <AtSymbolIcon {...icon} />,
        name: "Auto Posting",
        path: "/home",
        element: <Home />,
      },
    ],
  },
];

export default routes;
