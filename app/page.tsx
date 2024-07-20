import Image from "next/image";
import DesktopProductImage from "@/public/image-product-desktop.jpg";
import MobileProductImage from "@/public/image-product-mobile.jpg";
import IconCart from "@/public/icon-cart.svg";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cream justify-center p-10">
      <article className="flex flex-col md:flex-row bg-white md:w-[700px] md:h-[500px] rounded-xl overflow-hidden">
        <Image
          src={DesktopProductImage}
          width={0}
          height={0}
          alt=""
          className="w-1/2 hidden object-cover md:block"
        />
        <Image
          src={MobileProductImage}
          width={0}
          height={0}
          alt=""
          className="w-full h-[300px] block object-cover md:hidden"
        />
        <section className="m-6 flex flex-col justify-center gap-8">
          <h2 className="text-[14px] text-darkGrayishBlue uppercase tracking-[5px] font-[500]">
            Perfume
          </h2>
          <h1
            className={`${fraunces.className} text-veryDarkBlue font-[700] text-[42px] leading-10`}
          >
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-[14px] text-darkGrayishBlue font-[500]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <h3 className="flex items-center">
            <strong
              className={`${fraunces.className} text-darkCyan text-[32px]`}
            >
              $149.99
            </strong>
            <small className="text-darkGrayishBlue line-through font-[500] pl-5">
              $169.99
            </small>
          </h3>
          <button className="bg-darkCyan hover:bg-primaryHover transition-colors p-4 flex gap-2 w-full justify-center items-center rounded-lg">
            <Image src={IconCart} width={0} height={0} alt="" />
            <strong>Add to Cart</strong>
          </button>
        </section>
      </article>
    </main>
  );
}
