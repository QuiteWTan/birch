"use client";

import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-slate-100 py-10 mt-4">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in
            sint incidunt, minima quos voluptates, nobis autem laborum earum est
            pariatur aperiam. Delectus consectetur maxime quidem veniam,
            corporis.
          </p>
          <div className="flex items-center gap-x-4 text-[20px]">
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsReddit />
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg">Latest posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold">Links</p>
          <ul className="text-base  mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-gray-500 cursor-pointer duration-200 ">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-gray-500 cursor-pointer duration-200 ">
                Cart
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-gray-500 cursor-pointer duration-200 ">
                About
              </li>
            </Link>
            <li className="hover:text-gray-500 cursor-pointer duration-200 ">
              Newsletter
            </li>
            <li className="hover:text-gray-500 cursor-pointer duration-200 ">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold">Get it on your appstore</p>
          <p className='text-sm text-gray-10'> Available on IOS and Android</p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row py-2'>
            <Button
              type='button'
              title='App Store'
              icon='/apple.svg'
              variant='btn_white'
              full 
            />
            <Button
              type='button'
              title='Play Store'
              icon='/android.svg'
              variant='btn_dark_green_outline'
              full 
            />
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
