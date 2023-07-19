import React from 'react';

const Divider = () => {
  return (
    <div className="relative border divide-y-2 my-12">
      <div className="absolute translate-y-1/2 translate-x-1/2 right-1/2 bottom-0 p-3 bg-[#854DFF] rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 46 44"
        >
          <g fill="none" stroke="#FFF" stroke-width="3">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Divider;
