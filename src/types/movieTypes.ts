export interface Movie {
  adult: boolean
  backdropPath: string
  belongsToCollection: Belongstocollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdbId: string
  originalLanguage: string
  originalTitle: string
  overview: string
  popularity: number
  posterPath: string
  productionCompanies: Productioncompany[]
  productionCountries: Productioncountry[]
  releaseDate: string
  revenue: number
  runtime: number
  spokenLanguages: Spokenlanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  voteAverage: number
  voteCount: number
}

interface Spokenlanguage {
  englishName: string
  iso6391: string
  name: string
}

interface Productioncountry {
  iso31661: string
  name: string
}

interface Productioncompany {
  id: number
  logoPath?: string
  name: string
  originCountry: string
}

interface Genre {
  id: number
  name: string
}

interface Belongstocollection {
  id: number
  name: string
  posterPath: string
  backdropPath: string
}