import { checkPostCount } from '../middlewares/checkPostCount.middleware';
import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import DataService from '../modules/services/data.service';
import {logger} from "../middlewares/logger.middleware";
import Joi from 'joi';



    let testArr = [4,5,6,3,5,3,7,5,13,5,6,4,3,6,3,6];

    class PostController implements Controller {
    public path = '/api/post';
    public router = Router();
    public dataService = new DataService();

    constructor() {
        this.initializeRoutes();
    }

       

    private initializeRoutes() {
        this.router.post(`${this.path}`,logger, this.addPost);
        this.router.get(`${this.path}/:id`,logger, this.getElementById );
        this.router.delete(`${this.path}s`,logger, this.removePosts);

        this.router.get(`${this.path}s`,logger, this.getAllPosts);
        this.router.delete(`${this.path}:id`,logger, this.deletePostById);
        this.router.post(`${this.path}/:num`, logger, this.getNumPosts);

    }

    private addPost = async (request: Request, response: Response, next: NextFunction) => {
        const {title, text, image} = request.body;

        const schema = Joi.object({
            title: Joi.string().required(),
            text: Joi.string().required(),
            image: Joi.string().uri().required()
        });
        try {
            const validatedDate = await schema.validateAsync({title, text, image});
            await this.dataService.createPost(validatedDate);
            response.status(200).json(validatedDate);
        } catch (error: any) {
                console.error(`Validation Error: ${error.message}`);
                response.status(400).json({error: 'Invalid input data.'});
        }
    }

    private getElementById  = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        const post = await this.dataService.query({ _id: id });
        response.status(200).json(post);
    }

    private removePosts  = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        await this.dataService.deleteData();
        response.status(200);
    };

    private getAllPosts = async (request: Request, response: Response, next: NextFunction) => {
        const posts = await this.dataService.getAllPosts();
        response.status(200).json(posts);
    };

    private getNumPosts = async (request: Request, response: Response, next: NextFunction) => {
        const { num } = request.params;
        const numData = await this.dataService.getNumPosts(num);
        response.status(200).json(numData);
    };    

    
    
   

    private deletePostById = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        await this.dataService.deletePostById({_id: id});
        response.status(200);
    };

    
}


    export default PostController;