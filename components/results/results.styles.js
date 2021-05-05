import tw from 'twin.macro'
import FlipMove from 'react-flip-move'

// at smallest its inline, on bigger screens it becomes grid
// 
export const ResultsContainer = tw(FlipMove)`
    px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap
`