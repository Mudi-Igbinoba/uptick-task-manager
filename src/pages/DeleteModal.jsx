import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

const DeleteModal = ({
    allTasks,
    setAllTasks,
    taskID,
    setIsDeleteModalOpen
}) => {
    const currentTask = allTasks.find((task) => task.id === taskID);
    const handleDeleteTask = () => {
        setAllTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== taskID)
        );
        setIsDeleteModalOpen(false);
    };
    return (
        <div className='bg-gray-300/40 fixed flex justify-center items-center top-0 left-0 right-0 h-screen'>
            <div className='w-10/12 mx-auto rounded-2xl p-10 bg-white'>
                <button
                    className='ml-auto block'
                    onClick={() => setIsDeleteModalOpen(false)}
                >
                    <MdClose />
                </button>
                <p>Delete Modal</p>
                <p>
                    {currentTask.isCompleted
                        ? 'Good job on completing your task! 👏'
                        : 'Maybe try completing it before deleting it 🤔'}
                </p>
                <p>
                    Are you sure you want to delete this{' '}
                    {currentTask.isCompleted ? 'completed' : 'uncompleted'}{' '}
                    task: <strong>{currentTask.title}</strong>?
                </p>
                <div className='grid gap-x-4 grid-cols-2'>
                    <button
                        onClick={handleDeleteTask}
                        className='rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                        Yes! Delete the task
                    </button>

                    <button
                        onClick={() => setIsDeleteModalOpen(false)}
                        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

DeleteModal.propTypes = {
    allTasks: PropTypes.array,
    setAllTasks: PropTypes.func,
    taskID: PropTypes.string,
    setIsDeleteModalOpen: PropTypes.func
};
export default DeleteModal;
