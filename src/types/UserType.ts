export type UserType = {
  _id?: string;
  title: string;
  name: string;
  email: string;
  photoURL?: string;
  password: string;
  current_setuation: string;
  alerts: string;
  saved_properties?: [string];
};
