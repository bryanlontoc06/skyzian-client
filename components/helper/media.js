import React from "react";
import { createMedia } from "@artsy/fresnel";
const ExampleAppMedia = createMedia({
	breakpoints: {
		xs: 0,
		sm: 480,
		md: 992,
		lg: 1024,
		xl: 1192,
	},
});

// Generate CSS to be injected into the head
export const mediaStyle = ExampleAppMedia.createMediaStyle();
export const { Media: MediaCustom, MediaContextProvider } = ExampleAppMedia;

export const Media = ({ children, customClassName, ...others }) => {
	return (
		<MediaCustom {...others} className={customClassName}>
			{children}
		</MediaCustom>
	)
}

const MediaComponentWrapper = ({ children, ...others }) => {
	return (
		<MediaCustom {...others}>
			{(mediaClassNames, renderChildren) => {
				return renderChildren ? (
					React.cloneElement(children, { className: mediaClassNames })
				) : '';
			}}
		</MediaCustom>
	);
};

export const MediaComponent = MediaComponentWrapper;
