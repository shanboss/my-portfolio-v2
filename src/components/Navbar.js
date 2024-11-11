import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import CautionMarquee from "./CautionMarquee";
import BannerMarquee from "./BannerMarquee";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="bg-white">
      <CautionMarquee direction={"right"} speed={30} />
      <BannerMarquee />
      <CautionMarquee direction={"right"} speed={20} />
    </div>
  );
}
