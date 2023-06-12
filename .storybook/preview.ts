import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
// import * as NextImage from "next/image";

import "../src/app/globals.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

// Object.defineProperty(NextImage, "default", {
// 	configurable: true,
// 	value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

// export const globalTypes = {
// 	darkMode: true,
// };

// export default preview;
