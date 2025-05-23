const express = require('express')
const { createBook,getAllbooks,updateBook,getsinglebook,deletebook } = require('../controllres/bookControllers')
const router =express.Router()
router.get('/',getAllbooks)
router.get('/:bookId',getsinglebook)
router.post('/',createBook)
router.put('/:bookId',updateBook)
router.delete('/:bookId',deletebook)
module.exports = router