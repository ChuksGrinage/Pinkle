/*
 * The idea for this was taken from here: https://stackoverflow.com/questions/51504506/too-many-react-context-providers/58924810#58924810
 *
 * This allows you to compose several Components together.  Where you would do this:
 *
 * <Comp1 someProp={1}>
 *   <Comp2>
 *     <div>hello</div>
 *   </Comp2>
 * </Comp1>
 *
 * You can now do this:
 *
 * const Components = compose(
 *   [Comp1, {someProp: 1}],
 *   Comp2
 * );
 *
 * <Components>
 *   <div>hello</div>
 * </Components>
 *
 * @param ...items can be a mixed array of tuples or components.
 *   * if a tuple is encountered
 *     * the 1st item of the tuple is assumed to be a Component
 *     * the 2nd item of the tuple is assumed to be an object of props to spread onto the Component.
 *   * if a Component is encountered
 *     * it wraps the rest of the items supplied.
 *
 * @return a react component
 */

// interface ComposeProps {
// 	components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
// 	children: React.ReactNode
// }

export function compose(...items) {
	return function ({ children }) {
		return items.reduceRight((acc, item) => {
			let Comp
			let props

			if (Array.isArray(item)) {
				Comp = item[0]
				props = item[1] ?? {}
			} else {
				Comp = item
				props = {}
			}

			return <Comp {...props}>{acc}</Comp>
		}, children)
	}
}
