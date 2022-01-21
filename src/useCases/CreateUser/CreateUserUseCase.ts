import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider : IMailProvider
    ){}


    async execute(data : ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error("User already exist")
        }

        const user = new User(data)
        await this.usersRepository.save(user)

        this.mailProvider.sendMail({
            to : {
                name: data.name,
                email: data.email
            },
            from : {
                name: data.name,
                email: data.email
            },
            subject: "Teste",
            body : "OI"

        })
    }
}


// Sistema de controle de alagamento
// Hecsavl
// Planilha de Excel que calcular a perda de carga no sistema de bomba
// Fluxograma
// Noção de programação


// - Mquete funcionando em um tanque
// - Fazer a interface como o proghrama ele os dados e externaliza

// - Aquario
//     boia no fundo que acionar o programa
//     Agua no fundo do barco
//     Programa rodar
//     Ultrassom distancia entre o sensor e a superficie
//     sensor no teto no porão.
//     Ciclicamente pela diferença de altuyra, a vazão
//     capacidade de vazão da bomba
//     Se a entrada for maior que 15m3 
//     vazão de entrada é maior a bomba

