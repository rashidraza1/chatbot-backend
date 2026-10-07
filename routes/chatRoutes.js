const express = require('express');
const { processChat, getConversations, getConversationMessages, deleteConversation, updateVisitorSession } = require('../controllers/chatController');

const router = express.Router();

router.post('/', processChat);
router.post('/visitor', updateVisitorSession);
router.get('/conversations', getConversations);
router.get('/conversations/:id', getConversationMessages);
router.delete('/conversations/:id', deleteConversation);

module.exports = router;
