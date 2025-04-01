"use client";

import {FC} from "react";
import {Toaster} from "react-hot-toast";
import {SessionProvider} from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

export const Providers: FC<React.PropsWithChildren> = ({children}) => {
	return (
		<>
			<SessionProvider>{children}</SessionProvider>
			<Toaster />
			<NextTopLoader />
		</>
	);
};
