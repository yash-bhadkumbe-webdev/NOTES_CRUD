import Note from "../model/Model.js";


export const createNote =async (req,res)=>{
    try {
        const {title,content}=req.body
        if (!title || !content){
            return res.status(400).json({message:"title and content required"})
        }
        const newNote = new Note({title,content})
        await newNote.save()
    }catch (e) {
        res.status(500).json({ message: "Error creating note", error: err.message });
    }
}