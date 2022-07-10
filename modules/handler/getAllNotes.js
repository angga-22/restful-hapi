const notes = require("../notes");

const getAllNotes = () => ({
  status: "success",
  data: {
    notes,
  },
});

module.exports = getAllNotes;
