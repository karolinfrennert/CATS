const BASE_URL = `https://cat-fact.herokuapp.com/facts`

export const getCatFacts = async () => {
  try {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    alert("wrong")
  }
  return null
}
