import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class JogoDaForca {

    public static void main(String[] args) {
        // Palavra secreta e tema
        String palavraSecreta = "computador";
        String tema = "Tecnologia";
        int maxErros = 6;
        
        // Inicializando variáveis
        Set<Character> letrasUsadas = new HashSet<>();
        Set<Character> letrasCorretas = new HashSet<>();
        int erros = 0;
        boolean ganhou = false;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem-vindo ao jogo da forca!");
        System.out.println("Tema: " + tema);

        // Loop do jogo
        while (erros < maxErros && !ganhou) {
            // Mostrar o estado atual da palavra
            System.out.print("Palavra: ");
            ganhou = true;
            for (char c : palavraSecreta.toCharArray()) {
                if (letrasCorretas.contains(c)) {
                    System.out.print(c + " ");
                } else {
                    System.out.print("_ ");
                    ganhou = false;
                }
            }
            System.out.println();

            // Mostrar as letras usadas e erros
            System.out.println("Letras usadas: " + letrasUsadas);
            System.out.println("Tentativas restantes: " + (maxErros - erros));

            // Mostrar a forca
            desenhaForca(erros);

            // Entrada do usuário
            System.out.print("Digite uma letra: ");
            char tentativa = scanner.nextLine().toLowerCase().charAt(0);

            // Verificar se a letra já foi usada
            if (letrasUsadas.contains(tentativa)) {
                System.out.println("Você já tentou essa letra!");
                continue;
            }

            // Adicionar a letra às usadas
            letrasUsadas.add(tentativa);

            // Verificar se a letra está na palavra
            if (palavraSecreta.contains(String.valueOf(tentativa))) {
                letrasCorretas.add(tentativa);
                System.out.println("Você acertou!");
            } else {
                erros++;
                System.out.println("Você errou!");
            }
        }

        // Final do jogo
        if (ganhou) {
            System.out.println("Parabéns! Você ganhou!");
        } else {
            System.out.println("Você perdeu! A palavra era: " + palavraSecreta);
        }

        scanner.close();
    }

    // Método para desenhar a forca com base nos erros
    public static void desenhaForca(int erros) {
        String[] estagios = {
            """
               +---+
                   |
                   |
                   |
                   ===
            """,
            """
               +---+
               O   |
                   |
                   |
                   ===
            """,
            """
               +---+
               O   |
               |   |
                   |
                   ===
            """,
            """
               +---+
               O   |
              /|   |
                   |
                   ===
            """,
            """
               +---+
               O   |
              /|\\  |
                   |
                   ===
            """,
            """
               +---+
               O   |
              /|\\  |
              /    |
                   ===
            """,
            """
               +---+
               O   |
              /|\\  |
              / \\  |
                   ===
            """
        };
        System.out.println(estagios[erros]);
    }
}