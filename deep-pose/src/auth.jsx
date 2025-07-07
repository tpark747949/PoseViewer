const USERS_KEY = 'fake_users_db';

export function registerUser(user) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const exists = users.find(u => u.email === user.email);
  if (exists) {
    throw new Error('User already exists');
  }
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function loginUser(email) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const user = users.find(u => u.email === email);
  if (!user) throw new Error('Invalid credentials');
  localStorage.setItem('current_user', JSON.stringify(user));
  return user;
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('current_user'));
}

export function logoutUser() {
  localStorage.removeItem('current_user');
}
