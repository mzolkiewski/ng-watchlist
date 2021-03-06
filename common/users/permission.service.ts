import { UserRole } from './role.enum';
import { IUser } from './user.interface';

const isExpired = (user: IUser) => {
  return !user || new Date(user.exp * 1000) < new Date();
};

const isValid = (user: IUser) => {
  return user && !isExpired(user);
};

const getRoles = (user: IUser) => {
  return user.roles;
};

const hasRole = (user: IUser, role: UserRole) => {
  return isValid(user) && (getRoles(user) as any).includes(UserRole[role]);
};

const hasAdminRole = (user: IUser) => {
  return isValid(user) && hasRole(user, UserRole.Admin);
};

const hasUserRole = (user: IUser) => {
  return isValid(user) && hasRole(user, UserRole.User);
};

export const permissionService = {
  isValid,
  isExpired,
  hasRole,
  hasAdminRole,
  hasUserRole,
};
