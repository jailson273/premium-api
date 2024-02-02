import { Request, Response } from "express";

export interface ControllerBaseInterface<T> {
    create(request: Request, response: Response): Promise<T | any>;
    getAll(request: Request, response: Response): Promise<T[] | any>;
    getById(request: Request, response: Response): Promise<T | any>;
    update(request: Request, response: Response): Promise<T | any>;
    delete(request: Request, response: Response): Promise<boolean | any>;
}
