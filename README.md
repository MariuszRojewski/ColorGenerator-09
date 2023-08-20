## Color Generator

## Opis pracy programu

Główny plik index.js importuje i renderuje komponent App.

Komponent App składa się z formularza do wprowadzania kolorów (Form), listy kolorów (ColorList) i kontenera na powiadomienia (ToastContainer). Stan colors przechowuje listę kolorów generowanych na podstawie wprowadzonego koloru. Funkcja addColor dodaje nowy kolor do stanu colors.

Komponent ColorList przyjmuje listę kolorów jako prop i renderuje listę komponentów SingleColor.

Komponent SingleColor reprezentuje pojedynczy blok koloru. Kiedy użytkownik kliknie na blok, kolor jest kopiowany do schowka.

Wszystkie komunikaty o powodzeniu lub błędach są wyświetlane za pomocą powiadomień toast z pakietu react-toastify.
