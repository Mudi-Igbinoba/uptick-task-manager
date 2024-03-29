import { MdCloudCircle } from 'react-icons/md';
import { BsLayoutSidebar, BsLayoutSidebarInset } from 'react-icons/bs';
import PropTypes from 'prop-types';

const MobileHeader = ({ dark, handleMenu }) => {
    return (
        <div className='mini:hidden flex justify-between border-b border-indigo-200 dark:border-indigo-950 items-center p-5 mx-auto shadow-lg dark:shadow-black/20'>
            <button className='text-xl' onClick={handleMenu}>
                {dark ? <BsLayoutSidebarInset /> : <BsLayoutSidebar />}
            </button>
            <h1 className='font-ojuju me-8 font-bold text-2xl text-center justify-center flex items-center m-0 text-indigo-500'>
                <MdCloudCircle className='mr-1.5' />
                UpTask
            </h1>
            <div></div>
        </div>
    );
};

MobileHeader.propTypes = {
    dark: PropTypes.bool,
    handleMenu: PropTypes.func
};
export default MobileHeader;
