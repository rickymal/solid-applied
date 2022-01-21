import { CreateUserUseCase} from "./CreateUserUseCase"
import { CreateUserController} from "./CreateUserController"
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository"
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider"

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export {
    createUserUseCase,
    createUserController
}