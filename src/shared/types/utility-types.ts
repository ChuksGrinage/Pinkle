import { ParsedUrlQuery } from "querystring"

export type HTMLElementEvent<T extends HTMLElement> = Event & {
	target: T;
	currentTarget: T;
}


export type GetStaticPropsContext<T extends ParsedUrlQuery = ParsedUrlQuery> = {
	params?: T
}