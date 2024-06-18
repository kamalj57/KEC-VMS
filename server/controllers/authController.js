const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const authpass = await bcrypt.compare(password, user.password);
      if (authpass) {
        return res.status(200).json({ msg: "success" });
      } else {
        return res.status(401).json({ msg: "Invalid Password" });
      }
    } else {
      return res.status(404).json({ msg: "Invalid email" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Server Error!" });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ msg: "Email Already Registered" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return res.status(200).json({ msg: "User Created!" });
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ msg: "Server Error!" });
  }
};


module.exports = { loginUser, signupUser };
