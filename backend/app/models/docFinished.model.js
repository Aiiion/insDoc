module.exports = mongoose => {
    const DocFinished = mongoose.model(
      "DocFinished",
      mongoose.Schema(
        {
          template_id: {type: String, required: true},
          user_id: {type: String, required: true}
        },
        { timestamps: true }
      )
    );
  
    return DocFinished;
  };