export interface CatFacts {
  status: Status
  type: string
  deleted: boolean

  user: string
  text: string

  source: string
  updatedAt: string
  createdAt: string
  used: boolean
}

interface Status {
  verified: boolean
  sentCount: number
  feedback?: string
}
