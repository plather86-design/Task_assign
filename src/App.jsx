import React, { useContext, useEffect , useState} from 'react'
import Login from './components/Auth/Login'
import { EmployeDashboard } from './components/Dasboard/EmployeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { GetLocalStorage, SetLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


function App() {
  const [user, setUser] = useState(null)
  const data = useContext(AuthContext)
  const [userLoginData, setUserLoginData] = useState(null)

  useEffect(() => {
  SetLocalStorage()
  

  },)
  useEffect(() => {
   if(JSON.parse(localStorage.getItem("logedInUser"))==null || JSON.parse(localStorage.getItem("logedInUser")) == {}){
   }
  else{
    if(user==null){
    setUser(JSON.parse(localStorage.getItem("logedInUser")).role)
    setUserLoginData(JSON.parse(localStorage.getItem("logedInUser")).data)}
   }
  },)
  
  

  
  // console.log(JSON.parse(localStorage.getItem("admisn")))

  const handleLogin = (email,password)=>{

    if (email == "admin" && password == "123") {
      setUserLoginData(data.admin[0])
      setUser("admin")
      localStorage.setItem("logedInUser",JSON.stringify({role:"admin",data:data.admin[0]}))
    }
    else{
      data.employees.forEach(element => {
       if(element.email == email && element.password == password){
          
          setUserLoginData(element)
          setUser("employee")
          localStorage.setItem("logedInUser",JSON.stringify({role:"employee",data:element}))
       console.log(user)
       }
    })
    }
  }
  


  return (
    <>
    {!user ? <Login handleLogin={handleLogin}></Login> : "" }
    {/* <Login></Login> */}
    {user=="admin"?<AdminDashboard userLoginData={userLoginData}></AdminDashboard>:""}
    {user=="employee"?<EmployeDashboard userLoginData={userLoginData}></EmployeDashboard>:""}
    {/* <EmployeDashboard></EmployeDashboard> */}
    {/* <AdminDashboard></AdminDashboard> */}
    </>
  )
}

export default App 