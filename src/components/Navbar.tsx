import { Leaf } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";

export function Navbar({ children }: any) {

    return (
        <nav className="border-b dark:border-border">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <a href="#" className="text-primary rounded-md px-3 py-2 text-md font-medium flex items-center gap-2" aria-current="page"> <Leaf size={22} /> Plant Disease Detection</a>
                    <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {children}
                        <div className="relative ml-3">
                            <div>
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}