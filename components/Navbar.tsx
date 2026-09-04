import { LogOut, Moon, Settings, SquareMenu, User } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between p-4">
            
            <div>collapseButton</div>
            
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>
                <Moon/>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/samueldeve6.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem variant="destructive">
                                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <SquareMenu/>
                            <span className="sr-only">Open Menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
                        <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
                        <DropdownMenuItem>Menu Item 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>        
            </div>
        </nav>
    );
};

export default Navbar