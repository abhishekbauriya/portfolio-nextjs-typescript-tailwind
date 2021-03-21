import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
    
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme == "light" ? "dark" : "light")
    };

    return (
        <>
            <img
                src="https://avatars.githubusercontent.com/u/76206667?s=460&u=af895dfe3d83f597a70c6e95df8a07848329ea9d&v=4" 
                alt="avatar"
                className="w-32 h-32 mx-auto border rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className='text-green '>Abhishek</span> Bauriya
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500 dark:bg-dark-200"> 
                Web Developer
            </p>
            
            {/* Resume */}
            <a 
                href=""
                download="Abhishek Bauriya Resume.pdf"
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500"
            > 
                <GiTie className="w-6 h-6"/>
                <span>Download Resume</span>
            </a>

            {/* social icon */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="#">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="#">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="#">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>

            {/* address, email, phone no. */}
            <div 
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" 
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center">
                    <GoLocation className="mr-2" /> <span>Mumbai, India</span>
                </div>
                <p className="my-2"> abhishekbauriya007@gmial.com </p>
                {/* <p>Phone NO.</p> */}
            </div>

            {/* Email Button, Toggle Theme */}
            <button 
                className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none" 
                onClick={()=>window.open("mailto:abhishekbauriya007@gmail.com")}
            >
                Email Me
            </button>
            <button         
                onClick={changeTheme}
                className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:online-none hover:scale-105"
            >
                Dark UI
            </button>
        </>
    );
};

export default Sidebar;
