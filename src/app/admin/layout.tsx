'use client'
import styles from './adminStyles/layout.module.css'
import HamburgerMenu from './components/HamburgerMenu'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar'
import { usePathname } from 'next/navigation'
import { FaRegBell } from 'react-icons/fa'

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()

  const getHeaderText = () => {
    if (pathname.startsWith('/admin')) {
      if (pathname === '/admin') {
        return (
          <>
            <span className={styles.highlight}>Hello Sam Wheeler</span> Welcome
          </>
        )
      } else if (pathname.startsWith('/admin/users')) {
        return 'Users Management'
      } else if (pathname.startsWith('/admin/properties')) {
        return 'Properties Management'
      } else if (pathname.startsWith('/admin/statistics')) {
        return 'Statistics'
      } else if (pathname.startsWith('/admin/requests')) {
        return 'Moderator Requests'
      } else if (pathname.startsWith('/admin/careers')) {
        return 'Careers'
      } else if (pathname.startsWith('/admin/settings')) {
        return 'Settings'
      }
    }

    return ''
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            height: 70,
          }}
        >
          <span>
            <h3 className={styles.headerText}>{getHeaderText()}</h3>
          </span>
          <Search />
          <div className={styles.bellWrapper}>
            <FaRegBell size={30} color='white' />
            <span className={styles.badge}>5</span>
          </div>
        </div>
        {children}
      </main>
      {/* tablet humburgen icon must render from here */}
      <HamburgerMenu />
    </div>
  )
}

export default AdminLayout
