const BASE_URL = `https://cataas.com/cat/gif`

export const getCat = async () => {
  try {
    const response = await fetch(BASE_URL)
    console.log(response)
    return response.json
  } catch (error) {
    console.log("wrong")
  }
  return null
}
