import PropTypes from 'prop-types';
import { FaCircleCheck, FaTrashCan } from 'react-icons/fa6';
import { MdEditSquare, MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import EditModal from './EditModal';
import { useState } from 'react';
import DeleteModal from './DeleteModal';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import MobileHeader from '../components/Menus/MobileHeader';
dayjs.extend(relativeTime);

const ViewTasks = ({ allTasks, setAllTasks, dark, handleMenu }) => {
    const handleChange = (id) => {
        setAllTasks((prevTasks) => {
            return prevTasks.map((task) =>
                task.id === id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            );
        });
    };

    const formattedDueDate = (dueDate) => {
        const fullDueDate = dayjs(dueDate).format('MMM D, YYYY');
        return dayjs(dueDate).fromNow() === 'in a day' ? (
            'Due tomorrow - ' + fullDueDate
        ) : dayjs(dueDate).fromNow() === 'in 7 days' ? (
            'Due in a week - ' + fullDueDate
        ) : dayjs(dueDate).diff(dayjs(), 'day') === 0 ? (
            'Due today - ' + fullDueDate
        ) : dayjs(dueDate).diff(dayjs(), 'day') < 0 ? (
            <span className='text-red-500'>Overdue - {fullDueDate}</span>
        ) : (
            `Due ${dayjs(dueDate).fromNow()} - ` + fullDueDate
        );
    };

    const [taskID, setTaskID] = useState('');

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openEditModal = (id) => {
        setTaskID(id);
        setIsEditModalOpen(true);
    };

    const openDeleteModal = (id) => {
        setTaskID(id);
        setIsDeleteModalOpen(true);
    };
    return (
        <>
            <MobileHeader dark={dark} handleMenu={handleMenu} />

            <section className='py-12 container mx-auto '>
                <h2 className='text-2xl font-bold text-center'>Tasks</h2>
                <p className='text-center'>Your To-Do list in full view</p>

                <article className='w-[500px] mx-auto'>
                    {allTasks.map(
                        ({ id, title, desc, dueDate, isCompleted }) => (
                            <div
                                key={id}
                                className='rounded-xl p-3 border-gray-300 border'
                            >
                                <div className='flex items-start justify-between gap-10'>
                                    <div>
                                        <h5
                                            className={`font-bold ${
                                                isCompleted && 'line-through'
                                            }`}
                                        >
                                            {title}
                                        </h5>
                                        <p
                                            className={`${
                                                isCompleted && 'line-through'
                                            }`}
                                        >
                                            {desc}
                                        </p>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor={`task-${id}`}
                                            className='cursor-pointer'
                                        >
                                            {isCompleted ? (
                                                <FaCircleCheck />
                                            ) : (
                                                <MdOutlineRadioButtonUnchecked />
                                            )}
                                        </label>
                                        <input
                                            type='checkbox'
                                            name={`task-${id}`}
                                            id={`task-${id}`}
                                            onChange={() => handleChange(id)}
                                            checked={isCompleted}
                                            className='h-4 w-4 appearance-none rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                </div>

                                <div className='border-t border-gray-200 flex items-center justify-between'>
                                    <p
                                        className={`${
                                            isCompleted && 'line-through'
                                        }`}
                                    >
                                        {formattedDueDate(dueDate)}
                                    </p>

                                    <div className='grid grid-cols-2 gap-x-3'>
                                        <button
                                            className='w-12 h-12'
                                            onClick={() => openEditModal(id)}
                                        >
                                            <MdEditSquare />
                                        </button>

                                        <button
                                            className='w-12 h-12'
                                            onClick={() => openDeleteModal(id)}
                                        >
                                            <FaTrashCan />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </article>
            </section>

            {isEditModalOpen && (
                <EditModal
                    allTasks={allTasks}
                    setAllTasks={setAllTasks}
                    taskID={taskID}
                    setIsEditModalOpen={setIsEditModalOpen}
                />
            )}

            {isDeleteModalOpen && (
                <DeleteModal
                    allTasks={allTasks}
                    setAllTasks={setAllTasks}
                    taskID={taskID}
                    setIsDeleteModalOpen={setIsDeleteModalOpen}
                />
            )}
        </>
    );
};

ViewTasks.propTypes = {
    allTasks: PropTypes.array,
    setAllTasks: PropTypes.func,
    dark: PropTypes.bool,
    handleMenu: PropTypes.func
};
export default ViewTasks;
