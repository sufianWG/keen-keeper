import { Link, NavLink } from "react-router";
import logoImg from "../../../assets/logo.png"
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import { TimelineContext } from "../../../Context/TimelineContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { timelineData } = useContext(TimelineContext);

    const navLinkClass = ({isActive}) => `py-3 px-4 text-base flex items-center gap-1 hover:bg-[#244D3F] hover:rounded-md hover:text-white hover:font-bold transition-all duration-500 ${isActive ? "bg-[#244D3F] text-white rounded-md": ""}`;
    return (
        <nav>
            <div className="md:flex md:justify-between items-center bg-white py-4.5 px-10 md:px-20 shadow">
                <div className="leftSide w-fit">
                    <Link to={"/"}><img src={logoImg} alt="logo" /></Link> 
                </div>
                <div className="text-3xl absolute right-10 top-5 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ? <IoClose /> : <IoMenu />
                    }
                    
                </div>
                <div className={`rightSide flex-none md:flex absolute md:static bg-white w-full md:w-auto left-0 md:z-auto transition-all duration-300 ease-in ${ open? "top-18" : "top-[-500px]"}`}>
                    <NavLink to={"/"} className={navLinkClass} onClick={()=> setOpen(false)}><RiHome2Line /> Home</NavLink>
                    <NavLink to={"/timeline"} className={navLinkClass} onClick={()=> setOpen(false)}> <RiTimeLine /> Timeline({timelineData.length})</NavLink>
                    <NavLink to={"/stats"} className={navLinkClass} onClick={()=> setOpen(false)}> <FaChartLine /> Stats</NavLink>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;