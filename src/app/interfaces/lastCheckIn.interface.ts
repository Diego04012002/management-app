export interface LastCheckinUser {
  id: number;
  username: string;
  email: string;
  fullName: string;
  department: string;
  checkAction: string;
  checkSource: string;
  occuredAt: Date;
  role:string
  active:boolean
}
