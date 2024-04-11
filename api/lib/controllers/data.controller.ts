    import Controller from '../interfaces/controller.interface';
    import { Request, Response, NextFunction, Router } from 'express';

    let testArr = [4,5,6,3,5,3,7,5,13,5,6,4,3,6,3,6];

    class PostController implements Controller {
    public path = '/api/post';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/latest`, this.getAll);
        this.router.post(`${this.path}s/:id`, this.addData);

        this.router.get(`${this.path}/:id`, this.getById);  
        this.router.post(`${this.path}`, this.addElement);
        this.router.delete(`${this.path}/:id`, this.deleteById);
        this.router.post(`${this.path}/:num`, this.getNItems);
        this.router.get(`${this.path}s`, this.getAll);
        this.router.delete(`${this.path}s`, this.deleteAll);

    }

        private getAll = async (request: Request, response: Response) => {
            response.status(200).json(testArr);
        };

        private addData = async(req: Request, res: Response, next: NextFunction) => {
            const {elem} = req.body;
    
            testArr.push(parseInt(elem));

            res.status(200).json(testArr);
        }

        private getById = async (request: Request, response: Response) => {
            const id = Number(request.params.id);
            const item = testArr[id];
            if (item !== undefined) {
                response.status(200).json(item);
            } else {
                response.status(404).json({ message: 'Item not found' });
            }
        }

        private deleteById = async (request: Request, response: Response) => {
            const id = request.params.id;
            const index = parseInt(id);

            if (!isNaN(index) && index >= 0 && index < testArr.length) {
                testArr.splice(index, 1);
                response.status(200).json(testArr);
            } else {
                response.status(404).json({ message: 'Item not found' });
            }
        }

        private getNItems = async (request: Request, response: Response) => {
            const num = parseInt(request.params.num);

            if (isNaN(num) || num <= 0) {
                response.status(400).json({ message: 'Invalid number specified' });
            } else {
                const selectedItems = testArr.slice(0, num);
                response.status(200).json(selectedItems);
            }
        }

        private addElement = async (request: Request, response: Response) => {
            const { elem } = request.body;

            testArr.push(elem);

            response.status(200).json(testArr);
        }

        private deleteAll = async (request: Request, response: Response) => {
            testArr = [];
            response.status(200).json(testArr);
        }


    }

    export default PostController;