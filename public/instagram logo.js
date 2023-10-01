'use client'
export default function Instagram() {

  function handleInsta() {
    window.open("https://www.instagram.com/_costabarbershop/");
  };

  return (
      <svg
      onClick={handleInsta}
      height="100%"
      width="100%"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 52H34.5C47 52 52 47 52 34.5V19.5C52 7 47 2 34.5 2H19.5C7 2 2 7 2 19.5V34.5C2 47 7 52 19.5 52Z"
        fill="url(#paint0_linear_134_238)"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M27 35.75C31.8325 35.75 35.75 31.8325 35.75 27C35.75 22.1675 31.8325 18.25 27 18.25C22.1675 18.25 18.25 22.1675 18.25 27C18.25 31.8325 22.1675 35.75 27 35.75Z"
        stroke="white"
        strokeWidth="3" strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.0898 14.5H41.1188"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_134_238"
          x1="9.0028"
          y1="49.9254"
          x2="10.5347"
          y2="5.5014" gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5DC00" />
          <stop offset="0.233345" stopColor="#F93D3D" />
          <stop offset="0.676436" stopColor="#D220C1" />
          <stop offset="0.984375" stopColor="#B107A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};