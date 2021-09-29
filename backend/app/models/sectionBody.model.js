module.exports = mongoose => {
    const SectionBody = mongoose.model(
      "SectionBody",
      mongoose.Schema(
        {
          section_id: {type: String, required: true},
          body: {type: String, required: true},
          docFinished_id: {type: String, required: true}
        },
        { timestamps: true }
      )
    );
  
    return SectionBody;
  };