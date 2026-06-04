"use client";

import { useState } from "react";

export default function AlertBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-beige-light border-b border-green-border">
      <div className="mx-auto flex max-w-[1200px] items-center justify-center px-10 py-3">
        <p className="text-center font-body text-sm text-green">
          Buy one coffee, get one free -- this week only (April 14-20)
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-6 flex size-6 items-center justify-center text-green hover:opacity-70"
          aria-label="Dismiss"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M12 4L4 12M4 4l8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
