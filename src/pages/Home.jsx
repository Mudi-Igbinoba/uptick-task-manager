import { Link } from 'react-router-dom';
import illustration from '../assets/task-animate.svg';
import { MdAddTask } from 'react-icons/md';

const Home = () => {
    return (
        <section className='text-center container mx-auto py-10'>
            <h2 className='font-ojuju text-2xl font-semibold'>
                Welcome to UpTask
            </h2>
            <p>
                Your #1 stop for managing all your everyday tasks. Don&apos;t
                waste anymore time, click on the button below to begin keeping
                track of your tasks.
            </p>

            <img
                src={illustration}
                className='w-1/2 mx-auto'
                alt='illustration'
            />

            <Link
                to='add-task'
                className='py-5 flex justify-center items-center bg-blue-400 rounded-sm'
            >
                Add Task
                <span className='ml-2'>
                    <MdAddTask />
                </span>
            </Link>
        </section>
    );
};

export default Home;
