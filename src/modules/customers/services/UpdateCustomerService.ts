import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/entities/repositories/CustomersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
}
class UpdateProfileService {
  public async execute({
    id,
    name,
    email,
  }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('User not found.');
    }

    const customerExists = await customersRepository.findByEmail(email);

    if (customerExists && customerExists.id !== id) {
      throw new AppError('There is already one user with this email.');
    }

    customer.name = name;
    customer.email = email;

    await customersRepository.save(customer);
    return customer;
  }
}

export default UpdateProfileService;
