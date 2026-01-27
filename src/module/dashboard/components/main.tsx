import { BirthworkerTabs } from "./birth-worker-tabs"
import { WorkercardList } from "./worker-card-list"

export const Main = () =>{
    return(
        <main className="mx-5 flex-1">
            <BirthworkerTabs/>
            <WorkercardList/>
        </main>
    )
}