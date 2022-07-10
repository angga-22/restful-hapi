const addNote = require("./handler/addNote");
const getAllNotes = require("./handler/getAllNotes");
const getNoteDetail = require("./handler/getNoteDetail");
const updateNote = require("./handler/updateNote");
const deleteNote = require("./handler/deleteNote");

const route = [
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotes,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteDetail,
  },
  {
    method: "POST",
    path: "/notes",
    handler: addNote,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: updateNote,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNote,
  },
];

module.exports = route;
