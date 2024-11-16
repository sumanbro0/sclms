import {
  PiShoppingCart,
  PiHeadset,
  PiPackage,
  PiChartBar,
  PiCurrencyDollar,
  PiSquaresFour,
  PiGridFour,
  PiFeather,
  PiChartLineUp,
  PiMapPinLine,
  PiUserGear,
  PiBellSimpleRinging,
  PiUser,
  PiEnvelopeSimpleOpen,
  PiSteps,
  PiCreditCard,
  PiStack,
  PiTable,
  PiBrowser,
  PiBoundingBox,
  PiHourglassSimple,
  PiUserCircle,
  PiShootingStar,
  PiRocketLaunch,
  PiFolderLock,
  PiBinoculars,
  PiHammer,
  PiNoteBlank,
  PiUserPlus,
  PiShieldCheck,
  PiLockKey,
  PiChatCenteredDots,
  PiCurrencyCircleDollar,
  PiFolder,
  PiHouseLine,
  PiAirplaneTilt,
  PiPokerChip,
  PiBriefcase,
  PiCalendarDuotone,
  PiShapes,
  PiNewspaperClippingDuotone,
  PiTableDuotone,
  PiCodesandboxLogoDuotone,
  PiSparkleDuotone,
} from "react-icons/pi";
import ProjectWriteIcon from "packages/isomorphic-core/src/components/icons/project-write";
import CrmDashIcon from "packages/isomorphic-core/src/components/icons/crm-icon";

// Note: do not add href in the label object, it is rendering as label
export const berylliumSidebarMenuItems = [
  // label start
  {
    name: "Overview",
  },
  // label end
  {
    name: "File Manager",
    href: "/",
    icon: <PiFolder />,
  },
  {
    name: "Appointment",
    href: "#",
    icon: <PiCalendarDuotone />,
  },
  {
    name: "Executive",
    href: "#",
    icon: <PiBriefcase />,
  },
  {
    name: "Project",
    href: "#",
    icon: <ProjectWriteIcon />,
  },
  {
    name: "CRM",
    href: "#",
    icon: <CrmDashIcon />,
    badge: "NEW",
  },
  {
    name: "Social Media",
    href: "#",
    icon: <PiSparkleDuotone />,
  },
  {
    name: "Job Board",
    href: "#",
    icon: <PiShapes />,
  },
  {
    name: "Financial",
    href: "#",
    icon: <PiCurrencyCircleDollar />,
  },
  {
    name: "Logistics",
    href: "#",
    icon: <PiPackage />,
  },
  {
    name: "Job Feeds",
    href: "#",
    icon: <PiShapes />,
  },
  {
    name: "E-Commerce",
    href: "#",
    icon: <PiShoppingCart />,
  },
  {
    name: "Analytics",
    href: "#",
    icon: <PiChartBar />,
  },
  {
    name: "Support",
    href: "#",
    icon: <PiHeadset />,
  },

  // label start
  {
    name: "Apps Kit",
  },
  // label end
  {
    name: "E-Commerce",
    href: "#",
    icon: <PiShoppingCart />,
    dropdownItems: [
      {
        name: "Products",
        href: "#",
      },
      {
        name: "Product Details",
        href: "#",
      },
      {
        name: "Create Product",
        href: "#",
        badge: "",
      },
      {
        name: "Edit Product",
        href: "#",
      },
      {
        name: "Categories",
        href: "#",
      },
      {
        name: "Create Category",
        href: "#",
      },
      {
        name: "Edit Category",
        href: "#",
      },
      {
        name: "Orders",
        href: "#",
      },
      {
        name: "Order Details",
        href: "#",
      },
      {
        name: "Create Order",
        href: "#",
      },
      {
        name: "Edit Order",
        href: "#",
      },
      {
        name: "Reviews",
        href: "#",
      },
      {
        name: "Shop",
        href: "#",
      },
      {
        name: "Cart",
        href: "#",
      },
      {
        name: "Checkout & Payment",
        href: "#",
      },
    ],
  },
  {
    name: "Support",
    href: "#",
    icon: <PiHeadset />,
    dropdownItems: [
      {
        name: "Inbox",
        href: "#",
      },
      {
        name: "Snippets",
        href: "#",
      },
      {
        name: "Templates",
        href: "#",
      },
    ],
  },
  {
    name: "Invoice",
    href: "#",
    icon: <PiCurrencyDollar />,
    dropdownItems: [
      {
        name: "List",
        href: "#",
      },
      {
        name: "Details",
        href: "#",
      },
      {
        name: "Create",
        href: "#",
      },
      {
        name: "Edit",
        href: "#",
      },
    ],
  },
  {
    name: "Logistics",
    href: "#",
    icon: <PiPackage />,
    dropdownItems: [
      {
        name: "Shipment List",
        href: "#",
      },
      {
        name: "Shipment Details",
        href: "#",
      },
      {
        name: "Create Shipment",
        href: "#",
      },
      {
        name: "Edit Shipment",
        href: "#",
      },
      {
        name: "Customer Profile",
        href: "#",
      },
      {
        name: "Tracking",
        href: "#",
      },
    ],
  },
  {
    name: "File Manager",
    href: "#",
    icon: <PiFolder />,
  },
  {
    name: "Appointment",
    href: "#",
    icon: <PiCalendarDuotone />,
  },
  {
    name: "Roles & Permissions",
    href: "#",
    icon: <PiFolderLock />,
  },
  {
    name: "Point of Sell",
    href: "#",
    icon: <PiCreditCard />,
  },
  {
    name: "Invoice Builder",
    href: "#",
    icon: <PiNewspaperClippingDuotone />,
  },
  {
    name: "Image Viewer",
    href: "#",
    icon: <PiCodesandboxLogoDuotone />,
    badge: "NEW",
  },
  // label start
  {
    name: "Search & Filters",
  },
  {
    name: "Real Estate",
    href: "#",
    icon: <PiHouseLine />,
  },
  {
    name: "Flight Booking",
    href: "#",
    icon: <PiAirplaneTilt />,
  },
  {
    name: "NFT",
    href: "#",
    icon: <PiPokerChip />,
  },
  // label end
  // label start
  {
    name: "Widgets",
  },
  // label end
  {
    name: "Cards",
    href: "#",
    icon: <PiSquaresFour />,
  },
  {
    name: "Icons",
    href: "#",
    icon: <PiFeather />,
  },
  {
    name: "Charts",
    href: "#",
    icon: <PiChartLineUp />,
  },
  {
    name: "Maps",
    href: "#",
    icon: <PiMapPinLine />,
  },
  // label start
  {
    name: "Forms",
  },
  // label end
  {
    name: "Account Settings",
    href: "#",
    icon: <PiUserGear />,
  },
  {
    name: "Notification Preference",
    href: "#",
    icon: <PiBellSimpleRinging />,
  },
  {
    name: "Personal Information",
    href: "#",
    icon: <PiUser />,
  },
  {
    name: "Newsletter",
    href: "#",
    icon: <PiEnvelopeSimpleOpen />,
  },
  {
    name: "Multi Step",
    href: "#",
    icon: <PiSteps />,
  },
  {
    name: "Payment Checkout",
    href: "#",
    icon: <PiCreditCard />,
  },
  // label start
  {
    name: "Tables",
  },
  // label end
  {
    name: "Basic",
    href: "#",
    icon: <PiGridFour />,
  },
  {
    name: "Collapsible",
    href: "#",
    icon: <PiStack />,
  },
  {
    name: "Enhanced",
    href: "#",
    icon: <PiTable />,
  },
  {
    name: "Sticky Header",
    href: "#",
    icon: <PiBrowser />,
  },
  {
    name: "Pagination",
    href: "#",
    icon: <PiBoundingBox />,
  },
  {
    name: "Search",
    href: "#",
    icon: <PiHourglassSimple />,
  },
  {
    name: "TanStack Table",
    href: "#",
    icon: <PiTableDuotone />,
    dropdownItems: [
      {
        name: "Basic",
        href: "#",
      },
      {
        name: "Resizable",
        href: "#",
      },
      {
        name: "Collapsible",
        href: "#",
      },
      {
        name: "Drag & Drop",
        href: "#",
      },
      {
        name: "Pinning",
        href: "#",
      },
      {
        name: "Enhanced",
        href: "#",
      },
    ],
  },
  // label start
  {
    name: "Pages",
  },
  // label end
  {
    name: "Profile",
    href: "#",
    icon: <PiUserCircle />,
  },
  {
    name: "Welcome",
    href: "#",
    icon: <PiShootingStar />,
  },
  {
    name: "Coming soon",
    href: "#",
    icon: <PiRocketLaunch />,
  },
  {
    name: "Access Denied",
    href: "#",
    icon: <PiFolderLock />,
  },
  {
    name: "Not Found",
    href: "#",
    icon: <PiBinoculars />,
  },
  {
    name: "Maintenance",
    href: "#",
    icon: <PiHammer />,
  },
  {
    name: "Blank",
    href: "#",
    icon: <PiNoteBlank />,
  },

  // label start
  {
    name: "Authentication",
  },
  // label end
  {
    name: "Sign Up",
    href: "#",
    icon: <PiUserPlus />,
    dropdownItems: [
      {
        name: "Modern Sign up",
        href: "#",
      },
      {
        name: "Vintage Sign up",
        href: "#",
      },
      {
        name: "Trendy Sign up",
        href: "#",
      },
      {
        name: "Elegant Sign up",
        href: "#",
      },
      {
        name: "Classic Sign up",
        href: "#",
      },
    ],
  },
  {
    name: "Sign In",
    href: "#",
    icon: <PiShieldCheck />,
    dropdownItems: [
      {
        name: "Modern Sign in",
        href: "#",
      },
      {
        name: "Vintage Sign in",
        href: "#",
      },
      {
        name: "Trendy Sign in",
        href: "#",
      },
      {
        name: "Elegant Sign in",
        href: "#",
      },
      {
        name: "Classic Sign in",
        href: "#",
      },
    ],
  },
  {
    name: "Forgot Password",
    href: "#",
    icon: <PiLockKey />,
    dropdownItems: [
      {
        name: "Modern Forgot password",
        href: "#",
      },
      {
        name: "Vintage Forgot password",
        href: "#",
      },
      {
        name: "Trendy Forgot password",
        href: "#",
      },
      {
        name: "Elegant Forgot password",
        href: "#",
      },
      {
        name: "Classic Forgot password",
        href: "#",
      },
    ],
  },
  {
    name: "OTP Pages",
    href: "#",
    icon: <PiChatCenteredDots />,
    dropdownItems: [
      {
        name: "Modern OTP page",
        href: "#",
      },
      {
        name: "Vintage OTP page",
        href: "#",
      },
      {
        name: "Trendy OTP page",
        href: "#",
      },
      {
        name: "Elegant OTP page",
        href: "#",
      },
      {
        name: "Classic OTP page",
        href: "#",
      },
    ],
  },
];
