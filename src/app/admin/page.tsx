'use client';
import React from 'react';
import styles from '../admin/adminStyles/dashboard.module.css'; // Import CSS module
import Image from 'next/image';
import PropertyTrendsChart from './components/PropertyTrendsChart';

const Adminpage = () => {
  return (
    <main className={styles.adminwrapper}>
      {/* section 1  */}
      <div className={styles.dashboard}>
        <div className={styles.dashboardDesc}>
          <h2>Welcome back, Admin!</h2>
          <p>Here&#39;s an overview of your global property empire.</p>
        </div>

        <div className={styles.notification}>
          <Image
            src="/notificationIcon.png"
            alt="notification icon"
            width={25}
            height={25}
          />
          <span className={styles.notificationCount}>3</span>
        </div>
      </div>

      {/* section 2 */}
      <div className={styles.total}>
        <div className={styles.totalDesc}>
          <h4>Total Users</h4>
          <h3>1,234</h3>
        </div>
        <div className={styles.totalDesc}>
          <h4>Total Properties</h4>
          <h3>5,678</h3>
        </div>
        <div className={styles.totalDesc}>
          <h4>Active Listings</h4>
          <h3>3,456</h3>
        </div>
      </div>

      {/* section 3 */}
      <div className={styles.trends}>
        <h4>Property Trends</h4>
        <div className={styles.chart}>
          <PropertyTrendsChart />
        </div>
      </div>

      {/* section 4 */}
      <div className={styles.recentActivities}>
        <h4>Property Trends</h4>
        <table className={styles.activitiesTable}>
          <tbody>
            <tr className={styles.activitiesList}>
              <td>
                <Image
                  src="/newproperty.png"
                  alt="newproperty"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
              </td>
              <td>New property listed: Luxury Villa in Malibu</td>
            </tr>
            <tr className={styles.activitiesList}>
              <td>
                <Image
                  src="/soldproperty.png"
                  alt="soldproperty"
                  width={20}
                  height={20}
                />
              </td>
              <td>New property listed: Luxury Villa in Malibu</td>
            </tr>
            <tr className={styles.activitiesList}>
              <td>
                <Image
                  src="/newUser.png"
                  alt="newuser"
                  width={20}
                  height={20}
                />
              </td>
              <td>New property listed: Luxury Villa in Malibu</td>
            </tr>
            <tr className={styles.activitiesList}>
              <td>
                <Image
                  src="/updatedproperty.png"
                  alt="newuser"
                  width={20}
                  height={20}
                />
              </td>
              <td>New property listed: Luxury Villa in Malibu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Adminpage;
