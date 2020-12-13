
import { getBooks, saveBook } from '../controllers/book.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getBooks);
router.post('/',saveBook);

export default router;