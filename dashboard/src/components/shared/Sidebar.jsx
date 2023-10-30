import React from "react";
import { PowerIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  NAV_SIDEBAR_LINKS,
  NAV_SIDEBAR_BOTTOM_LINKS,
} from "../../libs/consts/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

export default function Sidebar() {
  return (
    <div className="w-70 flex flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/NXP-Logo.svg"
          alt="HSE FW DEV"
        />
        <span className="text-md ml-2 font-bold">HSE Dashboard</span>
      </div>

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="mx-2 space-y-1">
              {NAV_SIDEBAR_LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-blue-600"
                          : "text-gray-400 group-hover:text-blue-600",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <div>
        <ul role="list" className="flex flex-col gap-0.5 pt-2 border-t">
          {NAV_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={classNames(
                  item.current
                    ? "bg-gray-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-blue-600",
                    "h-6 w-6 shrink-0"
                  )}
                  aria-hidden="true"
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
