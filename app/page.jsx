"use client";
import React from 'react';
import Navbar from '../components/navbar'; // Adjust path according to your folder structure
import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-main-image flex flex-col justify-center items-center">
        <div className="container text-center mt-[-50px]"> {/* Adjust margin-top here */}
          <p className="font-righteous text-[16px] mb-5 font-extrabold">Lamborghini</p>
          <p className="font-righteous text-[31px] mb-2 font-thin">SEARCH IN THE WEBSITE</p>
          <div className="search-input-container flex items-center justify-center">
            <input
              type="text"
              placeholder="Search on Lamborghini.com"
              className="search-input"
            />
            <div className="search-icon ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="var(--foreground)" strokeWidth="2"/>
                <line x1="16" y1="16" x2="21" y2="21" stroke="var(--foreground)" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          <h1 className="hero-text font-league mt-9 text-[20px ]">
            Automobili Lamborghini is deeply saddened by the events in Ukraine and observes <br /> the situation with grave concern.
          </h1>
          <button className="hex-button mt-5">
            <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="#FFF" strokeWidth="3" fill="none" />
              <path d="M35 35 L60 50 L35 65" stroke="#FFF" strokeWidth="4" fill="none" />
            </svg>
          </button>
        </div>
      </div>
      {/* You can add other content here */}
    </>
  );
}
