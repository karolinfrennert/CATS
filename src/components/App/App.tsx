import { useLayoutEffect, useState } from "react"
import { CatFacts } from "types/catFactsType"
import { getCatFacts } from "GetCatFact"
import { CatImage } from "../../types/catImageTypes"
import { getCat } from "../../GetCatPicture"
import { StyledCatDiv } from "../StyledCatDiv"
import { StyledButton } from "./StyledButton"
import { StyledAppWrapper } from "./StyledAppWrapper"

export const App = () => {
  const [image, setImage] = useState<CatImage | null>(null)
  const [facts, setFacts] = useState<CatFacts[] | null>(null)
  const [counter, setCounter] = useState(0)

  useLayoutEffect(() => {
    const fetchCatImg = async () => {
      const fetchedCatImage = await getCat()
      setImage(fetchedCatImage)
    }
    fetchCatImg()
  }, [])

  useLayoutEffect(() => {
    const fetchCatFact = async () => {
      const fetchedCatFact = await getCatFacts()
      setFacts(fetchedCatFact)
    }
    fetchCatFact()
  }, [])

  const refreshPage = () => {
    if (counter < 4) {
      setCounter((prev) => prev + 1)
    } else {
      setCounter(0)
    }
  }
  return (
    <StyledAppWrapper>
      <h1>Cool cat facts: </h1>
      {facts ? (
        <div>
          <h2>{facts[counter].text}</h2>
        </div>
      ) : null}
      <StyledCatDiv>
        {image ? <img src={image.webpurl} alt="Meningful cat" /> : null}
        <img alt="meningful text" src="https://cataas.com/cat/gif" />
      </StyledCatDiv>
      <StyledButton type="button" onClick={refreshPage}>
        Get new fact!
      </StyledButton>
    </StyledAppWrapper>
  )
}
