import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

//will call controller function
router.post('/create-student', UserControllers.createStudent);

//router nijei ekta object
export const UserRoutes = router;
