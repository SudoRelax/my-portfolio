import { Outlet } from "react-router-dom"
import { Aside } from "./Aside"
import { MobileNav } from "./MobileNav"

export const Layout = () => {
    return (
        <div className="flex h-screen flex-col md:flex-row bg-[#F0F8FF] dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
            <div className="hidden md:flex">
                <Aside />
            </div>
            <main className="flex-1 overflow-auto w-full relative">
                <Outlet />
                <div className="h-20 md:hidden"></div> {/* Spacer for mobile nav */}
            </main>
            <div className="md:hidden">
                <MobileNav />
            </div>
        </div>
    )
}
