import {
  IconLayoutDashboard,
  IconUsers,
  IconCalendarEvent,
  IconSettings,
  IconBottle,
  IconReportMedical
} from "@tabler/icons-react";

export const navigationConfig = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: IconLayoutDashboard,
    roles: ["admin", "receptionist", "doctor"],
  },
  {
    title: "Registration",
    href: "/reception/register",
    icon: IconUsers,
    roles: ["admin", "receptionist"],
  },
  {
    title: "Appointments",
    href: "/reception/appointments",
    icon: IconCalendarEvent,
    roles: ["admin", "receptionist", "doctor"],
  },
  {
    title: "Inventory",
    href: "/admin/inventory",
    icon: IconBottle,
    roles: ["admin"],
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: IconReportMedical,
    roles: ["admin"],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: IconSettings,
    roles: ["admin", "receptionist", "doctor"],
  },
];
