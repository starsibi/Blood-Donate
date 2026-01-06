
export enum BloodType {
  APositive = 'A+',
  ANegative = 'A-',
  BPositive = 'B+',
  BNegative = 'B-',
  OPositive = 'O+',
  ONegative = 'O-',
  ABPositive = 'AB+',
  ABNegative = 'AB-',
}

export interface Donor {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodType: BloodType;
  donorSince: string;
  avatarUrl: string;
}

export interface Donation {
  id: string;
  date: string;
  location: string;
  type: 'Whole Blood' | 'Platelets' | 'Plasma' | 'Power Red';
  status: 'Completed' | 'Deferred' | 'Pending';
  unitId: string;
}

export interface Center {
  id: string;
  name: string;
  city: string;
  state: string;
  status: 'Open Now' | 'Closed';
  distance?: string;
}
