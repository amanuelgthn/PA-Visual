"use client";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Check if the current path starts with '/admin'
  const isAdminPath = pathname.startsWith("/admin");

  return (
    <>
      {children}
      {!isAdminPath && <Footer />}
    </>
  );
};

export default ClientLayout;
