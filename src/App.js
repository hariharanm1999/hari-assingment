import logo from './logo.svg';
import './App.css';
import EmployeeList from './employee/employeelist';

function App() {
  return (
    <div className='auth'>
    <div className='auth--card'>
      <h1 className='auth--logo'>EMPLOYEE LIST</h1>
      
      <EmployeeList />
    </div>
    </div>
  );
}

export default App;
