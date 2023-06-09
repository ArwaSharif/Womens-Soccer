const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teamSchema = require("./TeamSchema");

const newTeamSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    team: teamSchema,
  },
  {
    timestamps: true,
  }
);

newTeamSchema.Create().save()

module.exports = mongoose.model("NewTeam", newTeamSchema);
