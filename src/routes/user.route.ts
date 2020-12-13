import { getUsers, saveUser } from '../controllers/user.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getUsers);
router.post('/',saveUser);

export default router;