import { Navbar } from "@/src/components/navbar"
import { Sidebar } from "@/src/components/sidebar/sidebar"

export const Dashboard = () => {
    return (
        <div className="min-h-screen ">
        <Navbar/>
        <div className="flex mt-1">
            <Sidebar/>
            
        </div>
        </div>
    )
}