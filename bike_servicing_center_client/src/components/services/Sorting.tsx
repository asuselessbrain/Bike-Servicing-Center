
const Sorting = () => {
    return (
        <div className="px-6 py-4 border border-gray-700 rounded w-full lg:w-auto">
            <select name="cars" id="cars" className="w-full focus:outline-none dark:bg-black" defaultValue="">
                <option value="" disabled>Sort By</option>
                <option value="saab">Price Low to High</option>
                <option value="opel">Price High to Low</option>
                <option value="audidsfg">Discount Low to High</option>
                <option value="audiefg">Discount High to Low</option>
                <option value="audiegr">Newest First</option>
                <option value="audiger">Oldest First</option>
            </select>
        </div>
    );
};

export default Sorting;