import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="hero image"
              className="items-center justify-start rounded-full"
              width={50}
              height={50}
            />
          </Link>
        </span>
        <p className="text-white">
          Copyright © 2024 - All Right Reserved By Chowdhury Kasib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
