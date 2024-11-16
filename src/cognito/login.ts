import { atomWithStorage } from 'jotai/utils';

// Define possible roles
export type UserRole = 'admin' | 'teacher' | 'parent';

// Create persistent atom for user role
export const userRoleAtom = atomWithStorage<UserRole | null>('user_role', null);

// Simple actions for role management
export const setRole = (role: UserRole | null) => {
  localStorage.setItem('user_role', JSON.stringify(role));
};

export const getRole = (): UserRole | null => {
  const role = localStorage.getItem('user_role');
  return role ? JSON.parse(role) : null;
};

export const clearRole = () => {
  localStorage.removeItem('user_role');
};