import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      this.turnUserAdminUseCase.execute({user_id});
      return response.status(200).json({message: "User changed to admin"});
    }catch (e){
      return response.status(400).json({error: e.toString()});
    }
  }
}

export { TurnUserAdminController };
