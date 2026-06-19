import { PiInstagramLogoFill } from "react-icons/pi";
import logoLight from "../../../assets/logo-xl.png"
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router";
const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-center">
            <div className="w-9/12 mx-auto">
                <div className="topPart mx-auto py-20">
                    <div className="logoPart flex flex-col justify-center">
                        <Link to={"/"} className="w-fit mx-auto"><img src={logoLight} alt="Logo Footer" /></Link>
                        <p className="text-base py-6 text-white/80">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    </div>
                    <div className="socialLinksPart w-fit mx-auto">
                        <h2 className="font-medium text-xl text-white pb-4">Social Links</h2>
                        <div className="links flex gap-3 items-center">
                            <a href="#" className="w-[40px] h-[40px] rounded-full bg-white p-2.5 flex items-center text-xl"><PiInstagramLogoFill /></a>
                            <a href="#" className="w-[40px] h-[40px] rounded-full bg-white p-2.5 flex items-center text-xl"><FaFacebookSquare /></a>
                            <a href="#" className="w-[40px] h-[40px] rounded-full bg-white p-2.5 flex items-center text-xl"><RiTwitterXFill /></a>
                        </div>
                    </div>
                </div>
                <div className="bottomPart border-t border-white/15 text-white/60 md:flex md:justify-between py-7.5">
                    <div className="copyRightPart">
                        <small>© 2026 KeenKeeper. All rights reserved.</small>
                    </div>
                    <div className="linksPart flex flex-col md:flex-row justify-center md:gap-5">
                        <Link to={"/"}> <small>Privacy Policy</small> </Link>
                        <Link to={"/"}> <small>Terms of Service</small> </Link>
                        <Link to={"/"}> <small>Cookies</small> </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;