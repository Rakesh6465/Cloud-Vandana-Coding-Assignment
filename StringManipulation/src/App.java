import java.util.*;

public class App {

    public static boolean areAnagrams(String str1, String str2) {
        // Convert to lowercase and remove spaces
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        // If lengths are different, they cannot be anagrams
        if (str1.length() != str2.length()) {
            return false;
        }

        // Convert strings to char arrays and sort them
        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        // Check if sorted arrays are equal
        return Arrays.equals(arr1, arr2);
    }
    public static void main(String[] args) throws Exception {

        Scanner scanner = new Scanner(System.in);

        // Take user input
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();

        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();

        // Check and display result
        if (areAnagrams(str1, str2)) {
            System.out.println("Output: true (The strings are anagrams)");
        } else {
            System.out.println("Output: false (The strings are not anagrams)");
        }

        scanner.close();
    }
}
