module.exports = mongoose => {
    const User = mongoose.model(
      "User",
      mongoose.Schema(
        {
          username: {type: String, required: true, unique: true},
          password: {type: String, required: true}, 
          admin: Boolean
        },
        { timestamps: true }
      )
    );
  
    return User;
  };