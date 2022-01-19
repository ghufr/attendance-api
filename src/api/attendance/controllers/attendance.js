"use strict";

/**
 *  attendance controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::attendance.attendance",
  ({ strapi }) => ({
    async findMine(ctx) {
      try {
        const user = ctx.state.user;
        const filters = {};
        const entities = await strapi
          .service("api::attendance.attendance")
          .findMany({
            filters,
            fields: ["location", "status"],
            populate: { location: true },
          });

        ctx.body = { hello: "World" };
        return ctx.body;
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);
