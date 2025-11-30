import { Aside } from "../../components/home/Aside"
import { Main } from "../../components/home/main"
export const Home = () => {
    return (
        <>
            <div className="flex h-screen row">
                <Aside />
                <Main />
            </div>
        </>
    )
}