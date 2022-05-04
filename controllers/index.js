const Book  = require("../models/item")

// our CRUD functions

// Create
const createItem = async (req, res) => {
    try {
        const book = await new Book(req.body)
        await book.save()
        return res.status(201).json({
            book,
        })

    }catch(error) {
        return res.status(500).json({error: error.message})
    }
}

// Read
const getAllItems = async (req, res) => {
    try{
        const books = await Book.find()
        return res.status(200).json({books})
    }catch(error){
        return res.status(500).send(error.message)
    }
}

// getonebyID
const getItemById = async (req,res) => {
    try{
        const {id} = req.params
        const book = await Book.findById(id)
        if(book){
            return res.status(200).json({book})
        }
        return res.status(404).send("Book with the specified ID does not exist")

    }catch(error){
        return res.status(500).send(error.message)
    }
}

// updating any item we desire
const updateItem = (req, res) => {
    try{
        const {id} = req.params
        Book.findByIdAndUpdate(
            id, req.body, {new: true}, (err, book) => {
                if(err){
                    res.status(500).send(err)
                }
                if(!boom){
                    res.status(500).send("Book not found")
                }
                return res.status(200).json(book)
            }
        )
    }catch(error){
        return res.status(500).send(error.message)
    }
}
// deletedItem 
const deleteItem = async(req, res) => {
    try{
        const {id} = req.params
        const deleted = await Book.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send("Item deleted")
        }
        throw new Error("item not found")

    }catch(error){
        return res.status(500).send(error.message)
    }
}


module.exports = {
    createItem,
    getAllItems,
    getItemById, 
    updateItem,
    deleteItem
}