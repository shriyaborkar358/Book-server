import Book from "../models/Book.js"

const postBook = async(req, res)=>{
    const {
        name,
        image, 
        price, 
        category, 
        description
    } = req.body

    const newBook = new Book({
        name: name,
        image: image,
        price: price,
        category: category,
        description: description
    })

    const savedBooks = await newBook.save();

    res.json({
        success : true,
        data : savedBooks,
        message : "New book added sucessfully"
    })
}

const getBooks = async (req, res)=>{

    const allBooks = await Book.find().sort({createdId : -1})

    res.json({
        success : true,
        data : allBooks,
        message : "All books fetched successfuly"
    })
}

const getBookId = async (req, res)=>{

    const {id} = req.params

    const book = await Book.findById(id)

    res.json({
        success : book ? true: false,
        data : book || null,
        message: book ? "book fetched succesfully" : "book not found"
    })

}

const putBookId = async (req, res)=>{

    const {id} = req.params

    const {
        name,
        image,
        price, 
        category, 
        description
    } = req.body

  const updateResult = await Book.updateOne({_id:id},
    {
        $set:{
            name: name,
            image: image,
            price: price,
            category: category,
            description: description
        }
})

const updatedBook = await Book.findById(id)

res.json({
    success: true,
    message: "Book updated successfully",
    data: updatedBook
})

}

const deleteBookId = async (req, res)=>{

    const {id} = req.params

   await Book.deleteOne({_id: id})

    res.json({
        success: true,
        message: "Book deleted successfully",
        data: null
    })
}

export {
    postBook,
    getBooks,
    getBookId,
    putBookId,
    deleteBookId
}