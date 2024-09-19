'use client'
import Image from 'next/image'
import styles from './adminStyles/layout.module.css'
import HamburgerMenu from './components/HamburgerMenu'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar'
import { usePathname } from 'next/navigation'

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()

  const getHeaderText = () => {
    switch (pathname) {
      case '/admin':
        return (
          <>
            <span className={styles.highlight}>Hello Sam Wheeler</span> Welcome
          </>
        )
      case '/admin/users':
        return 'Users Management'
      case '/admin/properties':
        return 'Properties Management'
      case '/admin/statistics':
        return 'Statistics'
      case '/admin/requests':
        return 'Moderator Requests'
      case '/admin/settings':
        return 'Settings'
      default:
        return ''
    }
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
          <Image src='/icons/bell.png' alt='bell' width={24} height={27} />
        </div>
        {children}
      </main>
      {/* tablet humburgen icon must render from here */}
      <HamburgerMenu />
    </div>
  )
}

export default AdminLayout
