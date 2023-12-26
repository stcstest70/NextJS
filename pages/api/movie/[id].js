import dbConnect from "../../../utils/conn";
import MovieModal from "../../../utils/modals/movie";

export default async function GET(req, res){
    const { id } = req.query;
    await dbConnect();
    console.log('Server-side logging: Received request for movie with id', id);
    const data = await MovieModal.findById(id);
    return res.status(200).json({data, message:"Data retrieved"});
}