import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post('/users',(req,res) => {
    return createUserController.handle(req,res)
})

export { router }

// S : A classe deve ter apenas uma única tarefa
// O
// interface Remuneravel {
//     remuneracao() : any;
// }

// class Clt implements Remuneravel {
//     remuneracao() {
//         return 0;
//     }
// }

// class Pj implements Remuneravel {
//     remuneracao() {
//         return 1;
//     }
// }

// class Folha {
//     public function calcular()
// }

// L: 

// I : Uma classe não deve ser obrigada a implementa algo que ela não precisa

// D: depender de abstrações e não de implementações