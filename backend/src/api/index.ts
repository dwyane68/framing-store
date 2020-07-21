import { Router } from 'express';
import general from './routes/general';

export default () => {
	const app = Router();
	general(app);

	return app
}