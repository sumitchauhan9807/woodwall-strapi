module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        // put the name of your added fields here
        allowedFields: ["firstname", "lastname"],
      },
    },
  }
});