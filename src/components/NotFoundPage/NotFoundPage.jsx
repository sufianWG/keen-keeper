import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="bg-[#F8FAFC]">
            <div className="w-9/12 h-screen mx-auto text-center flex flex-col justify-center gap-2">
                <h1 className="text-3xl text-black/60">The page you are looking for was not found.</h1>
                <Link to={"/"} className="w-fit mx-auto"><button className="py-1.5 px-2 bg-[#244D3F] cursor-pointer text-white font-bold rounded-md">BACK TO HOME</button></Link>
            </div>
            
        </div>
    );
};

export default NotFoundPage;