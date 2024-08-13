/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ChartNoAxesColumn, House, Inbox, Send, UserSearch } from "lucide-react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdMail } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

const Sidebar = ({ isLoginPage = false }) => {
	return (
		<aside
			className={`fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white dark:bg-black sm:flex ${isLoginPage ? "hidden" : "block"}`}
		>
			<TooltipProvider>
				<nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
					<Link
						to="/"
						className="mb-3 group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-md bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
					>
						<BiLogoGmail className="h-6 w-6 transition-all group-hover:scale-110" />
						<span className="sr-only">Reach Inbox</span>
					</Link>
					<Tooltip>
						<TooltipTrigger asChild>
							<NavLink
								to="/dashboard"
								className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors   hover:text-foreground md:h-8 md:w-8"
							>
								<House className="h-6 w-6" />
								<span className="sr-only">Dashboard</span>
							</NavLink>
						</TooltipTrigger>
						<TooltipContent side="right">Dashboard</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<NavLink
								to="/search"
								className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
							>
								<UserSearch className="h-6 w-6" />
								<span className="sr-only">Search</span>
							</NavLink>
						</TooltipTrigger>
						<TooltipContent side="right">Search</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<NavLink
								to="/mail"
								className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
							>
								<IoMdMail className="h-6 w-6" />
								<span className="sr-only">Mails</span>
							</NavLink>
						</TooltipTrigger>
						<TooltipContent side="right">Mails</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<NavLink
								to="/compose"
								className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
							>
								<Send className="h-6 w-6" />
								<span className="sr-only">compose mail</span>
							</NavLink>
						</TooltipTrigger>
						<TooltipContent side="right">compose mail</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<NavLink
								to="/list"
								className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
							>
								<TfiMenuAlt className="h-6 w-6" />
								<span className="sr-only">List</span>
							</NavLink>
						</TooltipTrigger>
						<TooltipContent side="right">List</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<NavLink
								to="/inbox"
								className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
							>
								<Inbox className="h-6 w-6" />
								<span className="sr-only">All Mails</span>
							</NavLink>
						</TooltipTrigger>
						<TooltipContent side="right">All Mails</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<NavLink
								to="/history"
								className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
							>
								<ChartNoAxesColumn className="h-6 w-6" />
								<span className="sr-only">History</span>
							</NavLink>
						</TooltipTrigger>
						<TooltipContent side="right">History</TooltipContent>
					</Tooltip>
				</nav>
				<nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								to="/analytics"
								className="flex h-14 w-14 items-center justify-center text-muted-foreground transition-colors hover:text-foreground bg-[#054F31] rounded-full md:h-10 md:w-10"
							>
								<span className="text-xl leading-3 text-white">AS</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">Settings</TooltipContent>
					</Tooltip>
				</nav>
			</TooltipProvider>
		</aside>
	);
};

export default Sidebar;
