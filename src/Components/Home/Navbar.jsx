const Navbar = ({ theme }) => {
    return (
        <div className="w-full p-4 flex justify-center items-center bg-rose-600 text-white shadow-xl" id="navbar">
            <div className="w-[80%] flex justify-between items-center">
                <p className=" text-2xl font-serif">Text Editor</p>
                <div className="flex gap-4 text-sm ">
                    <p className="hover:text-gray-200 cursor-pointer hover:scale-105 transition-all" >Home</p>
                    <p className="hover:text-gray-200 cursor-pointer hover:scale-105 transition-all">About</p>
                    <p className="hover:text-gray-200 cursor-pointer hover:scale-105 transition-all">Contact</p>
                </div>
                <button
                    className="bg-rose-500 hover:bg-rose-400 p-2 rounded-full text-white text-sm"
                    onClick={theme}
                >
                    Change Theme
                </button>
            </div>
        </div>
    );
};

export default Navbar;