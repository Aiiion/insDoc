const { Schema } = require("mongoose");

module.exports = mongoose => {
    const DocFinished = mongoose.model(
      "DocFinished",
      mongoose.Schema(
        {
          template_id: {type: Schema.Types.ObjectId, ref: 'DocTemplate', required: true},
          user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true}
        },
        { timestamps: true }
      )
    );
  
    return DocFinished;
  };