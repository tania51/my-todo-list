"use client"
import { useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { AuthContext } from "./providers/AuthProvider/AuthProvider";
import { useRouter } from 'next/navigation'

const HomePage = () => {
  const {user} = useContext(AuthContext)
  const router = useRouter()
    if(user !== null) {
      return (
        <div>
            <Sidebar></Sidebar>
        </div>
      );
    }
    if(user === null) {
      const redirectLoginPage = router.push('./login')
      return redirectLoginPage;
    }
  
};

export default HomePage;