const BASE_URL = `https://cat-fact.herokuapp.com/facts`

export const getCatFacts = async () => {
  try {
    const response = await fetch(BASE_URL)
    const data = await response.json()

    return data
  } catch (error) {
    return false
  }
  return null
}
