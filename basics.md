JAVASCRIPT BASICS CHEAT SHEET 

1. JavaScript Variables
- Definition: Variablen sind benannte Speicherorte für Daten die Werte wie Zaheln und Texte speichern und sind entscheidend, um Werte dynamisch zu verarbeiten und zu verwalten
- Variablen: let (veränderlich), const (konstant), var 
- Deklaration und Verwendung:

1.1. let (veränderlich)
- Verwendung: Variablen die veränderbare Werte aufweisen könnten, sind bekannt innerhalb des Blocks (z.B. in {}).
- Example:

```
let value = [1, 2, 3, 4];
value.pop();
let lastName = "Kahraman";
lastName = "Cosgun";
let age = 31;
age = 32;
```

1.2. const (konstant)
- Verwendung: Für Konstante Werte, die nach der Zuweisung im Verlauf des Projekts nicht mehr veränderbar sind
- Example:
```
const firstName = ["Kadir", "Melek", "Mihrima Nur", "Sertan"];
const pi = 3.14159;
const deathYear = 1990;
const bornYear = 1980;
```

1.2. var (ältere Methode)
- Verwendung: Ältere Methode, die oft im gesamten Funktionsumfang gültig ist (Funktions-Scope) und meist durch let und const ersetzt wurde.
- Example:
```
var firstName = ["Kadir", "Melek", "Mihrima Nur", "Sertan"];
var pi = 3.14159;
var lastName = "Kahraman";
var bornYear = 1980;
```

2. JavaScript Operatoren
- Definition: Die Operatoren ermöglichen Berechnungen, Vergleiche, Zuweisungen und logische Verknüpfungen zwischen Werten.
- Variaten: arithmetische Operatoren, Zuweisungsoperatoren, Vergleichsoperatoren sowie logische Operatoren
- Deklaration und Verwendung:

2.1 arithmetische Operatoren
- Verwendung: Geeignte für mathematische Zuweisungen der Werte
- Deklaration: + Addition/Verkettung, - Subtraktion, * Multiplikation, / Division, % Modulo/Restwert von Division, ** Exponentiation
- Example:

```
let value = 3;
let b = 4;
value = value + b;
value = value - b;
value = value * b;
value = value / b;
value = b % value;
value = value ** b; 
```

2.2 Zuweisungsoperatoren
- Verwendung: Geeignte für Zuweisungen der Werte
- Deklaration: = Zuweisung += -= *= /= %= kombinierte Zuweisungen (zB: z.B. (x+=y) ist (x=x+y))
- Example:

```
let value = 3;
value += value;
value -= value - b;
value *= value * b;
value /= value / b;
value %= b % value;
```

2.3 Vergleichsoperatoren
- Verwendung: Geeignte für das Vergleichen der Werte
- Deklaration: == (Gleichheit - konvertiert Typen) === (Strenge Gleichheit - gleicher Wert & Typ) != (Ungleichheit) !== (Strenge Ungleichheit) > (Größer), < (Kleiner), >= (Größer oder gleich), <= (Kleiner oder gleich)
- Example:

```
let value = 3;
let b = 4;
let a = "Kadir";
value == b;
value === b;
value != a;
value < b;
value <= b;
b > value;
b >= value;
```


2.4 Logische Operatoren
- Verwendung: Entspricht der einer Variabel wie der des anderen
- Deklaration: && (UND - true, wenn beide Operanden wahr sind) || (ODER - true, wenn einer der Operanden wahr ist) ! (NICHT - negiert den logischen Wert)
- Example:

```
var firstName = ["Kadir", "Melek", "Mihrima Nur", "Sertan"];
var pi = 3.14159;
var lastName = "Kahraman";
var bornYear = 1980;
```


2.5 Ternärer Operator
- Verwendung: Ist ein Ersatz für If Else
- Deklaration: ? : (Kompakte if-else-Struktur, z.B. Bedingung ? Wert1 : Wert2)
- Example:

```
var firstName = ["Kadir", "Melek", "Mihrima Nur", "Sertan"];
var pi = 3.14159;
var lastName = "Kahraman";
var bornYear = 1980;
```

2.4 Typ-Operatoren
- Verwendung: Den Datentyp der Variabel zurückgeben
- Deklaration: typeof (gibt den Datentyp zurück)
- Example:

```
var firstName = ["Kadir", "Melek", "Mihrima Nur", "Sertan"];
var pi = 3.14159;
var lastName = "Kahraman";
var bornYear = 1980;
```

2.4 String-Operator
- Verwendung: Verbindet Zeichenketten miteinander
- Deklaration: +
- Example:

```
var firstName = ["Kadir", "Melek", "Mihrima Nur", "Sertan"];
var pi = 3.14159;
var lastName = "Kahraman";
var bornYear = 1980;
```



