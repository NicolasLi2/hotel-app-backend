import auth from './auth.js';
import users from './users.js';
import bookings from './bookings.js';
import cabins from './cabins.js';
import guests from './guests.js';
import settings from './settings.js';

const mountRoutes = (app: any) => {
  app.use('/auth', auth);
  app.use('/api/users', users);
  app.use('/api/bookings', bookings);
  app.use('/api/cabins', cabins);
  app.use('/api/settings', settings);
  app.use('/api/guests', guests);
};

export default mountRoutes;
