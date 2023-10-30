import {
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
  SparklesIcon,
  DocumentTextIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export const NAV_SIDEBAR_LINKS = [
  {
    name: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "teams",
    label: "Teams",
    path: "/teams",
    icon: UsersIcon,
  },
  {
    name: "innovation",
    label: "Innovation",
    path: "/innovation",
    icon: SparklesIcon,
  },
  {
    name: "documentation",
    label: "Documentation",
    path: "/docs",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "projects",
    label: "Projects",
    path: "/projects",
    icon: DocumentTextIcon,
  },
];

export const NAV_SIDEBAR_BOTTOM_LINKS = [
  {
    name: "settings",
    label: "Settings",
    path: "/settings",
    icon: Cog8ToothIcon,
  },
  {
    name: "support",
    label: "Help & Support",
    path: "/support",
    icon: QuestionMarkCircleIcon,
  },
];
