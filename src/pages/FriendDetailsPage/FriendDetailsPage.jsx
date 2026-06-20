import { useLoaderData, useParams } from "react-router";

const FriendsDetailsPage = () => {
    const {id} = useParams();
    console.log(id);

    const freindsData = useLoaderData()
    // console.log(freindsData);
    const targetedFriend = freindsData.find(friend => friend.id === parseInt(id));
    // console.log(targetedFriend);

    return (
        <div className="bg-[#F8FAFC]">
            <div className="w-9/12 mx-auto py-20 grid grid-cols-5 grid-rows-8">
                <div className="py-4 px-8 bg-accent col-span-2 row-span-4">1</div>
                <div className="py-4 px-8 bg-amber-200 row-span-2">2</div>
                <div className="py-4 px-8 bg-amber-700 row-span-2">3</div>
                <div className="py-4 px-8 bg-green-400 row-span-2">4</div>
                <div className="py-4 px-8 bg-red-400 col-span-3 row-span-2">5</div>
                <div className="py-4 px-8 bg-blue-600 col-start-1 col-span-2">6</div>
                <div className="py-4 px-8 bg-violet-700 col-start-1 col-span-2">7</div>
                <div className="py-4 px-8 bg-green-800 col-start-1 col-span-2">8</div>
                <div className="py-4 px-8 bg-yellow-400 col-start-3 row-start-5 col-span-3 row-span-3">9</div>
            </div>

        </div>
    );
};

export default FriendsDetailsPage;