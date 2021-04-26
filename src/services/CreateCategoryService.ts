import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists!`);
    }

    const category = {
      name,
      description,
    };

    this.categoriesRepository.create(category);
  }
}