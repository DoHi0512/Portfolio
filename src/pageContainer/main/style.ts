import tw from "tailwind-styled-components";

export const MainLayout = tw.div`
relative
w-full
h-full
flex
flex-col
justify-center
items-center
`;

export const MainText = tw.pre`
text-5xl
font-sans
flex-row
text-center
leading-snug
font-thin
`;

export const NavBar = tw.div`
absolute
text-5xl
flex
flex-col
justify-around
left-[5%]
h-[70%]
`;

export const NavLink = tw.div`
opacity-0
animate-fadeInLeft
hover:cursor-pointer
`;

export const More = tw.div`
border-2
border-solid
mt-20
animate-fadeIn
opacity-0
flex
justify-center
items-center
`