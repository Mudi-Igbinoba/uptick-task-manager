import { NavLink } from 'react-router-dom';
import { BsLayoutSidebar, BsLayoutSidebarInset } from 'react-icons/bs';
import {
    TbMoonFilled,
    TbMoonStars,
    TbSmartHome,
    TbSun,
    TbSunFilled
} from 'react-icons/tb';
import { MdAddTask, MdCloudCircle } from 'react-icons/md';
import { GoTasklist } from 'react-icons/go';
import PropTypes from 'prop-types';
import MobileMenu from './Menus/MobileMenu';

const Header = ({ dark, handleDarkMode, isMenuClosed, handleMenu }) => {
    return (
        <>
            <header
                className={`h-screen mini:flex flex-col transition-all duration-300 justify-between fixed hidden  ${
                    isMenuClosed ? 'mini:w-fit' : 'mini:w-1/5'
                } w-1/2 border-r border-indigo-950 dark:border-white p-5 shadow-2xl dark:shadow-xl dark:shadow-black/50`}
            >
                <aside className='text-base font-medium space-y-8'>
                    <div
                        className={`flex justify-between items-center ${
                            isMenuClosed && 'gap-2'
                        }`}
                    >
                        <h1 className='font-ojuju font-bold text-3xl transition-all duration-300 flex items-center m-0 text-indigo-500'>
                            <MdCloudCircle className='mr-1.5' />
                            {!isMenuClosed && 'UpTask'}
                        </h1>
                        <button
                            className='text-xl transition-all duration-300'
                            onClick={handleMenu}
                        >
                            {dark ? (
                                <BsLayoutSidebarInset />
                            ) : (
                                <BsLayoutSidebar />
                            )}
                        </button>
                    </div>
                    <nav>
                        <ul className='space-y-1.5'>
                            <NavLink className='block' to='/'>
                                <li
                                    className={`nav-link  ${
                                        isMenuClosed && 'justify-center'
                                    }`}
                                >
                                    <TbSmartHome
                                        className={`text-xl transition-all duration-300 ${
                                            !isMenuClosed && 'mr-2'
                                        }`}
                                    />{' '}
                                    {!isMenuClosed && 'Home'}
                                </li>
                            </NavLink>

                            <NavLink className='block' to='/add-task'>
                                <li
                                    className={`nav-link  ${
                                        isMenuClosed && 'justify-center'
                                    }`}
                                >
                                    <MdAddTask
                                        className={`text-xl transition-all duration-300 ${
                                            !isMenuClosed && 'mr-2'
                                        }`}
                                    />{' '}
                                    {!isMenuClosed && 'Add Tasks'}
                                </li>
                            </NavLink>

                            <NavLink className='block' to='/view-tasks'>
                                <li
                                    className={`nav-link  ${
                                        isMenuClosed && 'justify-center'
                                    }`}
                                >
                                    <GoTasklist
                                        className={`text-xl transition-all duration-300 ${
                                            !isMenuClosed && 'mr-2'
                                        }`}
                                    />{' '}
                                    {!isMenuClosed && 'View Tasks'}
                                </li>
                            </NavLink>
                        </ul>
                    </nav>
                </aside>
                <div className='space-y-8'>
                    <button className='toggle-wrap block mx-auto transition-all duration-300'>
                        <label
                            htmlFor='toggle'
                            className={`flex relative items-center text-2xl ${
                                isMenuClosed
                                    ? 'flex-col gap-y-2'
                                    : 'flex-row gap-x-2 '
                            }`}
                        >
                            {dark ? (
                                <TbSun className='text-amber-400' />
                            ) : (
                                <TbSunFilled className='text-amber-400' />
                            )}
                            <div
                                className={`bg-white cursor-pointer relative ${
                                    isMenuClosed ? 'h-16 w-8' : 'w-16 h-8'
                                } rounded-full border-2 border-zinc-300 dark:bg-zinc-800 shadow-lg shadow-slate-200 dark:shadow-black/50`}
                            >
                                <input
                                    type='checkbox'
                                    id='toggle'
                                    className='toggle-input hidden'
                                    checked={dark}
                                    onChange={handleDarkMode}
                                ></input>
                                <div
                                    className={`toggle-switch ${
                                        isMenuClosed
                                            ? 'vertical top-0 translate-y-0'
                                            : 'horizontal left-0 translate-x-0'
                                    } transition-all duration-300 absolute m-0.5 h-6 w-6  rounded-full bg-indigo-500 dark:bg-white`}
                                ></div>
                            </div>

                            {dark ? (
                                <TbMoonFilled className='text-indigo-800' />
                            ) : (
                                <TbMoonStars className='text-indigo-800' />
                            )}
                        </label>
                    </button>

                    <p
                        className={
                            'mt-auto text-lg font-bold text-center font-ojuju'
                        }
                    >
                        &copy; Mudi
                    </p>
                </div>
            </header>
            <MobileMenu
                dark={dark}
                handleDarkMode={handleDarkMode}
                isMenuClosed={isMenuClosed}
                handleMenu={handleMenu}
            />
        </>
    );
};

Header.propTypes = {
    dark: PropTypes.bool,
    isMenuClosed: PropTypes.bool,
    handleDarkMode: PropTypes.func,
    handleMenu: PropTypes.func
};
export default Header;
