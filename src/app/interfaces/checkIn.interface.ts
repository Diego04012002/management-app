export interface CheckIn {
  recordType: string;
  action: string;
  userId: number;
  adminUserId: number;
  location: string;
  createdAt: Date;
}
