import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TextEditor from './TextEditor';

const Home = () => {
    const [isDay, setIsDay] = useState(false);

    useEffect(() => {
        const body = document.body;
        const navbar = document.getElementById("navbar");
        if (isDay) {
            body.classList.add('bg-white', 'text-black');
            body.classList.remove('bg-black', 'text-white');
            navbar.classList.remove('bg-gray-800','text-white');
            navbar.classList.add('bg-rose-600','text-white');
        } else {
            body.classList.add('bg-black', 'text-white');
            body.classList.remove('bg-white', 'text-black');
            navbar.classList.add('bg-gray-800','text-white');
            navbar.classList.remove('bg-rose-600','text-white');
        }
    }, [isDay]);

    const toggleTheme = () => {
        setIsDay((prevTheme) => !prevTheme);
    };

    return (
        <div className=''>
            <Navbar theme={toggleTheme} />
            <div className="flex items-center justify-center w-full flex-col gap-4 mt-10">
                <TextEditor/>
            </div>
        </div>
    );
};

export default Home;