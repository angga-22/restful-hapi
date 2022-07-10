const { nanoid } = require("nanoid");
const notes = require("../notes");

const addNote = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const note = {
    id,
    title,
    tags,
    body,
    createdAt,
    updatedAt,
  };
  notes.push(note);
  console.log(note);
  const isSuccess = notes.filter((item) => item.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Note added successfully",
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "failed",
    message: "Note not added",
  });
  response.code(500);
  return response;
};

module.exports = addNote;
