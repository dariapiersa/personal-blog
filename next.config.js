const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "daria123",
        mongodb_password: "1234",
        mongodb_clustername: "cluster0",
        mongodb_database: "personal-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "daria123",
      mongodb_password: "1234",
      mongodb_clustername: "cluster0",
      mongodb_database: "personal-blog",
    },
  };
};
