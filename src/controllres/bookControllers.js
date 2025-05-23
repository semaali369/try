const bodyParser = require('body-parser')
const bookModel = require('../models/bookModel')
const createBook = async (req,res)=>{
    const {title,author} = req.body
    const newBook = await bookModel.create({title,author})
    res.json(newBook)
//createbook = async rew,es, title,from req.body and create function to creae the book in database modelname.create(title from json)

}
const getAllbooks = async (req,res)=>{
    const allbooks = await bookModel.find()
    res.json(allbooks)
}
const updateBook = async (req,res)=>{
    const {bookId }= req.params
    const {title,author} = req.body
    const updateBook = await bookModel.findByIdAndUpdate(bookId,{title,author},{now:true})
    res.json({updateBook})

}
const getsinglebook = async (req,res)=>{
    const {bookId} = req.params//without{}we should specific the params name
    const singlebook = await bookModel.findById(bookId)
    res.json(singlebook)

}
const deletebook = async (req,res)=>{
    const {bookId }= req.params
    const deletebook = await bookModel.findByIdAndDelete(bookId)
    res.json(deletebook)


}
module.exports = {
    createBook,
    getAllbooks,
    updateBook,
    getsinglebook,
    deletebook
}
