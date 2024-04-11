import express from "express";
import cors from "cors";
import  mongoose  from "mongoose";
import UserModel from "./models/User.js";
import MovieModel from "./models/MoviesData.js";
import Contact from "./models/Contact.js";
import Dashboard from "./models/Dashboard.js";
import dotenv from "dotenv";
dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());
const app = express();
app.use(cors(
  {
    credentials:true,
    origin:[process.env.ORIGIN1,process.env.ORIGIN2]
  }
));
app.use(express.json());

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to database");
    
  } catch (error) {
    console.log("error is here", error);
    
  }
};
connectDb();

const PORT = 5000;

app.get("/health", (req, res) => {
  res.json({ status: "All Good!" });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No user Existed");
    }
  });
});

app.post(`/moviedata`, async (req, res) => {
  const { img, title, content, gener } = req.body;

  if (!title || !content || !img || !gener) {
    return res.json({
      Success: false,
      message: "fields are required",
      data: null,
    });
  }

  const newMovie = await MovieModel.create({
    img: img,
    title: title,
    content: content,
    gener: gener,
  });

  res.json({
    Success: true,
    message: "movie added successfully",
    data: newMovie,
  });
});

app.get("/moviedata",async (req,res)=>{
    const movie =await MovieModel.find();
    res.json({
        success: true,
    message: "data fetched successfully",
    data: movie,
    })
})

// Contact form api

app.post("/contacts", async(req, res) => {
  const {firstName, lastName, email, address, message } = req.body;

  if(!firstName){
    return res.json({
      success: false,
      message:"First name is required",
      data: null
    })
  }

  if(!lastName){
    return res.json({
      success: false,
      message:"Last name is required",
      data: null
    })
  }

  if(!email){
    return res.json({
      success: false,
      message:"Email is required",
      data: null
    })
  }

  if(!message){
    return res.json({
      success: false,
      message:"Message is required",
      data: null
    })
  }

  const newContact = await Contact.create({
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "address": address,
      "message": message
  })

  res.json({
      success: true,
      message: "Contact added successfully",
      data: newContact
  })
})

app.get("/contacts", async (req, res)=>{

  const contacts = await Contact.find();

  res.json({
      success: true,
      message: "Data fetch successfully",
      data: contacts
  })
})

app.delete("/contacts/:id", async(req, res)=>{
  const {id} = req.params;

  await Contact.deleteOne({_id: id})

  res.json({
      success: true,
      message: "Data deleted successfully",
      data: null
  })
})

// Dashboard API

app.get("/totalhours",async (req,res)=>{
  const{id} = req.params;

  await Dashboard.onclick({_id: id})

  res.json({
    success: true,
    message: "added successfully",
  })
  })

  app.get("/totalmovies",async (req,res)=>{
    const{id} = req.params;

  await Dashboard.onclick({_id: id})

    res.json({
      success: true,
      message: "added successfully",
    })
    })

    
    app.get("/totaladded",async (req,res)=>{
      const{id} = req.params;

  await Dashboard.onclick({_id: id})

      res.json({
        success: true,
        message: "added successfully",
      })
      })

      





 
//database connection
// const connectDb = async () => {
//   await mongoose.connect(
//     process.env.DB_URI
//   ).then(data=>console.log("connected")).catch(err=>console.log(err));
// };
// connectDb();

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}.`);
});


