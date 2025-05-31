import userModel from '../Models/UserRegister.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "yash_secret_key"; 

export const UserLogin = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await user.save();
    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" } 
    );

        res.cookie("token", "hello");
        res.send("hello")

    console.log('User Registered:', user);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
