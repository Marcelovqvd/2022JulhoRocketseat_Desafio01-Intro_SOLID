import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.create({ name, email });

    const alreadyExists = this.usersRepository.findByEmail(email);

    if (alreadyExists) {
      throw new Error("Mensagem do erro");
    }

    return user;
  }
}

export { CreateUserUseCase };
