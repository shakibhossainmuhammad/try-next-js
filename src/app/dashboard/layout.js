import React from 'react';

export const metadata = {
  title: ' Dashboard | Next Hero',
  description: 'Next Hero',
};
const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <div>Sidebar</div>
      {children}
    </div>
  );
};

export default DashBoardLayout;
