import { FC } from "react";
import {Main} from "../pages";

/**
 * Basic route type that the router consumes for dynamic generation
 */
type Route = {
	path: string;
	component: FC;
};

/**
 * Define your routes here
 */
export const routes: Route[] = [
	{
		path: "/",
		component: Main,
	},
];
