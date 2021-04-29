export interface CatFacts {
  status: Status
  type: string
  deleted: boolean
  _id: string
  user: string
  text: string
  __v: number
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