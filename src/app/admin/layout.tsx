'use client'
import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../admin/adminStyles/layout.module.css'; 

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    );
  };
  
  export default AdminLayout;