"use client"
import { Flex } from "antd"
import { usePathname } from "next/navigation"
import React, { ReactNode } from "react"
import { Footer } from "./Footer/Footer"
import { Navbar } from "./Navbar/Navbar"

interface IWrapper {
    children: ReactNode
}

const WrapperStyles: React.CSSProperties = {
    width: "100%",
}

const WrapperAssistStyles: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
}

export const Wrapper = ({children}: IWrapper) => {
    const pathname = usePathname();
    const isAdminPath = pathname.startsWith("/admin");
  
    return(
        <>
            <Flex vertical justify="center" align="center" style={WrapperStyles}>
                <Navbar />
                    <Flex vertical style={WrapperAssistStyles}>
                        {children}
                    </Flex>
                {!isAdminPath && <Footer />}
            </Flex>
        </>
    )
}