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

const MobileMenu = ({ dark, handleDarkMode, isMenuClosed, handleMenu }) => {
    return (
        <>
            <header
                className={`h-screen mini:hidden flex flex-col md:w-3/4 w-full justify-between fixed bg-gray-50/95 dark:bg-zinc-900/95 ${
                    isMenuClosed ? '-left-full' : 'left-0 '
                }  border-r transition-all duration-300 border-indigo-950 dark:border-white p-5 shadow-2xl dark:shadow-xl dark:shadow-black/50 z-50`}
            >
                <aside className='text-base font-medium space-y-8'>
                    <div
                        className={`flex justify-between items-center ${
                            isMenuClosed && 'gap-2'
                        }`}
                    >
                        <h1 className='font-ojuju font-bold text-3xl flex items-center m-0 text-indigo-500'>
                            <MdCloudCircle className='mr-1.5' />
                            UpTask
                        </h1>
                        <button className='text-xl' onClick={handleMenu}>
                            {dark ? (
                                <BsLayoutSidebarInset />
                            ) : (
                                <BsLayoutSidebar />
                            )}
                        </button>
                    </div>
                    <nav>
                        <ul className='space-y-1.5'>
                            <NavLink
                                className='block'
                                to='/'
                                onClick={handleMenu}
                            >
                                <li className='nav-link'>
                                    <TbSmartHome className='text-xl mr-2' />{' '}
                                    Home
                                </li>
                            </NavLink>

                            <NavLink
                                className='block'
                                to='/add-task'
                                onClick={handleMenu}
                            >
                                <li className='nav-link'>
                                    <MdAddTask className='text-xl mr-2' /> Add
                                    Tasks
                                </li>
                            </NavLink>

                            <NavLink
                                className='block'
                                to='/view-tasks'
                                onClick={handleMenu}
                            >
                                <li className='nav-link'>
                                    <GoTasklist className='text-xl mr-2' /> View
                                    Tasks
                                </li>
                            </NavLink>
                        </ul>
                    </nav>
                </aside>
                <div className='space-y-8'>
                    <button className={'toggle-wrap block mx-auto'}>
                        <label
                            htmlFor='toggle'
                            className='flex relative items-center text-2xl gap-x-2'
                        >
                            {dark ? (
                                <TbSun className='text-amber-400' />
                            ) : (
                                <TbSunFilled className='text-amber-400' />
                            )}
                            <div className='bg-white cursor-pointer relative w-16 h-8 rounded-full border-2 border-zinc-300 dark:bg-zinc-800 shadow-lg shadow-slate-200 dark:shadow-black/50'>
                                <input
                                    type='checkbox'
                                    id='toggle'
                                    className='toggle-input hidden'
                                    checked={dark}
                                    onChange={handleDarkMode}
                                ></input>
                                <div className='toggle-switch absolute m-0.5 h-6 w-6 horizontal left-0 translate-x-0  rounded-full bg-indigo-500 dark:bg-white transition-all duration-300'></div>
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
        </>
    );
};

MobileMenu.propTypes = {
    dark: PropTypes.bool,
    isMenuClosed: PropTypes.bool,
    handleDarkMode: PropTypes.func,
    handleMenu: PropTypes.func
};
export default MobileMenu;
