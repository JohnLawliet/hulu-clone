import Thumbnail from "../results-list/results-list.component"
import { ResultsContainer } from "./results.styles"


const Results = ({results}) => {

    return (
        <ResultsContainer>
        {
            results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))
        }
        </ResultsContainer>
    )
}

export default Results
