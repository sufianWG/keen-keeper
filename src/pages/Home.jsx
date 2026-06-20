import { use } from "react";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router";

const friendsDataPromise = fetch("/friends.json").then(res => res.json());
// console.log(friendsDataPromise);
const Home = () => {
    const friendsData = use(friendsDataPromise);
    // console.log(friendsData);
    return (
        <div>
            <Banner></Banner>

            <div className="bg-[#F8FAFC] pb-20">
                <div className="w-9/12 mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            friendsData.map(friend => {
                                return <Link to={`/details/${friend.id}`}><div key={friend.id} className="text-center p-6 space-y-1 bg-white rounded-md shadow min-h-[270px] h-full flex flex-col justify-between">
                                    <div className="img-and-name">
                                        <div className="w-20 h-20 mx-auto">
                                            <img src={friend.picture} alt="" className="w-full h-full rounded-full" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{friend.name}</h3>
                                    </div>
                                    <div className="connectionAGe">
                                        <small><span className="text-[0.75rem] text-[#244D3F]">{friend.days_since_contact}</span>d ago</small>
                                    </div>
                                    <div className="flex flex-row sm:flex sm:flex-row md:flex md:flex-col lg:flex-row gap-1 justify-center items-center">
                                        {
                                            friend.tags.map((tag, ind) => {
                                                return <div key={ind} className="text-[0.75rem] text-[#244D3F] uppercase p-1.5 bg-[#CBFADB] rounded-full">{tag}</div>
                                            })
                                        }
                                    </div>
                                    <div className={`w-fit mx-auto capitalize text-[0.75rem] py-1.5 px-2 rounded-full font-medium text-white ${friend.status === "almost due" ? "bg-[#EFAD44]" :
                                        friend.status === "overdue" ? "bg-[#EF4444]" : "bg-[#244D3F]"
                                        }`}>{friend.status}</div>
                                </div> </Link>

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;