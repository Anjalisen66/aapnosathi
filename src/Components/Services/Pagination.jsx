import React from "react";

export const Pagination = () => {
  return (
    <div class="flex items-center justify-between w-full max-w-80 text-[#edeecb] font-medium">
      <button type="button" aria-label="prev" class="rounded-full bg-[#693303]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z"
            fill="#475569"
            stroke="#475569"
            stroke-width=".078"
          />
        </svg>
      </button>

      <div class="flex items-center gap-2 text-sm font-medium">
        <button class="h-10 w-10 flex items-center justify-center aspect-square">
          1
        </button>
        <button class="h-10 w-10 flex items-center justify-center aspect-square">
          2
        </button>
        <button class="h-10 w-10 flex items-center justify-center aspect-square text-indigo-500 border border-indigo-200 rounded-full">
          3
        </button>
        <button class="h-10 w-10 flex items-center justify-center aspect-square">
          4
        </button>
        <button class="h-10 w-10 flex items-center justify-center aspect-square">
          5
        </button>
      </div>

      <button
        type="button"
        aria-label="next"
        class="rounded-full bg-slate-200/50"
      >
        <svg
          class="rotate-180"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z"
            fill="#475569"
            stroke="#475569"
            stroke-width=".078"
          />
        </svg>
      </button>
    </div>
  );
};
