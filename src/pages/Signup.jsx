import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { BiLogoGmail } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { googleIcon } from "../assets/images";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Signup = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-[#121212]">
			<div className="text-white w-fit border-[1.3px] p-0 m-0 border-[#909296] flex items-center">
				<div className="bg-[#e9ecf1]">
					<BiLogoGmail className="text-black" />
				</div>
				<p className="leading-3 ml-1">REACHINBOX</p>
			</div>
			<Card className="w-[460px] border-[#343A40] pt-6 pr-10 pb-10 pl-10 bg-gradient-to-tr from-[#111214] to-[#121212]">
				<CardHeader>
					<CardTitle className="text-center text-white">
						<h1 className="text-xl font-semibold">Create a new account</h1>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Button
						onClick={() => loginWithRedirect()}
						variant="primary"
						className="w-full mt-2 mb-16 text-[#707172] flex items-center justify-center border-[1px] border-[#707172]"
					>
						<img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
						Sign Up with Google
					</Button>
					<Link to="/">
						<Button className="px-[35px] py-[13px] flex items-center rounded-[4px] w-[195px] h-[48px]  justify-center mx-auto  bg-gradient-to-r from-[#4B63DD] to-[#0524bfee] text-white text-sm font-semibold">
							Create an Account
						</Button>
					</Link>
					<div className="mt-4 text-center text-base  text-[#909296]">
						<p>
							Already have an account?
							<a href="/login" className="text-blue-500">
								{" "}
								Sign in
							</a>
						</p>
					</div>
				</CardContent>
			</Card>
			<h2></h2>
		</div>
	);
};

export default Signup;
