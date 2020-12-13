
import { getComments, saveComment } from '../controllers/comment.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getComments);
router.post('/',saveComment);

export default router;