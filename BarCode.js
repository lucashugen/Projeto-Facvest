import java.util.Scanner;

public class BarEstabelecimento {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char genero = coletarGenero(scanner);
        int[] quantidades = coletarQuantidades(scanner);
        
        double precoIngresso = calcularPrecoIngresso(genero);
        double totalConsumo = calcularTotalConsumo(quantidades);
        double taxaCouvert = calcularTaxaCouvert(totalConsumo);

        exibirRelatorio(totalConsumo, taxaCouvert, precoIngresso);
        
        scanner.close(); // Fechando o scanner
    }

    private static char coletarGenero(Scanner scanner) {
        System.out.printf("Gênero (F/M): ");
        return scanner.next().charAt(0);
    }

    private static int[] coletarQuantidades(Scanner scanner) {
        int[] quantidades = new int[3];
        System.out.printf("Quantidade de Cerveja: ");
        quantidades[0] = scanner.nextInt();
        System.out.printf("Quantidade de Refrigerante: ");
        quantidades[1] = scanner.nextInt();
        System.out.printf("Quantidade de Espetinho: ");
        quantidades[2] = scanner.nextInt();
        return quantidades;
    }

    private static double calcularPrecoIngresso(char genero) {
        return (genero == 'F' || genero == 'f') ? 8.0 : 10.0;
    }

    private static double calcularTotalConsumo(int[] quantidades) {
        double precoCerveja = 5;
        double precoRefrigerante = 3;
        double precoEspetinho = 7;
        return (quantidades[0] * precoCerveja) + 
               (quantidades[1] * precoRefrigerante) + 
               (quantidades[2] * precoEspetinho);
    }

    private static double calcularTaxaCouvert(double totalConsumo) {
        return (totalConsumo > 30) ? 0 : 4;
    }

    private static void exibirRelatorio(double totalConsumo, double taxaCouvert, double precoIngresso) {
        System.out.println(" RELATÓRIO: ");
        System.out.printf("Consumo Total = R$ %.2f\n", totalConsumo);
        System.out.printf("Taxa de Couvert = R$ %.2f\n", taxaCouvert);
        System.out.printf("Preço do Ingresso = R$ %.2f\n", precoIngresso);
        System.out.println();

        double totalAPagar = totalConsumo + taxaCouvert + precoIngresso;
        System.out.printf("Valor a Pagar = R$ %.2f\n", totalAPagar);
    }
}