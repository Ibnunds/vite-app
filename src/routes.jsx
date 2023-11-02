import {
  AtSymbolIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import { IGComment, IGPost } from "./pages/dashboard";
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
        path: "/ig-post",
        element: <IGPost />,
      },
      {
        icon: <ChatBubbleBottomCenterTextIcon {...icon} />,
        name: "Auto Comment",
        path: "/ig-comment",
        element: <IGComment />,
      },
    ],
  },
];

export default routes;
