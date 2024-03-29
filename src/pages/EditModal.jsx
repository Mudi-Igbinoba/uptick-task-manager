import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';

const EditModal = ({ allTasks, setAllTasks, taskID, setIsEditModalOpen }) => {
    const currentTask = allTasks.find((task) => task.id === taskID);
    const todaysDate = dayjs().format('YYYY-MM-DD');

    return (
        <div className='bg-gray-300/40 fixed flex justify-center items-center top-0 left-0 right-0 h-screen'>
            <div className='w-10/12 mx-auto rounded-2xl p-10 bg-white'>
                <button
                    className='ml-auto block'
                    onClick={() => setIsEditModalOpen(false)}
                >
                    <MdClose />
                </button>
                <h3>Edit Modal: {taskID}</h3>
                <Formik
                    initialValues={{
                        title: currentTask.title,
                        desc: currentTask.desc,
                        dueDate: currentTask.dueDate,
                        isCompleted: currentTask.isCompleted
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('Task Title is required!'),
                        desc: Yup.string().required(
                            'Task Description is required!'
                        ),

                        dueDate: Yup.string().required(
                            'Due date of the task is required!'
                        )
                    })}
                    onSubmit={(values) => {
                        setAllTasks((prevTasks) =>
                            prevTasks.map((task) =>
                                task.id === taskID
                                    ? { ...task, ...values }
                                    : task
                            )
                        );
                    }}
                >
                    <Form className='grid grid-cols-2 gap-4 mx-auto'>
                        <div>
                            <label htmlFor='title'>Title</label>
                            <br />
                            <Field
                                id='title'
                                name='title'
                                type='text'
                                placeholder='e.g Clean my room'
                                className='p-5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
                            />
                            <br />
                            <ErrorMessage name='title' />
                        </div>

                        <div>
                            <label htmlFor='desc'>Description</label>
                            <br />

                            <Field
                                as='textarea'
                                id='desc'
                                name='desc'
                                placeholder='e.g Sweep and mop my room'
                                className='p-5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
                            />
                            <br />

                            <ErrorMessage name='desc' />
                        </div>

                        <div>
                            <label htmlFor='dueDate'>Due Date</label>
                            <br />
                            <Field
                                id='dueDate'
                                type='date'
                                min={todaysDate}
                                name='dueDate'
                                className='p-5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
                            />
                            <br />
                            <ErrorMessage name='dueDate' />
                        </div>

                        <div className=''>
                            <button
                                type='submit'
                                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Update
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

EditModal.propTypes = {
    allTasks: PropTypes.array,
    setAllTasks: PropTypes.func,
    taskID: PropTypes.string,
    setIsEditModalOpen: PropTypes.func
};
export default EditModal;
