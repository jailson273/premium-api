export interface RepositoryBaseInterface<T> {
    create(data: T): Promise<T>;
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
    update(id: number, data: T): Promise<T>;
    delete(id: number): Promise<boolean>;
}
