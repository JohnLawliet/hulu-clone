import tw from 'twin.macro'

export const ThumbnailContainer = tw.div`
    p-2 cursor-pointer transition duration-200 ease-in 
    transform sm:hover:scale-105 hover:z-50
`

export const MovieInfo = tw.div`
    p-2
`

export const Description = tw.p`
    truncate max-w-md
`

export const Title = tw.h2`
    mt-1 text-2xl text-white transition-all duration-100 ease-in-out
    group-hover:font-bold
`

export const Additional = tw.p`
    flex items-center opacity-0 group-hover:opacity-100
    svg:h-5 svg:mx-2
`