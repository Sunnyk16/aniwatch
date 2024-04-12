import {model, Schema} from 'mongoose';


const dashboardSchema = new Schema({
    totalhours : String,
    totalmovies: String,
    totaladded: String,
    ratings: String
})

const Dashboard = model("Dashboard", dashboardSchema);

export default Dashboard;