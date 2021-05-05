import tw from 'twin.macro'


// Things to learn
// space-x : stretches beyond page limits. Else it would look crowded
// whitespace-nowrap: makes 2 words appear on one line
// tailwind-scrollbar-hide -> a plugin to hide scrollbar automatically
//      1. npm i tailwind-scrollbar-hide
//      2. in tailwind.config.js add plugins: [require('tailwind-scrollbar-hide')]
//      3. add scrollbar-hide here

// NOTE: twin.macro may not support jit mode yet so from-[#06202A] might not work here
// div here was reqd otherwise FadeGradient wouldn't have worked as it would stick to the page instead of moving with
// the NavbarList
export const NavbarContainer = tw.nav`
    relative
`

export const NavbarList = tw.div`
    flex px-10 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll relative
    sm:px-20 sm:space-x-20 scrollbar-hide
`


export const Genres = tw.h2`
    cursor-pointer transition duration-100 transform hover:scale-125
    hover:text-white active:text-red-500
    last:pr-24
`

export const FadeGradient = tw.div`
    absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l 
`