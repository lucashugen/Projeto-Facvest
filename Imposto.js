import java.util.Scanner;
import java.util.Locale;

public class Renda {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.printf("Renda anual com salário: ");
        double salarioAnual = sc.nextDouble();
        System.out.printf("Renda anual com prestação de serviço: ");
        double servico = sc.nextDouble();
        System.out.printf("Renda anual com ganho de capital: ");
        double capital = sc.nextDouble();
        System.out.printf("Gastos médicos: ");
        double medico = sc.nextDouble();
        System.out.printf("Gastos educacionais: ");
        double educacao = sc.nextDouble();

        // Realiza os cálculos dos impostos
        double impSalario = calcularImpostoSalario(salarioAnual);
        double impServicos = calcularImpostoServicos(servico);
        double impCapital = calcularImpostoCapital(capital);
        double impBruto = impSalario + impServicos + impCapital;
        double abatimento = calcularAbatimento(medico, educacao, impBruto);
        double impDevido = impBruto - abatimento;

        // Exibe o relatório com os resultados
        exibirRelatorio(impSalario, impServicos, impCapital, impBruto, abatimento, impDevido, medico, educacao);

        sc.close();
    }

    // Método para calcular o imposto sobre o salário
    public static double calcularImpostoSalario(double salarioAnual) {
        double salarioMensal = salarioAnual / 12;
        if (salarioMensal > 3000.0 && salarioMensal <= 5000.0) {
            return salarioAnual * 0.10;
        } else if (salarioMensal > 5000.0) {
            return salarioAnual * 0.20;
        }
        return 0.0;
    }

    // Método para calcular o imposto sobre serviços
    public static double calcularImpostoServicos(double servico) {
        return servico > 0 ? servico * 0.15 : 0.0;
    }

    // Método para calcular o imposto sobre ganho de capital
    public static double calcularImpostoCapital(double capital) {
        return capital > 0 ? capital * 0.20 : 0.0;
    }

    // Método para calcular o abatimento das deduções
    public static double calcularAbatimento(double medico, double educacao, double impBruto) {
        double gastosTotais = medico + educacao;
        double maxDedutivel = impBruto * 0.30;
        return Math.min(gastosTotais, maxDedutivel);
    }

    // Método para exibir o relatório de impostos
    public static void exibirRelatorio(double impSalario, double impServicos, double impCapital, 
                                       double impBruto, double abatimento, double impDevido, 
                                       double medico, double educacao) {
        System.out.println("\nRELATÓRIO DE IMPOSTO DE RENDA\n");
        System.out.println("*CONSOLIDADO DE RENDA:");
        System.out.printf("\nImposto sobre salário: %.2f", impSalario);
        System.out.printf("\nImposto sobre serviços: %.2f", impServicos);
        System.out.printf("\nImposto sobre ganho de capital: %.2f\n", impCapital);

        System.out.println("\n*DEDUÇÕES: \n");
        System.out.printf("Gastos médicos: %.2f\n", medico);
        System.out.printf("Gastos educacionais: %.2f\n", educacao);
        System.out.printf("Máximo dedutível: %.2f", impBruto * 0.30);
        System.out.printf("\nGastos dedutíveis: %.2f\n", medico + educacao);

        System.out.println("\nRESUMO:\n");
        System.out.printf("Imposto bruto total: %.2f", impBruto);
        System.out.printf("\nAbatimento: %.2f\n", abatimento);
        System.out.printf("Imposto devido: %.2f\n", impDevido);
    }
}