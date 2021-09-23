module.exports = mongoose => {
    const User = mongoose.model(
      "User",
      mongoose.Schema(
        {
          username: {type: String, required: true, unique: true},
          password: {type: String, required: true}, //does not allow same as other user, this is not good
          // username: String,
          // password: String,
          admin: Boolean
        },
        { timestamps: true }
      )
    );
  
    return User;
  };