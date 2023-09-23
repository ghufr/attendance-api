module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "af6ae4103bab83312954edebe662b859"),
  },
  apiToken: {
    salt: "Fa35UVqdZgdt7h1SDc8K2A==",
  },
});
