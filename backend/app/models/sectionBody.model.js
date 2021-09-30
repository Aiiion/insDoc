const { Schema } = require("mongoose");

module.exports = mongoose => {
    const SectionBody = mongoose.model(
      "SectionBody",
      mongoose.Schema(
        {
          section_id: {type: Schema.Types.ObjectId, ref: 'SectionTitle', required: true},
          body: {type: String, required: true},
          docFinished_id: {type: Schema.Types.ObjectId, ref: 'DocFinished', required: true}
        },
        { timestamps: true }
      )
    );
  
    return SectionBody;
  };