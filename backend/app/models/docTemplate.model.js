const { Schema } = require("mongoose");

module.exports = mongoose => {
    const DocTemplate = mongoose.model(
      "DocTemplate",
      mongoose.Schema(
        {
          user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
          title: {type: String, required: true}
        },
        { timestamps: true }
      )
    );
  
    return DocTemplate;
  };