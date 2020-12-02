export type User = {
  id: string;
  name: string;
  email: string;
  authorized: boolean;
  loading: boolean;
  type: string;
};

export enum UserType {
  LEARNER = 'learner',
  TUTOR = 'tutor',
}
