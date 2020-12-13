import { getAuthors, saveAuthor } from '../controllers/author.controller';
import { Router } from 'express';

const router = Router();

router.post('/', saveAuthor);
router.get('/', getAuthors);

export default router;