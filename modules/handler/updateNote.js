const notes = require("../notes");

const updateNote = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;

  const note = notes.find((item) => item.id === id);
  if (note !== undefined) {
    note.title = title;
    note.tags = tags;
    note.body = body;
    note.updatedAt = new Date().toISOString();
    const response = h.response({
      status: "success",
      message: "Note updated successfully",
      data: {
        note,
      },
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "failed",
    message: "Cannot update note",
  });
  response.code(400);
  return response;
};

module.exports = updateNote;
