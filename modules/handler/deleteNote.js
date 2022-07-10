const notes = require("../notes");

const deleteNote = (request, h) => {
  const { id } = request.params;
  const note = notes.find((item) => item.id === id);
  if (note !== undefined) {
    notes.splice(notes.indexOf(note), 1);
    const response = h.response({
      status: "success",
      message: "Note deleted successfully",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "failed",
    message: "cannot delete note",
  });
  response.code(404);
  return response;
};

module.exports = deleteNote;
