module.exports = {
  routes: [
    {
      method: "GET",
      path: "/attendances/find/mine",
      handler: "attendance.findMine",
    },
  ],
};
