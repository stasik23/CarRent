import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <div className="text-3xl font-bold text-blue-600">MORENT</div>
          <p className="text-gray-600 mt-2">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        <div className="flex flex-col mb-6 md:mb-0">
          <h4 className="font-semibold">About</h4>
          <ul className="mt-2 space-y-1">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>
        <div className="flex flex-col mb-6 md:mb-0">
          <h4 className="font-semibold">Community</h4>
          <ul className="mt-2 space-y-1">
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>
        <div className="flex flex-col mb-6 md:mb-0">
          <h4 className="font-semibold">Socials</h4>
          <ul className="mt-2 space-y-1">
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-6 pt-4 text-center">
        <p className="text-gray-600">©2022 MORENT. All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-600">Privacy & Policy</a>
          <a href="#" className="text-gray-600">Terms & Condition</a>
        </div>
      </div>
    </div>
  )
}
