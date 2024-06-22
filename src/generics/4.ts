type Users = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(data: Partial<Users>): Users {
  const defaultUser = {
  name: '',
  surname: '',
  email: 'user@mail.com', 
  password: 'password123' 
  };

   return { ...defaultUser, ...data };

};

const newUser = createOrUpdateUser({
  email: 'user@mail.com', 
  password: 'password123'
});

console.log(newUser);
