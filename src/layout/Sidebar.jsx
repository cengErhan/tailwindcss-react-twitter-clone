import React from 'react';
import { BirdIcon, BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationsIcon, ProfileIcon } from '../icons/icons';

const Sidebar = () => {
  return (
    <div className='w-72 bg-blue-200'>
      <h1>Sidebar</h1>
      <BirdIcon/>
      <HomeIcon/>
      <ExploreIcon/>
      <NotificationsIcon/>
      <MessagesIcon/>
      <BookmarksIcon/>
      <ListsIcon/>
      <ProfileIcon/>
      <MoreIcon/>
    </div>
  );
};

export default Sidebar;
