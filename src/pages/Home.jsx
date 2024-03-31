import { Link } from 'react-router-dom';
import illustration from '../assets/florid-task-management.gif';
import { MdStart } from 'react-icons/md';
import PropTypes from 'prop-types';
import MobileHeader from '../components/Menus/MobileHeader';

const Home = ({ dark, handleMenu }) => {
    return (
        <>
            <MobileHeader dark={dark} handleMenu={handleMenu} />

            <section className='text-center container mx-auto py-10 lg:space-y-4 space-y-6 px-8'>
                <h2 className='font-ojuju transition-all duration-300 md:text-4xl sm:text-3xl text-2xl font-bold text-indigo-700 dark:text-white'>
                    Empower Your Productivity,{' '}
                    <br className='sm:block hidden' /> One Task at a Time!
                </h2>

                <img
                    src={illustration}
                    className='mx-auto  lg:w-1/3 mini:w-2/5 md:w-1/2 sm:w-3/5 w-5/6'
                    alt='illustration'
                />

                <Link
                    to='add-task'
                    className='py-5 flex transition-all duration-300 xl:w-1/5 mini:w-1/4 sm:w-1/3 w-3/5 sm:text-base font-semibold mx-auto rounded-full justify-center items-center bg-indigo-700 text-white shadow-md shadow-indigo-700/40 border-2 border-indigo-700 hover:bg-white hover:text-indigo-700  hover:border-indigo-700 hover:shadow-black/30 focus:bg-white focus:text-indigo-700  focus:border-indigo-700 focus:shadow-black/30 focus:scale-90 active:bg-white active:text-indigo-700  active:border-indigo-700 active:shadow-black/30 active:scale-90'
                >
                    Get Started
                    <MdStart className='ml-2' />
                </Link>
            </section>
        </>
    );
};
Home.propTypes = {
    dark: PropTypes.bool,
    handleMenu: PropTypes.func
};
export default Home;
