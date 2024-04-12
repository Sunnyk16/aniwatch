import {model, Schema} from 'mongoose';


const dashboardSchema = new Schema({
    name : String,
    genre : String,
    duration : String,
    ratings: String
})

const Dashboard = model("Dashboard", dashboardSchema);

export default Dashboard;