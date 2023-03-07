import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>
          <Link href="https://velog.io/@hyungjin_han" target="_blank">
            Tech blog
          </Link>
        </p>
        <p>
          <Link href="https://github.com/HyungJinHan" target="_blank">
            GitHub
          </Link>
        </p>
        <p>
          <Link href="https://hyungjinhan.vercel.app/" target="_blank">
            Portfolio site
          </Link>
        </p>
        <p>
          <Link href="https://www.facebook.com/hyeongjinh1" target="_blank">
            Facebook
          </Link>
        </p>
        <p>
          <Link href="https://www.linkedin.com/in/hyungjinhan" target="_blank">
            Linkedin
          </Link>
        </p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Hyung-Jin Han</p>
        <p>Presents</p>
        <p>Front-End Developer</p>
        <p>Airbnb clone project</p>
        <p>Contact Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>If you have some trouble</p>
        <p>Contact To</p>
        <p>Hyung-Jin Han</p>
      </div>
    </div>
  );
};

export default Footer;
