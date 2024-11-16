import { routes } from "@/config/routes";
import {
  PiPackageDuotone,
  PiChartBarDuotone,
  PiNetwork,
  PiStar,
  PiChat,
} from "react-icons/pi";
import { BsPeople } from "react-icons/bs";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  {
    name: "Summary",
    href: routes.parent.summary,
    icon: <PiChartBarDuotone />,
  },
  {
    name: "Childrens",
    href: routes.parent.students,
    icon: <BsPeople />,
    dropdownItems: [
      {
        name: "john doe",
        href: "/parent/student/001",
      },
    ],
  },
  {
    name: "Messages",
    href: routes.parent.messages,
    // href: routes.staff,
    icon: <PiChat />,
  },
];
