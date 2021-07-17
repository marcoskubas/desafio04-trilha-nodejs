import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    user.admin = true;
    /*console.log(user);
    const users = this.usersRepository.list();
    console.log(users);*/
    return user;
  }
}

export { TurnUserAdminUseCase };
