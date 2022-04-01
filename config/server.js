module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3005),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', ''),
    },
  },
});
