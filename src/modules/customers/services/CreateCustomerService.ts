import AppError from '@shared/errors/AppError';
import {hash} from 'bcryptjs'
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/entities/repositories/CustomersRepository';


interface IRequest {
  name: string;
  email: string;
}

class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomersRepository);
    const emailExists = await customerRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('email address already used.');
    }

    const customer = customerRepository.create({
      name,
      email,
    });

    await customerRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
