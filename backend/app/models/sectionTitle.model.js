module.exports = mongoose => {
    const SectionTitle = mongoose.model(
      "SectionTitle",
      mongoose.Schema(
        {
          template_id: {type: String, required: true},
          body: {type: String, required: true},
          position: {type: Number, required: true}
        },
        { timestamps: true }
      )
    );
  
    return SectionTitle;
  };