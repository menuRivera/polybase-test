import { Polybase } from "@polybase/client";
import { PolybaseProvider } from "@polybase/react";
import React, { ReactNode } from "react";

const polybase = new Polybase({
	defaultNamespace: "pk/0xbf8be12b5f259a83bfa4844b796574d298fbcecbc284047a29efbbfb8bbb16fee887511adec45c49987d6d9982f02065b3e2c7f5c153af5a6b25a56b86ea3008/rivera",
});

interface Props {
	children: ReactNode
}
const PolybaseProviders: React.FC<Props> = ({ children }) => {
	return (
		<PolybaseProvider polybase={polybase}>
			{children}
		</PolybaseProvider>
	)
}

export default PolybaseProviders
