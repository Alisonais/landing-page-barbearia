'use client'
export default function LogoInsta() {

  function handleInsta() {
    window.open("https://www.instagram.com/_bruniiinho/")
  };

  return (
    <svg
      onClick={handleInsta}
      className="cursor-pointer"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2.59473H7C4.23858 2.59473 2 4.8333 2 7.59473V17.5947C2 20.3561 4.23858 22.5947 7 22.5947H17C19.7614 22.5947 22 20.3561 22 17.5947V7.59473C22 4.8333 19.7614 2.59473 17 2.59473Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9997 11.9645C16.1231 12.7968 15.981 13.6468 15.5935 14.3936C15.206 15.1404 14.5929 15.746 13.8413 16.1242C13.0898 16.5025 12.2382 16.6341 11.4075 16.5005C10.5768 16.3668 9.80947 15.9746 9.21455 15.3797C8.61962 14.7848 8.22744 14.0174 8.09377 13.1868C7.96011 12.3561 8.09177 11.5044 8.47003 10.7529C8.84829 10.0014 9.45389 9.38828 10.2007 9.00078C10.9475 8.61328 11.7975 8.47113 12.6297 8.59454C13.4786 8.72042 14.2646 9.116 14.8714 9.72285C15.4782 10.3297 15.8738 11.1156 15.9997 11.9645Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7.59473H17.01"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
