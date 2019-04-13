import { EnderecoViewModewl, TelefoneViewModewl } from '../../util/util.viewmodel';


export class EmpresaListaViewModel{
    EmpresaId: number;
    FantasiaOuNome: string;
    RazaoOuNome: string;
    CnpjOuCpf: string;
    Moeda: string;
}

export class DadosGeraisViewModewl{
    IdEmpresa: number
    NomeFantasia: string;
    RazaoSocial: string;
    Cnpj: string;
    Telefone:  TelefoneViewModewl[];
    Endereco: EnderecoViewModewl;
    EmpresaPreferencia: EmpresaPreferenciaViewModewl;
}

export class EmpresaPreferenciaViewModewl{
      PermitirAlteracaoMembrosEquipeApenasPorAdmin: boolean;
      PermitirEnvioDeEmailDeAprovacaoDeRelatorio: boolean;
      DescricaoDespesaObrigatoria: boolean;
      TornaCampoFormaDePagtoObrigatorio: boolean;
      PermitirLancamentosComValorNegativo: boolean;
      TornarCampoProjetoDaDespesaObrigatorio: boolean;
      PermitirUtiliarAdianmento: boolean;
}