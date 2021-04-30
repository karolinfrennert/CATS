const BASE_URL_PHOTO = `https://thatcopy.pw/catapi/rest/`

export const getCat = async () => {
  try {
    const response = await fetch(BASE_URL_PHOTO)
    const data = await response.json()
    return data
  } catch (error) {
    alert("Wrong")
  }
  return null
}
