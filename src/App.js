import { useEffect } from 'react';
import './App.css';
import { Header } from './components';
import { AllRoutes } from './routes/AllRoutes';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/slice/userSlice';


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUsers());
    // eslint-disable-next-line
  },[]);

  return (
    <div className="min-h-[100vh]">
      <Header/>
      <AllRoutes/>
    </div>
  );
}

export default App;
