import { ChevronDown, Home, LineChart, Package, Package2, PanelLeft, ShoppingCart, Users2 } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="sticky top-0 z-30 py-2 flex h-14 items-center gap-4 border-b  px-4 sm:static sm:h-auto  sm:px-6 bg-[#1F1F1F] border-2 border-[#343A40]">
			<Sheet>
				<SheetTrigger asChild>
					<Button size="icon" variant="outline" className="sm:hidden">
						<PanelLeft className="h-5 w-5" />
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="sm:max-w-xs">
					<nav className="grid gap-6 text-lg font-medium">
						<Link
							href="#"
							className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
						>
							<Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
							<span className="sr-only">Acme Inc</span>
						</Link>
						<Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
							<Home className="h-5 w-5" />
							Dashboard
						</Link>
						<Link href="#" className="flex items-center gap-4 px-2.5 text-foreground">
							<ShoppingCart className="h-5 w-5" />
							Orders
						</Link>
						<Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
							<Package className="h-5 w-5" />
							Products
						</Link>
						<Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
							<Users2 className="h-5 w-5" />
							Customers
						</Link>
						<Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
							<LineChart className="h-5 w-5" />
							Settings
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<h1 className="text-base text-white font-bold">Onebox</h1>
			<div className="relative ml-auto flex-1 md:grow-0"></div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="link" className="overflow-hidden flex items-center gap-2 text-white">
						<h5 className="">Trim&apos;s workspace</h5>
						<ChevronDown className="mt-1" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Settings</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};

export default Header;
