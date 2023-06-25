import React from "react";
import Image from "next/image";
import { Button } from "@/components";
import "./header.css";

type User = {
	name: string;
};

interface HeaderProps {
	user?: User;
	onLogin: () => void;
	onLogout: () => void;
	onCreateAccount: () => void;
}

export const Header = ({
	user,
	onLogin,
	onLogout,
	onCreateAccount,
}: HeaderProps) => (
	<header>
		<div className="storybook-header">
			<div>
				<Image
					src={"/assets/colors.svg"}
					alt="colors"
					width={30}
					height={30}
				/>
				<h1>Code: CleanSlate13</h1>
			</div>
			<div>
				{user ? (
					<>
						<span className="welcome">
							Welcome, <b>{user.name}</b>!
						</span>
						<Button onClick={onLogout}>Log out</Button>
					</>
				) : (
					<>
						<Button onClick={onLogin}>Log in</Button>
						<Button onClick={onCreateAccount}>sign up</Button>
					</>
				)}
			</div>
		</div>
	</header>
);
