
// Register user via FastAPI backend
export async function registerUser(user) {
  const response = await fetch('http://localhost:8000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.detail || 'Registration failed');
  }
  return await response.json();
}

export async function loginUser(email) {
  // For now, just fetch all users and match email (no password)
  const response = await fetch('http://localhost:8000/users');
  if (!response.ok) throw new Error('Unable to connect to server');
  const users = await response.json();
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
