const notes = require("../notes");

const getNoteDetail = (request, h) => {
  const { id } = request.params;
  const note = notes.find((item) => item.id === id);
  if (note !== undefined) {
    const response = h.response({
      status: "success",
      message: "Note found",
      data: {
        note,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "failed",
    message: "Note not found",
  });
  response.code(404);
  return response;
};

module.exports = getNoteDetail;
