import { createContext, ReactNode, useContext, useState } from 'react';

type SignInCredentials = {
	email: string;
	password: string;
};

type AuthContextData = {
	signIn(credentials: SignInCredentials): Promise<void>;
	isAuthenticated: boolean;
};

type AuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	async function signIn({ email, password }: SignInCredentials) {
		console.log({ email, password });
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsAuthenticated(true);
	}

	return (
		<AuthContext.Provider value={{ signIn, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
