<pre><span style="background-color:#8AE234"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/__tests__/users/repositories/</font><b>UsersRepository.spec.ts</b>
  UsersRepository
    <font color="#4E9A06">✓</font> should be able to create new users (5 ms)
    <font color="#4E9A06">✓</font> should be able to list all users (1 ms)
    <font color="#4E9A06">✓</font> should be able to find user by ID (1 ms)
    <font color="#4E9A06">✓</font> should be able to find user by e-mail address (10 ms)
    <font color="#4E9A06">✓</font> should be able to turn an user as admin (1 ms)

<span style="background-color:#8AE234"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/__tests__/users/useCases/</font><b>TurnUserAdminUseCase.spec.ts</b>
  TurnUserAdminUseCase
    <font color="#4E9A06">✓</font> should be able to turn an user as admin (5 ms)
    <font color="#4E9A06">✓</font> should not be able to turn a non existing user as admin (4 ms)

<span style="background-color:#8AE234"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/__tests__/users/useCases/</font><b>ListAllUsersUseCase.spec.ts</b>
  ListAllUsersUseCase
    <font color="#4E9A06">✓</font> should be able to list all users (2 ms)
    <font color="#4E9A06">✓</font> should not be able to a non admin user get list of all users (3 ms)
    <font color="#4E9A06">✓</font> should not be able to a non existing user get list of all users (1 ms)

<span style="background-color:#8AE234"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/__tests__/users/useCases/</font><b>ShowUserProfileUseCase.spec.ts</b>
  ShowUserProfileUseCase
    <font color="#4E9A06">✓</font> should be able to get user profile by ID (2 ms)
    <font color="#4E9A06">✓</font> should not be able to show profile of a non existing user (3 ms)

<span style="background-color:#8AE234"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/__tests__/users/model/</font><b>User.spec.ts</b>
  User model
    <font color="#4E9A06">✓</font> should be able to create an user with all props (2 ms)

<span style="background-color:#8AE234"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/__tests__/users/useCases/</font><b>CreateUserUseCase.spec.ts</b>
  CreateUserUseCase
    <font color="#4E9A06">✓</font> should be able to create new users (1 ms)
    <font color="#4E9A06">✓</font> should not be able to create new users when email is already taken (3 ms)

<span style="background-color:#8AE234"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/__tests__/</font><b>routes.spec.ts</b>
  [POST] /users
    <font color="#4E9A06">✓</font> should be able to create new users (33 ms)
    <font color="#4E9A06">✓</font> should not be able to create new users when email is already taken (4 ms)
  [PATCH] /users/:user_id/admin
    <font color="#4E9A06">✓</font> should be able to turn an user as admin (3 ms)
    <font color="#4E9A06">✓</font> should not be able to turn a non existing user as admin (2 ms)
  [GET] /users/:user_id
    <font color="#4E9A06">✓</font> should be able to get user profile by ID (2 ms)
    <font color="#4E9A06">✓</font> should not be able to show profile of a non existing user (2 ms)
  [GET] /users
    <font color="#4E9A06">✓</font> should be able to list all users (3 ms)
    <font color="#4E9A06">✓</font> should not be able to a non admin user get list of all users (2 ms)
    <font color="#4E9A06">✓</font> should not be able to a non admin user get list of all users (2 ms)
    <font color="#4E9A06">✓</font> should not be able to a non existing user get list of all users (2 ms)
</pre>