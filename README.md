# Dokumentacja portfolio internetowego stworzonego na potrzeby projektu z przedmiotu: "Projektowanie interfejsów użytkownika II" 

## Wstęp
Poniższy dokument opisuje strukturę portfolio internetowego stworzonego w ramach projektu z przedmiotu Projektowanie interfejsów urzytkownika II,
wykorzystane technologie przy tworzeniu strony oraz testy strony internetowej na 5 różnych przeglądarkach (Chrome, Edge, Safari, Firefox i Opera) w trzech rozdzielczościach na każdej przeglądarce.

---
## Adres strony

#### https://bowdead.github.io/BGportfolio/
---

## Opis struktury serwisu
**Strona internetowa składa się z następujących podstron:**
1. **HOME** - zawiera krótki opis na mój temat
2. **LIST** – zawiera listę projektów, w których brałem udział, lista pobierana jest z wewnętrznego jsona, podstrona wykorzystuje także paginację
3. **DETAILS** – zawiera szczegółowe informacje na temat projektu wybranego na podstronie "LIST"
4. **Stopka** – zawiera informacje o prawach autorskich

**Każda podstrona składa się z następujących sekcji:**
1. **Nagłówek** – zawiera logo, nazwę strony oraz menu nawigacyjne
2. **Content** – posiada różną treść w zależności na której podstronie znajduje się użytkownik
3. **Stopka** – zawiera informacje o prawach autorskich

---

## Opis technologii zastosowanych przy tworzeniu serwisu
### Frontend
- **HTML** - do stworzenia struktury strony
- **CSS** – do  stylizacji strony
- **JavaScript** – do obsługi logiki strony, w tym paginacji, oraz tworzenia komponentów
- **GitHub Pages** – platforma hostingowa dla strony internetowej

### Wersjonowanie kodu
- **Git** – system kontroli wersji pozwalający na śledzenie zmian w kodzie oraz współpracę nad projektem.
- **GitHub** – platforma do przechowywania kodu, zarządzania wersjami, oraz współpracy zespołowej.

---

## Testy
### Zakres testów
Testy wizualne zostły przeprowadzone w następujących przeglądarkach:
- Chrome
- Edge
- Safari
- Firefox
- Opera

### Testowane rozdzielczości
1. **Desktop:** 1440px szerokości
2. **Tablet:** 768px szerokości
3. **Smartfon:** 375px szerokości

#### Zrzuty ekranu dla testów
### Google
##### DESKTOP
![Google Desktop](screenshots/g_desktop.PNG)
![Google Desktop](screenshots/g2_desktop.PNG)
![Google Desktop](screenshots/g3_desktop.PNG)
![Google Desktop](screenshots/g4_desktop.PNG)
![Google Desktop](screenshots/g5_desktop.PNG)
##### TABLET
![Google Tablet](screenshots/g_tablet.PNG)
![Google Tablet](screenshots/g2_tablet.PNG)
![Google Tablet](screenshots/g3_tablet.PNG)
![Google Tablet](screenshots/g4_tablet.PNG)
![Google Tablet](screenshots/g5_tablet.PNG)
##### MOBILE
![Google mobile](screenshots/g_mobile.PNG)
![Google mobile](screenshots/g2_mobile.PNG)
![Google mobile](screenshots/g3_mobile.PNG)
![Google mobile](screenshots/g4_mobile.PNG)
![Google mobile](screenshots/g5_mobile.PNG)
### Opera
##### DESKTOP
![Opera Desktop](screenshots/o_desktop.PNG)
![Opera Desktop](screenshots/o2_desktop.PNG)
![Opera Desktop](screenshots/o3_desktop.PNG)
![Opera Desktop](screenshots/o4_desktop.PNG)
![Opera Desktop](screenshots/o5_desktop.PNG)
##### TABLET
![Opera Tablet](screenshots/o_tablet.PNG)
![Opera Tablet](screenshots/o2_tablet.PNG)
![Opera Tablet](screenshots/o3_tablet.PNG)
![Opera Tablet](screenshots/o4_tablet.PNG)
![Opera Tablet](screenshots/o5_tablet.PNG)
##### MOBILE
![Opera mobile](screenshots/o_mobile.PNG)
![Opera mobile](screenshots/o2_mobile.PNG)
![Opera mobile](screenshots/o3_mobile.PNG)
![Opera mobile](screenshots/o4_mobile.PNG)
![Opera mobile](screenshots/o5_mobile.PNG)
### Firefox
##### DESKTOP
![Firefox Desktop](screenshots/f_desktop.PNG)
![Firefox Desktop](screenshots/f2_desktop.PNG)
![Firefox Desktop](screenshots/f3_desktop.PNG)
![Firefox Desktop](screenshots/f4_desktop.PNG)
![Firefox Desktop](screenshots/f5_desktop.PNG)
##### TABLET
![Firefox Tablet](screenshots/f_tablet.PNG)
![Firefox Tablet](screenshots/f2_tablet.PNG)
![Firefox Tablet](screenshots/f3_tablet.PNG)
![Firefox Tablet](screenshots/f4_tablet.PNG)
![Firefox Tablet](screenshots/f5_tablet.PNG)
##### MOBILE
![Firefox mobile](screenshots/f_mobile.PNG)
![Firefox mobile](screenshots/f2_mobile.PNG)
![Firefox mobile](screenshots/f3_mobile.PNG)
![Firefox mobile](screenshots/f4_mobile.PNG)
![Firefox mobile](screenshots/f5_mobile.PNG)
### Edge
##### DESKTOP
![Edge Desktop](screenshots/e_desktop.PNG)
![Edge Desktop](screenshots/e2_desktop.PNG)
![Edge Desktop](screenshots/e3_desktop.PNG)
![Edge Desktop](screenshots/e4_desktop.PNG)
![Edge Desktop](screenshots/e5_desktop.PNG)
##### TABLET
![Edge Tablet](screenshots/e_tablet.PNG)
![Edge Tablet](screenshots/e2_tablet.PNG)
![Edge Tablet](screenshots/e3_tablet.PNG)
![Edge Tablet](screenshots/e4_tablet.PNG)
![Edge Tablet](screenshots/e5_tablet.PNG)
##### MOBILE
![Edge mobile](screenshots/e_mobile.PNG)
![Edge mobile](screenshots/e2_mobile.PNG)
![Edge mobile](screenshots/e3_mobile.PNG)
![Edge mobile](screenshots/e4_mobile.PNG)
![Edge mobile](screenshots/e5_mobile.PNG)
### Safari
##### DESKTOP
![Safari Desktop](screenshots/s_desktop.PNG)
##### TABLET
![Safari Tablet](screenshots/s_tablet.PNG)
##### MOBILE
![Safari mobile](screenshots/s_mobile.PNG)


#### Uwagi
- W przypdaku testów na safari kolory zdefiniowane w css odbiegały od reszty
- W mojej wersji safari (Windows) nie mogłem znaleść trybu responsywnego
- Na wszystkich przeglądarkach strona działała poprawnie
- Scrypty napisane w javascript działały na wszystkich przeglądarkach
---

## Podsumowanie
Po testach responsywności i działania na przeglądarkach: Google Chrome, Opera, Firefox, Safari i Edge. Strona spełnia swoje zadanie i działa
w każdej z wyżej wymienionych przeglądarek internetowych. Strona ma prosty design spełniający wymagania projektowe, zdefiniowane style dla trzech
zakresów rozdzielczości oraz obsługuje paginację i komponenty napisane w javascript.
