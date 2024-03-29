import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import ViewTasks from './pages/ViewTasks';
import Header from './components/Header';
import { useEffect, useState } from 'react';
// import DesktopMenu from './components/Menus/DesktopMenu';

function App() {
    const storedTasks = JSON.parse(localStorage.getItem('allTasks'));
    const [allTasks, setAllTasks] = useState(storedTasks || []);

    useEffect(() => {
        localStorage.setItem('allTasks', JSON.stringify(allTasks));
    }, [allTasks]);

    const [darkMode, setDarkMode] = useState(false);
    const [isMenuClosed, setIsMenuClosed] = useState(false);

    const handleMenu = () => {
        setIsMenuClosed(!isMenuClosed);
    };

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={`mini:flex h-screen text-gray-950 dark:text-white bg-gray-50 dark:bg-zinc-900 font-montalt text-sm  ${
                darkMode && 'dark'
            }`}
        >
            <Header
                dark={darkMode}
                handleDarkMode={handleDarkMode}
                isMenuClosed={isMenuClosed}
                handleMenu={handleMenu}
            />

            <main
                className={`w-full z-0  ${
                    isMenuClosed ? 'mini:ml-[105px]' : 'mini:ml-[20%]'
                }`}
            >
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Home dark={darkMode} handleMenu={handleMenu} />
                        }
                    />
                    <Route
                        path='add-task'
                        element={
                            <AddTask
                                allTasks={allTasks}
                                setAllTasks={setAllTasks}
                                dark={darkMode}
                                handleMenu={handleMenu}
                            />
                        }
                    />
                    <Route
                        path='view-tasks'
                        element={
                            <ViewTasks
                                allTasks={allTasks}
                                setAllTasks={setAllTasks}
                                dark={darkMode}
                                handleMenu={handleMenu}
                            />
                        }
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
