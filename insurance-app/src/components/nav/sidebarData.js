import React from 'react';
import {FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import {IoMdHelpCircle, IoIosPaper, IoMdPeople} from 'react-icons/io';

export const SidebarData = [
  // {
  //   title: 'Main',
  //   path: '/',
  //   icon: <AiFillHome />
  // },
  {
    title: 'Search',
    path: '/',
    icon: <IoMdHelpCircle />
  },
  {
    title: 'Graph',
    path: '/graph',
    icon: <IoIosPaper />
  }
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoMdPeople />
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaEnvelopeOpenText />
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoMdHelpCircle />
//   }
];