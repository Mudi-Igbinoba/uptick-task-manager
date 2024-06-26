import dayjs from 'dayjs';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import MobileHeader from '../components/Menus/MobileHeader';

const AddTask = ({ allTasks, setAllTasks, dark, handleMenu }) => {
    const todaysDate = dayjs().format('YYYY-MM-DD');

    return (
        <>
            <MobileHeader dark={dark} handleMenu={handleMenu} />

            <section className='py-12 px-5 container mx-auto text-center'>
                <h2 className='text-2xl font-bold'>Add Task</h2>
                <p className=''>
                    Fill up the form below with the required details about your
                    task
                </p>
                <Formik
                    initialValues={{
                        title: '',
                        desc: '',
                        dueDate: todaysDate,
                        isCompleted: false
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required('Task Title is required!')
                            .test(
                                'duplicate-task',
                                'Task with same title already exists!',
                                function (value) {
                                    const existingTask = allTasks.find(
                                        (task) => task.title === value
                                    );
                                    return !existingTask;
                                }
                            ),

                        desc: Yup.string().required(
                            'Task Description is required!'
                        ),

                        dueDate: Yup.string().required(
                            'Due date of the task is required!'
                        )
                    })}
                    onSubmit={(values) => {
                        setAllTasks([...allTasks, { ...values, id: nanoid() }]);
                    }}
                >
                    <Form className='space-y-8 mx-auto'>
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

                        <div className='grid grid-cols-2'>
                            <button
                                type='submit'
                                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Add
                            </button>

                            <button
                                type='reset'
                                className='rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Reset
                            </button>
                        </div>
                    </Form>
                </Formik>
            </section>
        </>
    );
};

AddTask.propTypes = {
    allTasks: PropTypes.array,
    setAllTasks: PropTypes.func,
    dark: PropTypes.bool,
    handleMenu: PropTypes.func
};

export default AddTask;
