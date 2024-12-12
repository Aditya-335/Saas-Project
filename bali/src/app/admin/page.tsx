import { Button } from "@/components/ui/button";
import UserAccountnav from "../components/UserAccountSignOut";
import { authOptions } from "@/lib/auth";
import { Link } from "lucide-react";
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react";


const page = async() => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
    <div>Welcome to admin {session?.user.username}</div>
    <div>
        <UserAccountnav></UserAccountnav>
    
    
    </div>
    </>

    )}

export default page