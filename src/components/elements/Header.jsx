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
import { Link, useNavigate } from "react-router-dom";
import { ThemeToggle } from "../utils/ThemeToggle";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";

const Header = () => {
	const { logout, user, isAuthenticated, isLoading } = useAuth0();
	const navigate = useNavigate();

	if (isLoading) {
		return <Loader />;
	}

	if (!isAuthenticated) {
		navigate("/signup");
	}

	return (
		<header className="sticky text-black dark:text-white top-0 z-30 py-2 flex h-14 items-center gap-4 border-b  px-4 sm:static sm:h-auto  sm:px-6 bg-white dark:bg-[#1F1F1F] dark:border-2 dark:border-[#343A40]">
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
			<h1 className="text-base  font-bold">Onebox</h1>
			<div className="relative ml-auto flex-1 md:grow-0">
				<ThemeToggle />
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="link" className="overflow-hidden flex items-center gap-2">
						<h5 className="">{user?.name || ""}&apos;s Workspace</h5>
						<ChevronDown className="mt-1" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Settings</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};

export default Header;
