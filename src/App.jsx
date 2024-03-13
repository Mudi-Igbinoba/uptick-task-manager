import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import ViewTasks from './pages/ViewTasks';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='add-task' element={<AddTask />} />
                <Route path='view-tasks' element={<ViewTasks />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
