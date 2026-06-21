export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT ? +process.env.PORT : 3001,
  defaultLimit: process.env.DEFAULT_LIMIT ? +process.env.DEFAULT_LIMIT : 2,
  mongoDb: process.env.MONGODB,
});
