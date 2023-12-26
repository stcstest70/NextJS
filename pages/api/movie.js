import dbConnect from "../../utils/conn";
import MovieModal from "../../utils/modals/movie";

export default async function GET(req, res){
    try{
        await dbConnect();
        const data = await MovieModal.find();
        return res.status(200).json({
            data,
            message:"data retrieved successfully"
        })
    }
    catch(e){
        return res.status(401).json({
            message: "Server error, please try again!",
          });
    }
}