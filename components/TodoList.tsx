"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"


const TodoList = () => {

    const [date,setDate] = useState<Date>(new Date());
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button>
                        <CalendarIcon/>
                        {date ? format(date, "PPP"): <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader>
                        <PopoverTitle>Title</PopoverTitle>
                        <PopoverDescription>Description text here.</PopoverDescription>
                    </PopoverHeader>
                </PopoverContent>
            </Popover>
            {/* LIST */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col ga-4">
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>{/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )

}

export default TodoList