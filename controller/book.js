const books = [
    {
        "id": 41,
        "name": "Daring To Dream",
        "image": "https://kitabay.com/cdn/shop/files/386212570058653c80d5c7a99db607c3.jpg?v=1719388230&width=319",
        "price": 350,
        "category": "Motivational",
        "description": "Margo, Kate and Laura were brought up like sisters amidst the peerless grandeur of Templeton House."
    },
    {
        "id": 43,
        "name": "Ikigai",
        "image": "https://www.crossword.in/cdn/shop/products/9781786330895_360x@2x.jpg?v=1680196201",
        "price": 450,
        "category": "Motivational",
        "description": "Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. "
    },
    {
        "id": 45,
        "name": "Anthem",
        "image": "https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-5832.jpg?itok=CLNxr8u-",
        "price": 450,
        "category": "Science Fiction",
        "description": "A dystopian fiction novella by Ayn Rand, first published in 1938. It takes place at some unspecified future date when mankind has entered another dark age as a result of the evils of irrationality"
    }
]

const postBook = (req, res)=>{
    const {name, image, price, category, description} = req.body

    if(!name){
       return res.json({
        success: false,
        data: null,
        message: "Nmae cannot be empty"
       })
    }

    if(!image){
        return res.json({
            success: false,
            data: null,
            message: "Image cannot be empty"
        })
    }

    if(!price){
        return res.json({
            success: false,
            data: null,
            message: "Price cannot be empty"
        })
    }

    if(!category){
        return res.json({
            success: false,
            data: null,
            message: "category cannot be empty"
        })
    }

    if(!description){
        return res.json({
            success: false,
            data: null,
            message:"Description canot be empty"
        })
    }


    const randomId = Math.round(Math.random() * 50)

    const newBook= {
        id : randomId,
        name : name,
        image : image,
        price : price,
        category : category,
        description : description
    }

    books.push(newBook)

    res.json({
        success : true,
        data : newBook,
        message : "New book added sucessfully"
    })
}

const getBooks = (req, res)=>{
    res.json({
        success : true,
        data : books,
        message : "All books fetched successfuly"
    })
}

const getBookId = (req, res)=>{

    const {id} = req.params

    const book = books.find((b)=>b.id== id)

    res.json({
        success : book ? true: false,
        data : book || null,
        message: book ? "book fetched succesfully" : "book not found"
    })

}

const putBookId = (req, res)=>{

    const {id} = req.params

    const {name, image, price, category, description} = req.body

    let index= -1;

    books.forEach((book, i)=>{
        if(book.id==id)
            index = i
    });

    const newObj = {
        id,
        name,
        image, 
        price,
        category,
        description
    }

    if(index==-1){
        return res.json({
            success: false,
            data : null,
            message : `plant not found for id ${id}`
        })
    }  
    
    else{
        books[index] = newObj

        return res.json({
            success: true,
            data : newObj,
            message : `Book updated successfully`
        })

    }
}

const deleteBookId = (req, res)=>{
    const {id} = req.params

    let index = -1

    books.forEach((book, i)=>{
        if(book.id==id){
            index = i
        }
    })

    if(index==-1){
    
        return res.json({
            success: false,
            message: `book not found with id ${id}`,
        })
    }
    
    books.splice(index, 1)

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