/* ============================================================
   auth.js  –  FreshMart authentication helper
   All files MUST use these keys:
     'fm_users'        → array of registered users
     'fm_session'      → currently logged-in user object
   ============================================================ */

const Auth = (() => {

  const USERS_KEY   = 'fm_users';
  const SESSION_KEY = 'fm_session';

  /* ── Seed default admin account on first load ── */
  function seedAdmin() {
    const users = getUsers();
    if (!users.find(u => u.role === 'admin')) {
      users.push({
        id:        'admin-001',
        name:      'Admin',
        email:     'admin@freshmart.com',
        password:  'admin123',
        phone:     '',
        role:      'admin',
        createdAt: new Date().toISOString()
      });
      saveUsers(users);
    }
  }

  /* ── Users ── */
  function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  }
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  /* ── Session ── */
  function getSession() {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  }
  function setSession(user) {
    /* store only safe fields – never the password */
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      id:    user.id,
      name:  user.name,
      email: user.email,
      phone: user.phone || '',
      role:  user.role
    }));
  }
  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  /* ── Login  → returns { ok, error } ── */
  function login(email, password) {
    const users = getUsers();
    const user  = users.find(u =>
      u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!user) return { ok: false, error: 'Incorrect email or password.' };
    setSession(user);
    return { ok: true, user };
  }

  /* ── Register  → returns { ok, error } ── */
  function register({ name, email, phone, password, role = 'customer' }) {
    const users = getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: 'An account with this email already exists.' };
    }
    const newUser = {
      id:        'u-' + Date.now(),
      name, email, phone, password, role,
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    saveUsers(users);
    setSession(newUser);
    return { ok: true, user: newUser };
  }

  /* ── Logout ── */
  function logout() {
    clearSession();
    window.location.href = 'login.html';
  }

  /* ── Guard: call on any protected page ── */
  function requireLogin() {
    if (!getSession()) {
      window.location.href = 'login.html';
    }
  }

  /* ── Guard: redirect logged-in users away from auth pages ── */
  function requireGuest() {
    const user = getSession();
    if (user) {
      window.location.href = user.role === 'admin' ? 'admin.html' : 'index.html';
    }
  }

  /* init */
  seedAdmin();

  return { getSession, login, register, logout, requireLogin, requireGuest };
})();