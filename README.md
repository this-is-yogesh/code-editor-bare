Notes :

1.how to define variables in css
use , --widthValue : 30px, width : var(--widthValue)
under :root selector for globalscope access and under any other selector for local scope access
use (--widthValue, 50px) will use 50px if widthvalue not defined

2.{children: ReadOnly<{children:React.ReactNode}>}
The : Readonly<{ children: React.ReactNode; }> part is a TypeScript type annotation that defines the shape and type of the component's props.

Readonly<...>: Ensures the props object is immutable, meaning the children property cannot be modified within the component. This is a TypeScript utility type for safety.
{ children: React.ReactNode }: Specifies that the children prop must be of type React.ReactNode. In React, React.ReactNode is a type that represents anything that can be rendered by React, such as:
JSX elements (e.g., <div>, <Component />)
Strings or numbers
Arrays of nodes
null or undefined
React fragments, etc.
\*/

3.  why use favicon.ico and not .png as .icon short for icon has legacy compatibility with browsers and os for browser icon tab support

4.how to make new routes
just make one folder under app and declare a page.tsx inside, it will have route

5.how can we have different layout in different routes
define layout.tsx in that route and just export default a function which is taking children prop and returning chilren prop with addition jsx you want to add

6.how can we show div without writing content in it
go padding to it, it will expand the content area

7.show gradient effect on text
have background in text, can be color ,gradient or image 
make text of color disappear and make backgroundclip : text meaing gradient will show through text

background: linear-gradient(to right, #60a5fa, #93c5fd, #c084fc);
color: transparent;
background-clip: text;

This tells the browser to apply the gradient background only to the text itself, not the entire element’s background.
The gradient is "clipped" to the shape of the text, making the text appear filled with the gradient colors.
