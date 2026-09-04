import { Moon } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between p-4">
            
            <div>collapseButton</div>
            
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>
                <Moon/>
                <Avatar>
                    <AvatarImage src="https://github.com/samueldeve6.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    );
};

export default Navbar