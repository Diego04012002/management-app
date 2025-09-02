import { User } from "./user.interface"

export interface CheckLog {
  id: number
  subject:User
  perfomedBy:User
  action:string
  source:string
  occurredAt:Date
  notes:string
}
