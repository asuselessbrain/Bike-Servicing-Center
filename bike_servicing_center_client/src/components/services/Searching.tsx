import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";

const Searching = () => {
    return (
        <form className="border border-gray-700 rounded px-2 py-2 flex items-center justify-between flex-1 w-full">
            <input type="text" name="search" id="search" className="w-full focus:outline-none px-4 py-2" placeholder="Search your services" />
            <Button className="rounded"><FaSearch />Search</Button>
        </form>

    );
};

export default Searching;