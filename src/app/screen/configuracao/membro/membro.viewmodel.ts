import { BancoViewModel } from '../../util/util.viewmodel';

export class MembroViewModel{
    IdMembro: number;
    Nome: string;
    IdMoeda: number;
    Banco: BancoViewModel;
    Email: string;
    Cpf: string;
    DataNascimento: string;
    IdCargo: number;
    IdDepartamento: number;
    IdPolitica: number;
    IdSuperior: number
}

export class MembroProjetoViewModel{
    Membro: MembroViewModel;
    IdProjeto: number;
}