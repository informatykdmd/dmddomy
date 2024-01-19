<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Odczytaj dane z formularza
    $name = $_POST["name"];
    $email = $_POST["news-letter"];

    // Dodaj kod obsługi danych, np. zapis do bazy danych lub wysyłka e-maila
    // ...

    // Odpowiedź dla klienta (możesz przekierować na inną stronę lub zwrócić JSON)
    echo "Dane z formularza zostały przesłane pomyślnie!";
} else {
    // Obsługa innych przypadków
    http_response_code(405); // Method Not Allowed
    echo "Metoda nieobsługiwana";
}
?>
