
const users = [
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    },
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    },
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    }
  ];

export function getAllUsers() {

    return users;
}

export async function createUser(data) {
    users.push(data);
}