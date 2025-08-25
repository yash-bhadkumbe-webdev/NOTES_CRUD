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

export const getNote = async (req,res)=>{
    try {
        const notes = await Note.find();
        res.json()
    }catch (e) {
        res.status(500).json({message:"error fetching note",error:e.message})
    }
};

//read single note

export const getNote = async (req,res)=>{
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.json(note)
    }catch (e) {
        res.status(500).json({ message: "Error fetching note", error: e.message });
    }
}

//update Note

export const updateNote = async (req,res)=>{
    try {
        const {title,content}= req.body;
        const updateNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true, runValidators: true }
        )
        if (!updatedNote) return res.status(404).json({ message: "Note not found" });
        res.json({ message: "Note updated!", note: updatedNote });
    }catch (e) {
        res.status(500).json({ message: "Error updating note", error: err.message });
    }
}
export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "Note not found" });
        res.json({ message: "Note deleted!", note: deletedNote });
    } catch (err) {
        res.status(500).json({ message: "Error deleting note", error: err.message });
    }
};