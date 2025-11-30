import { Link } from "react-router-dom"
import profileImage from "../../assets/imgs/AES_0088_1x1.png"

export const Aside = () => {
    return (
        <aside className="flex flex-col items-center justify-center bg-linear-to-b from-cyan-200 to-blue-500 m-6 ml-14 rounded-lg space-y-10 w-64 h-11/12">
            <img className="w-56 h-56 rounded-full position-relative top-0" src={profileImage} alt="foto de p" />
            <h1 className="text-2xl font-bold">Felix Da Silva Felix</h1>
            <nav className="flex flex-col space-y-2">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <button>Dark</button>
        </aside>
    )
}