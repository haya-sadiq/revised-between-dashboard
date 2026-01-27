import { Navbar } from "@/src/components/navbar"
import { Sidebar } from "@/src/components/sidebar/sidebar"
import { Main } from "../components/main"

export const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#FBFDFD]">
        <Navbar/>
        <div className="flex mt-1">
            <Sidebar/>
            <Main/>
        </div>
        </div>
    )
}