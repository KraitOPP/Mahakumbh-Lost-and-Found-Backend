const router = require('express').Router();
const {isAuthenticated, isAdmin} = require('../Middlewares/auth');
const {
    handleAddItem, 
    handleUpdateItem, 
    handleUpdateItemStatus, 
    handleDeleteItem,
    handleGetItems,
    handleGetItemsByCategory,
    handleGetItemsOfACategory,
    handleGetItemofUser,
    handleGetItemById
} = require("../Controllers/item");


router.get('/id/:id', handleGetItemById);
router.get('/', handleGetItems);
router.get('/category/:id', handleGetItemsOfACategory);
router.get('/category', handleGetItemsByCategory);
router.get('/user',isAuthenticated, handleGetItemofUser);
router.post('/', isAuthenticated, handleAddItem);
router.put('/status/:id', isAuthenticated, isAdmin, handleUpdateItemStatus);
router.put('/:id', isAuthenticated, isAdmin, handleUpdateItem);
router.delete('/:id', isAuthenticated, isAdmin, handleDeleteItem);

module.exports = router;