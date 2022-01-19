const utils = require("@strapi/utils");
const { sanitize } = utils;

const sanitizeOutput = (user, ctx) => {
  const schema = strapi.getModel("plugin::users-permissions.user");
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(user, schema, { auth });
};

module.exports = (plugin) => {
  // plugin.controllers.user.

  // plugin.routes.push({
  //   method: "GET",
  //   path: "/users/profile",
  //   handler: "user.me",
  //   config: {
  //     prefix: "",
  //   },
  // });

  // plugin.services.user.fetchAuthenticatedUser = (id) => {
  //   return strapi
  //     .query("plugin::users-permissions.user")
  //     .findOne({ where: { id }, populate: ["role", "avatar", "attendances"] });
  // };

  plugin.controllers.user.me = async (ctx) => {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized();
    }

    const fUser = await strapi.query("plugin::users-permissions.user").findOne({
      where: { id: user.id },
      populate: ["role", "avatar", "attendances"],
    });

    ctx.body = await sanitizeOutput(fUser, ctx);
  };

  return plugin;
};
