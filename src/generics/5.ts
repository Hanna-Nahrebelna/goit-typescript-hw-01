export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record

type UserRoleDescription = Record<UserRole, string>;


const userRoleDescription: UserRoleDescription = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

console.log(userRoleDescription);

export { };
