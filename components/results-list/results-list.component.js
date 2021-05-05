import Image from 'next/image'
import {ThumbUpIcon} from '@heroicons/react/outline'
import { Additional, Description, MovieInfo, ThumbnailContainer, Title } from './results-list.styles'
import {forwardRef} from 'react'

const Thumbnail = forwardRef(({result}, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"

    return (
        <ThumbnailContainer className="group" ref={ref}>
            <Image
                layout="responsive"
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}`
                    || `${BASE_URL}${result.poster_path}`
                }
                height={1080}
                width={1920}
            />
            <MovieInfo>
                <Description>{result.overview}</Description>
                <Title>{result.title || result.original_name}</Title>
                <Additional>
                    {result.media_type}{" "}
                    {result.release_date || result.first_air_date}{" "}
                    <ThumbUpIcon className="h-5 mx-2"/>{result.vote_count}
                </Additional>
            </MovieInfo>
        </ThumbnailContainer>
    )
})

export default Thumbnail
