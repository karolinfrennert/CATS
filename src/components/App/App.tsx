import { useLayoutEffect, useState } from "react"
import { CatFacts } from "types/catFactsType"
import { getCatFacts } from "GetCatFact"
import { CatImage } from "../../types/catImageTypes"
import { getCat } from "../../GetCatPicture"

export const App = () => {
  const [image, setImage] = useState<CatImage | null>(null)
  const [fact, setFact] = useState<CatFacts | null>(null)

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
      fetchedCatFact.map((f: CatFacts) => {
        return setFact(f)
      })
    }
    fetchCatFact()
  }, [])

  return (
    <div>
      {fact ? <h1>{fact.text}</h1> : null}
      {image ? <img src={image.webpurl} alt="Meningful cat" /> : null}
      <img alt="meningful text" src="https://cataas.com/cat/gif" />
    </div>
  )
}
