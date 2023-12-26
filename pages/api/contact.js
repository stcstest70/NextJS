import dbConnect from "../../utils/conn";
import Contact from "../../utils/modals/contact";

export default async function POST(req, res) {
    try {
        const body = await req.body;
        await dbConnect();

        await Contact.create(body);
        return res.status(200).json({
            message: "Message sent successfully!",
          });

    }catch (e) {
    return res.status(401).json({
      message: "Server error, please try again!",
    });
    }
}