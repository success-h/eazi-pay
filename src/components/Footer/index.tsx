import React from "react";
import { Logo } from "../Logo";
import Link from "next/link";
import Image from "next/image";

const Icons = [
  { icon: "/instagram.svg" },
  { icon: "/twitter.svg" },
  { icon: "/linkedin.svg" },
  { icon: "/facebook.svg" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300">
      <footer className="footer max-w-screen-2xl mx-auto p-10">
        <div>
          <span>
            <Logo className="bg-black" />
          </span>
          <Link
            href="#"
            className="mt-4 link link-hover text-xs w-40 leading-loose"
          >
            Copyright © 2023 Eazipay. All rights reserved
          </Link>
          <div className="flex gap-3 mt-4">
            {Icons.map((i, idx) => (
              <Link href="" key={idx}>
                <Image height={32} width={32} src={i.icon} alt="social-icon" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <span className="font-bold text-lg text-black">Product</span>
          <Link href="#" className="link link-hover  mt-2">
            Indidual
          </Link>
          <Link href="#" className="link link-hover  mt-2">
            Businesses
          </Link>
          <Link href="#" className="link link-hover  mt-2">
            Request Demo
          </Link>
          <Link href="#" className="link link-hover  mt-2">
            Pricing
          </Link>
        </div>
        <div>
          <span className="font-bold text-lg text-black">Legal</span>
          <Link href="#" className="link link-hover  mt-2">
            Privacy Policy
          </Link>
          <Link href="#" className="link link-hover  mt-2">
            Terms of Service
          </Link>
        </div>
        <div>
          <span className="font-bold text-lg text-black">Resources</span>
          <Link href="#" className="link link-hover  mt-2">
            FAQs
          </Link>
          <Link href="#" className="link link-hover  mt-2">
            Blog
          </Link>
          <Link href="#" className="link link-hover  mt-2">
            Career
          </Link>
          <Link href="#" className="link link-hover  mt-2">
            Customer Service
          </Link>
        </div>
        <div>
          <span className="font-bold text-lg text-black">Contact Us</span>
          <Link href="#" className="link link-hover  mt-2">
            Customer Service
          </Link>
          <a className="link link-hover  mt-2" href="mailto:eazipay@gmail.com">
            eazipay@gmail.com
          </a>

          <a className="link link-hover  mt-2" href="tel:+234 816 878 9518">
            +234 816 878 9518
          </a>

          <input
            type="text"
            placeholder="Your email address"
            className="w-full bg-gray-100 p-4 h-10 rounded-full mt-2"
          />
        </div>
      </footer>
    </footer>
  );
}
