'use client'

export default function WhatsApp({size}) {

  function handleMsg() {
    window.open('https://api.whatsapp.com/send?phone=5512981666880&text=Vim%20pelo%20seu%20site,%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas', "width=600, height=400");
  };

  return (
    <svg
      onClick={handleMsg}
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.5188 1.87107L23.5184 1.87115C12.4296 3.70178 3.55788 12.681 1.83333 23.7691C0.864938 29.9384 2.05884 35.7997 4.73277 40.701L2.6667 48.3856L2.6659 48.3886C1.86964 51.3749 4.61526 54.11 7.59304 53.2698C7.59514 53.2692 7.59725 53.2686 7.59935 53.268L15.1631 51.1861C18.9812 53.2953 23.3648 54.5 28.0121 54.5C42.9498 54.5 55.3317 41.3474 54.4563 26.4377C53.5554 11.0694 39.5903 -0.7769 23.5188 1.87107Z"
        fill="#0AA007"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M40.5104 35.9257C40.5104 36.3757 40.4104 36.8507 40.1854 37.3007C39.9605 37.7507 39.6855 38.1757 39.3356 38.5757C38.7106 39.2506 38.0357 39.7506 37.2858 40.0506C36.5359 40.3756 35.711 40.5256 34.8361 40.5256C33.5613 40.5256 32.1865 40.2256 30.7617 39.6006C29.3119 38.9756 27.8871 38.1507 26.4622 37.1257C25.0124 36.0757 23.6626 34.9007 22.3628 33.6258C21.0629 32.3258 19.9132 30.9508 18.8633 29.5259C17.8384 28.1009 17.0135 26.6759 16.4135 25.251C15.8136 23.826 15.5137 22.451 15.5137 21.151C15.5137 20.3011 15.6636 19.4761 15.9636 18.7261C16.2635 17.9511 16.7385 17.2511 17.4134 16.6261C18.2133 15.8261 19.0882 15.4512 20.0131 15.4512C20.363 15.4512 20.713 15.5262 21.038 15.6762C21.363 15.8262 21.6628 16.0512 21.8878 16.3761L24.7625 20.501C24.9874 20.826 25.1624 21.101 25.2624 21.376C25.3874 21.651 25.4374 21.901 25.4374 22.151C25.4374 22.451 25.3374 22.751 25.1624 23.051C24.9874 23.351 24.7625 23.651 24.4625 23.951L23.5126 24.951C23.3626 25.101 23.3127 25.251 23.3127 25.451C23.3127 25.551 23.3376 25.651 23.3626 25.751C23.4126 25.851 23.4376 25.926 23.4626 26.001C23.6876 26.426 24.0876 26.9509 24.6375 27.6009C25.2124 28.2509 25.8123 28.9259 26.4622 29.5759C27.1372 30.2509 27.7871 30.8508 28.462 31.4258C29.1119 31.9758 29.6618 32.3508 30.0868 32.5758C30.1618 32.6008 30.2367 32.6508 30.3117 32.6758C30.4117 32.7258 30.5117 32.7258 30.6367 32.7258C30.8617 32.7258 31.0116 32.6508 31.1616 32.5008L32.1115 31.5508C32.4365 31.2258 32.7364 31.0008 33.0114 30.8508C33.3113 30.6759 33.5863 30.5759 33.9113 30.5759C34.1612 30.5759 34.4112 30.6259 34.6862 30.7508C34.9611 30.8758 35.2611 31.0258 35.5611 31.2508L39.7105 34.2008C40.0355 34.4258 40.2604 34.7008 40.4104 35.0007C40.4354 35.2757 40.5104 35.5757 40.5104 35.9257Z"
        fill="white"
      />
    </svg>

  );
};