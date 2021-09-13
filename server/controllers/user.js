import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const signin = async (req, res) => {
    const {email, password} = req.body;
    console.log('email: ',req.body)
    console.log('email: ',email)
    console.log('password: ',password)

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({message: "User doesn't exisit."})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({email: existingUser.email, password: existingUser.password}, 'test', { expiresIn: "1h"})

        res.status(200).json({result: existingUser,token});

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
  
    try {
      const existingUser = await UserModal.findOne({ email });
  
      if (existingUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
  
      const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
  
      res.status(201).json({ result, token });
      
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };