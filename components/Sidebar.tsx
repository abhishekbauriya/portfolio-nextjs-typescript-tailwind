import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <>
            <img
                src='https://avatars.githubusercontent.com/u/76206667?s=460&u=af895dfe3d83f597a70c6e95df8a07848329ea9d&v=4' alt='avatar'
                className='w-32 h-32 mx-auto border rounded-full'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-green'>Abhishek </span>
                Bauriya
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'> Web Developer
            </p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" 
                href="" 
                download="name">
                <GiTie className='w-6 h-6'/> Download Resume
            </a>

            {/* social icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href="#">
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="#">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="#">
                    <AiFillInstagram className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>

            {/* address, email, phone no. */}
            <div className='py-4 my-5 bg-gray-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Mumbai, India</span>
                </div>
                <p className='my-2'>abhishekbauriya007@gmial.com</p>
                {/* <p>Phone NO.</p> */}
            </div>

            {/* Email Button, Toggle Theme */}
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' onClick={()=>window.open('mailto:abhishekbauriya007@gmail.com')}>Email Me</button>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Theme</button>
        </>
    )
}

export default Sidebar
