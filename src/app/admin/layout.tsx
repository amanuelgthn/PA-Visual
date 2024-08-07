'use client';
import React from 'react';
import Sidebar from './components/Sidebar';
import styles from './adminStyles/layout.module.css';
import HamburgerMenu from './components/HamburgerMenu';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
      {/* tablet humburgen icon must render from here */}
      <HamburgerMenu />
    </div>
  );
};

export default AdminLayout;
