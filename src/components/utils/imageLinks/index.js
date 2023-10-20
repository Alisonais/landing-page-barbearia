import dynamic from "next/dynamic";
// import imagem1 from "../../../../public/imagem1.webp";
// import imagem2 from "../../../../public/imagem2.webp";
// import imagem3 from "../../../../public/imagem3.webp";
// import imagem4 from "../../../../public/imagem4.webp";
// import imagem5 from "../../../../public/imagem5.webp";
// import imagem6 from "../../../../public/imagem6.webp";
// import imagem7 from "../../../../public/imagem7.webp";
import imagemBackground from "../../../../public/imagemBackground.webp";

export const backgroundCta = imagemBackground;

export const imagem1corte = dynamic(() => import("../../../../public/imagem1.webp"))

export const imagem2corte = dynamic(() => import("../../../../public/imagem2.webp"));

export const imagem3corte = dynamic(() => import("../../../../public/imagem3.webp"));

export const imagem4corte = dynamic(() => import("../../../../public/imagem3.webp"));

export const imagem5corte = dynamic(() => import("../../../../public/imagem5.webp"));

export const imagem6corte = dynamic(() => import("../../../../public/imagem6.webp"));

export const imagem7corte = dynamic(() => import("../../../../public/imagem7.webp"));

export const backgroundLinearGradientCta = 'linear-gradient(180deg, #0D121E 0%, rgba(13, 18, 30, 0.51) 25%, rgba(13, 18, 30, 0.32) 51.56%, rgba(13, 18, 30, 0.51) 76.04%, #0D121E 100%)';

export const backgroundlinearServicos = 'linear-gradient(120deg, #FFF 14.92%, #D6D6D6 68.12%)';

export const backgroundlinearServicosPreco = 'linear-gradient(360deg, #FFF 14.92%, #D6D6D6 68.12%)';

