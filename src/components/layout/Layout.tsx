import { Outlet } from "react-router-dom"
import { Aside } from "./Aside"

export const Layout = () => {
    return (
        <div className="flex h-screen row bg-[#F0F8FF] dark:bg-gray-950 transition-colors duration-300">
            <Aside />
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}
