module.exports = mongoose => {
    const DocTemplate = mongoose.model(
      "DocTemplate",
      mongoose.Schema(
        {
          user_id: {type: String, required: true},
          title: {type: String, required: true}
        },
        { timestamps: true }
      )
    );
  
    return DocTemplate;
  };