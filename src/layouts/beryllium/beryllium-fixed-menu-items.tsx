import { IconType } from "react-icons/lib";
import {
  PiAirplaneTilt,
  PiBellSimpleRinging,
  PiBinoculars,
  PiBriefcase,
  PiCalendarDuotone,
  PiCalendarPlus,
  PiCards,
  PiChartBar,
  PiChartLineUp,
  PiChatCenteredDots,
  PiCreditCard,
  PiCurrencyCircleDollar,
  PiCurrencyDollar,
  PiEnvelopeSimpleOpen,
  PiFeather,
  PiFileImage,
  PiFolderLock,
  PiFolder,
  PiGridFour,
  PiHammer,
  PiHeadset,
  PiHouse,
  PiHouseLine,
  PiLightning,
  PiLockKey,
  PiMagicWand,
  PiMapPinLine,
  PiNoteBlank,
  PiNotePencil,
  PiPackage,
  PiPokerChip,
  PiRocketLaunch,
  PiShieldCheck,
  PiShieldCheckered,
  PiShootingStar,
  PiShoppingCart,
  PiSquaresFour,
  PiSteps,
  PiTable,
  PiUser,
  PiUserCircle,
  PiUserGear,
  PiUserPlus,
  PiShapes,
  PiNewspaperClippingDuotone,
  PiTableDuotone,
  PiCodesandboxLogoDuotone,
  PiSparkleDuotone,
  PiStar,
  PiPackageDuotone,
  PiNetwork,
  PiChartBarDuotone,
  PiPaperPlane,
  PiSupersetOf,
  PiPencil,
  PiCheck,
} from "react-icons/pi";
import { atom } from "jotai";
import ProjectWriteIcon from "packages/isomorphic-core/src/components/icons/project-write";
import CrmDashIcon from "packages/isomorphic-core/src/components/icons/crm-icon";
import { routes } from "@/config/routes";
import { BsPeople, BsPersonPlus } from "react-icons/bs";

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  badge?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  menuItems: ItemType[];
}

export const berylliumMenuItems: MenuItemsType[] = [
  {
    id: "1",
    name: "Home",
    title: "Overview",
    icon: PiHouse,
    menuItems: [
      {
        name: "Dashboard",
        href: routes.admin.dashboard,
        icon: PiChartBarDuotone,
      },
    ],
  },
  {
    id: "2",
    name: "Students",
    title: "Students",
    icon: PiLightning,
    menuItems: [
      {
        name: "Student Records",
        description: "",
        icon: BsPeople,
        href: routes.admin.students,
        badge: "",
      },
      {
        name: "Guardians",
        icon: PiUserCircle,
        href: routes.admin.guardians,
        badge: "",
      },
    ],
  },
  {
    id: "3",
    name: "Staffs",
    title: "All staffs",
    icon: BsPersonPlus,
    menuItems: [
      {
        name: "Staff",
        href: routes.admin.staff,
        icon: PiNetwork,
      },
    ],
  },
  {
    id: "4",
    name: "Academic",
    title: "Academic",
    icon: PiPackage,
    menuItems: [
      {
        name: "Classes",
        icon: PiPackage,
        href: routes.admin.classes,
        badge: "",
      },
      {
        name: "Subjects",
        icon: PiNotePencil,
        href: routes.admin.subjects,
        badge: "",
      },
    ],
  },
  {
    id: "5",
    name: "Admin",
    title: "Admin",
    icon: PiUserGear,
    menuItems: [
      {
        name: "Administration",
        href: routes.admin.administration,
        // href: routes.admin.students,
        icon: PiUser,
      },
    ],
  },
  {
    id: "6",
    name: "My Subjects",
    title: "My Subjects",
    icon: PiNotePencil,
    menuItems: [
      {
        name: "Subject Details",
        href: routes.admin.subjectDetails,
        // href: routes.admin.students,
        icon: PiFeather,
      },
      {
        name: "Lesson Plan",
        href: routes.admin.lessonPlan,
        // href: routes.admin.students,
        icon: PiChartLineUp,
      },
      {
        name: "Assessments",
        href: routes.admin.assessMents,
        // href: routes.admin.students,
        icon: PiCards,
      },
      {
        name: "Homework",
        href: routes.admin.homework,
        // href: routes.admin.students,
        icon: PiPencil,
      },
      {
        name: "Attendance",
        href: routes.admin.attendance,
        // href: routes.admin.students,
        icon: PiCheck,
      },
    ],
  },
];

export const berylliumMenuItemAtom = atom(berylliumMenuItems[0]);
