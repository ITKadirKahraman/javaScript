FEHLERMELDUNGEN

1) FUNKTIONSPARAMETER

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funktionsparameter</title>
    <style>
        body {
            padding: 100px 200px;
        }
        
        table {
            border: 1px solid lightgray;
            border-collapse: collapse;
        }
        
        table td,
        th {
            min-width: 100px;
            text-align: start;
            padding: 4px;
        }
    </style>
    <style>
        p {
            margin-top: 80px;
        }
    </style>

    <script>
        let food = ['Apple', 'Spinach', 'Cookie', 'Pumpkin'];

        /**
         * Aufgabe 1 - Die Konsole begrüßt jemanden mit Name
         * @param { string } name - Der Name der Person, die begrüßt wird
         */
        function greet(name) {
            console.log(⁠ Hallo ${name} ⁠);
        }


        /**
         * Aufgabe 2
         */
        function multiply(number1, number2) {
            let result = number1 * number2;
            console.log(⁠ Das Ergebnis ist ${result} ⁠);
        }


        /**
         * Aufgabe 3
         */
        function contactInfo(name, age) {
            console.log(⁠ Mein Name ist ${name} ⁠);

            showMyAge(age);
        }


        /**
         * Aufgabe 3
         */
        function showMyAge() {
            console.log(⁠ Ich bin ${age} Jahre alt. ⁠);
        }


        /**
         * Aufgabe 4
         */
        function eatCookie(i) {
            let item = food[i]; // Lädt das Element an der Stelle "i" aus dem Array
            if (item == 'Cookie') {
                console.log('Om nom nom');
            } else {
                console.log('I don\'t like ' + item);
            }
        }



        /**
         * Aufgabe 5
         */
        function pythagoras(a, b, container) {
            let aabb = a * a + b * b; // Caclulates a² + b²
            let result = Math.sqrt(aabb); // Calculates the route (dt: Wurzel) of the variable aabb; 
            document.getElementById(container).innerHTML = result;
        }


        /**
         * Aufgabe 6
         */
        function calculateDistance(a, b, container) {
            // TODO: Diese Funktion muss (inklusive Funktionsparameter) implementiert werden. 
            // Orientiere dich an der Funktion aus Aufgabe 5.
           let result = a*b;
           document.getElementById(container).innerHTML = result;
        }
    </script>
</head>

<body>

    <h1>Funktionsparameter</h1>
    <p>Bitte öffne die Entwicklungstools und wähle den Tab "Console" aus. Erfülle die folgenden Aufgaben.</p>

    <p>
        1) Wenn du auf den ersten Button klickst, wird in der Console der Text "Hallo Claudia" angezeigt. Gucke dir die Funktion genau an.
        <br><br> 1.1. Ändere den <b>Funktionsparameter</b> so ab, dass auf der console <b>Hans</b> gegrüßt wird.
        <br> 1.2. Beschreibe genau, was die Funktion <code>greet(name)</code> macht.
    </p>
    <button onclick="greet(Hans)">Grüße senden</button>

    <p>
        2) Füge dem nachfolgenden Button die Funktion <code>multiply()</code> hinzu. Übergebe an die Funktion die Parameter <code>7</code> und <code>8</code>. <br> Auf der Console spoll der Text "Das Ergebnis ist 56" ausgegeben werden.
    </p>
    <button click="multiply(7, 8)">7 * 8</button>


    <p>
        3) Die Funktion <code>contactInfo()</code> ruft die Funktion <code>showMyAge()</code> auf. Diese zeigt jedoch nicht das Alter an, sondern nur den Fehler <code>Uncaught ReferenceError: age is not defined</code>. Finde und behebe den Fehler.
    </p>
    <button onclick="contactInfo('Claudia', 26)">Name und Alter anzeigen</button>



    <p>
        4) In diesem Code existiert ein Array mit diversen Leckereien. <br>
        <br> 4.1. Ändere der Funktionsparameter der Funktion <code>eatCookie()</code> so ab, dass aus dem Array der Keks ausgewählt und gegessen wird. Aus der Console sollte <code>Cookie: Om nom nom</code> angezeigt werden.
        <br><br>

    </p>
    <button onclick="eatCookie(1)>Keks essen</button>


    <p>5) Der Satz des Pythagoras ist jedem noch aus der Schuzeit bekannt: <code>a² + b² = c²</code>. In dieser Übung rechnen wir unser c² für verschiedene Werte von a und b aus.<br>

        <br> 5. 1. Versuche die Funktion in der ersten Zeile nachzuvollziehen. Sorge dafür, dass alle Ergebnisse aus der Tabelle richtig angezeigt werden.

        <br> 5. 2. Füge einen Button "Berechnen" in die zweite Spalte ein, der das die Rechnung <code>2² + 5²</code> ausrechnet.

        <br> 5.3. Spalte 3 der Tabelle verfügt bereits über einen "Berechnen" Button. Sobald dieser gedrückt wird, wird jedoch eine Fehlermeldung angezeigt. Verstehe und löse diesen Fehler.
    </p>

    <table>
        <tr>
            <th></th>
            <th>a² + b²</th>
            <th>c²</th>
            <th>Berechnen</th>
        </tr>
        <tr>
            <td>1.</td>
            <td>1² + 1²</td>
            <td id="result1"></td>
            <td><button onclick="pythagoras(1, 1, 'result1')">Berechnen</button></td>
        </tr>

        <tr>
            <td>2.</td>
            <td>2² + 5²</td>
            <td id="result2"></td>
            <td><button onclick="pythagoras(2, 5, 'result1')">Berechnen</button></td>
        </tr>


        <tr>
            <td>3.</td>
            <td>3² + 2²</td>
            <td id="result3"></td>
            <td><button onclick="pythagoras(3, 2, 'result3')">Berechnen</button></td>
        </tr>
    </table>



    <p>
        6. Wie viel Strecke kannst du innerhalb von 24 Stunden zurücklegen? Hierfür stellen wir eine Tabelle auf, welche Die Geschwindigkeit und Zeit multipliziert.<br>
        <br>

    </p>

    <table>
        <tr>
            <th>Fortbewegungsmittel</th>
            <th>Geschwindigkeit</th>
            <th>Zeit</th>
            <th>Ergebnis</th>
            <th>Berechnen</th>
        </tr>
        <tr>
            <td>Zu Fuß</td>
            <td>5 km/h</td>
            <td>24 Stunden</td>
            <td id="distance1"></td>
            <td><button onclick="calculateDistance(5, 24, resutl1)">Berechnen</button></td>
        </tr>

        <tr>
            <td>Joggen</td>
            <td>12 km/h</td>
            <td>24 Stunden</td>
            <td id="distance2"></td>
            <td><button onclick="calculateDistance(12, 24, result2)">Berechnen</button></td>
        </tr>

        <tr>
            <td>Fahrrad</td>
            <td>18 km/h</td>
            <td>24 Stunden</td>
            <td id="distance3"></td>
            <td><button onclick="calculateDistance(18, 24, result3)">Berechnen</button></td>
        </tr>

        <tr>
            <td>Auto</td>
            <td>100 km/h</td>
            <td>24 Stunden</td>
            <td id="distance4"></td>
            <td><button onclick="calculateDistance(100, 24, result4)">Berechnen</button></td>
        </tr>


        <tr>
            <td>Flugzeug</td>
            <td>800 km/h</td>
            <td>24 Stunden</td>
            <td id="distance5"></td>
            <td><button onclick="calculateDistance(800, 24, result5)">Berechnen</button></td>
        </tr>

        <tr>
            <td>ISS Raumstation</td>
            <td>28800 km/h</td>
            <td>24 Stunden</td>
            <td id="distance6"></td>
            <td><button onclick="calculateDistance(28800, 24, result6)">Berechnen</button></td>
        </tr>
    </table>
</body>

</html>
```

2) FORSCHLEIFE

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {
            padding: 100px 200px;
        }
        
        p {
            margin-top: 64px;
        }
    </style>

    <script>
        let fruits = ['Apple', 'Banana', 'Strawberry', 'Blackberry', 'Raspberry'];
        let amount = ['3x', '1x', '250g', '200g', '100g'];



        function init() {
            exercise1();
            exercise2();
            exercise3();
            exercise4();
            exercise5();
            exercise6();
            exercise7();
            exercise8();
        }


        function exercise1() {
            let list = document.getElementById('list1');

            for (let i = 0; i < 10; i++) {
                list.innerHTML += ⁠ <li>${i}</li> ⁠;
            }
        }


        function exercise2() {
            let list = document.getElementById('list2');
            for (let i = 1; i < 6; i++) {
                list.innerHTML += ⁠ <li>${i}</li> ⁠;
            }
        }

        function exercise3() {
            let list = document.getElementByid('list3');
            for (let i = 0; i < 11; i += 2) {
                list.innerHTML += ⁠ <li>${i}</li> ⁠;
            }
        }

        function exercise4() {
            let list = document.getElementById('list4');
            for (let i = 10; i > -1; i++) {
                list.innerHTML += ⁠ <li>${i}</li> ⁠;
            }
        }

        function exercise5() {
            let list = document.getElementById('list5');
            for (let i = 0; i < fruits.length; i++) {
                list5.innerHTML = ⁠ <li>${fruits[i]}</li> ⁠;
            }
        }

        function exercise6() {
            let list = document.getElementById('list6');
            for (let i = fruits.length; i > -1; i--) {
                list.innerHTML += ⁠ <li>${fruits[i]}</li> ⁠;
            }
        }

        function exercise7() {
            let list = document.getElementById('list7');
            for (let i = 0; i < fruits.length; i += 2) {
                list.innerHTML += ⁠ <li>${fruits[i]}</li> ⁠;
            }
        }

        function exercise() {
            let list = document.getElementById('list');
            for (let i = 0; i < fruits.length; i += 2) {
                list.innerHTML += ⁠ <li>${amount[i]} ${fruits[i]}</li> ⁠;
            }
        }

        function exercise9() {
            let newFruit = document.getElementById('newfruit').value;
            fruits.push(newFruit);

            let list = document.getElementById('list10');
            list.innerHTML = ``;

            for (let i = 0; i < fruits.length; i++) {
                list.innerHTML += ⁠ <li>${fruits[i]}</li> ⁠;
            }
        }

        function exercise9() {}
    </script>
</head>

<body onload="init()">

    <h1>
        Übungen zur For-Schleife
    </h1>


    <p>Ziel dieser Übung ist es, die for-Schleife besser zu verstehen. Verusche, alle Übungen selbstständig zu lösen.
    </p>

    <p>1) Füge 10 <code>&lt;li&gt;</code> Elemente ein, um die Zahlen von 0 bis 9 darzustellen.</p>
    <ul id="list1">

    </ul>

    <p>2) Füge 5 <code>&lt;li&gt;</code> Elemente ein, um die Zahlen von 1 bis 5 darzustellen.</p>
    <ul id="list2">

    </ul>


    <p>3) Füge <code>&lt;li&gt;</code>-Elemente mit den Zahlen 0, 2, 4, 6, 8, 10 ein. Nutze eine For-Schleife dafür.</p>
    <ul id="list3">

    </ul>

    <p>4) Füge <code>&lt;li&gt;</code>-Elemente mit den Zahlen von 10 - 0 ein. Tipp: mit <code>i--</code> verringerst du den Wert von i um 1.</p>
    <ul id="list4">

    </ul>


    <p>5) Füge <code>&lt;li&gt;</code>-Elemente mit allen Elementen aus dem Array <code>fruits</code> ein.</p>
    <ul id="list5">

    </ul>



    <p>6) Füge alle Elemente aus dem Array <code>fruits</code> rückwärts ein.</p>
    <ul id="list6">

    </ul>


    <p>7) Füge jedes zweite Element aus dem Array <code>fruits</code> in die Liste ein.</p>
    <ul id="list7">

    </ul>



    <p>8) Füge alle Elemente aus <code>fruits</code> und <code>amount</code> in die Liste ein. Also <b>3x Apple</b>,
        <b>1x Banana</b> usw.
    </p>
    <ul id="list8">

    </ul>



    <p>9) Füge in das Array <code>fruits</code> die Frucht aus dem Textfeld mit der ID <b>newfruit</b> hinzu.</p>
    <input id="newfruit" value="Orange"> <button onclick="exercise9()">Hinzufügen</button>


    <p>10) Füge in das Array <code>fruits</code> die Frucht aus dem Textfeld mit der ID <b>newfruit</b> hinzu zeige anschließend das gesamte Array in der liste <code>list10</code> an.</p>
    <ul id="list10">

    </ul>
</body>

</html>
```

3) HTML Templates

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Templates</title>

    <style>
        body {
            padding: 100px 200px;
        }

        #joke,
        #food {
            margin-top: 20px;
        }

        p {
            margin-top: 50px;
        }

        .circle {
            margin-top: 20px;
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: red;
            padding: 20px;
            box-shadow: -4px 9px 10px rgba(0, 0, 0,0.4);
        

        .mb-20 {
            margin-bottom: 20px;
        }
    </style>

    <script>
        let name = 'Frederick'; // Für Aufgabe 4


        /**
         * Aufgabe 1 
         */
        function joke1() {
            document.getElementById('joke').innerHTML =
                ⁠ Wie viele Windows-Anwender braucht man um eine Glühbirne zu wechseln? 100! Einer wechselt die Birne, 99 klicken die Fehlermeldungen weg. ⁠;
        }


        /**
         * Aufgabe 1 
         */
        function joke2() {
            document.getElementById('joke').innerHTML =
                ⁠ Linux wird nie das meistinstallierte Betriebssystem sein, wenn man bedenkt, wie oft man Windows neu installieren muss! ⁠;
        }

        /**
         * Aufgabe 1 
         */
        function joke3() {
            document.getElementByid('joke').innerHTML =
                `HTML or HTML5?
Guy 1 - 'How can you tell the difference between HTML and HTML5?'

Guy 2 - 'Open it in Internet Explorer'

Guy 1 - 'Ok'

Guy 2 - 'Did it work?'

Guy 1 - 'No'

Guy 2 - 'It's HTML5'`;
        }

        /**
         * Aufgabe 2 
         */
        function addFruit(fruit) {
            document.getElementById('food').innerHTML += ⁠ Frucht hinzugefügt: ${fruit} <br> ⁠;
        }

        /**
         * Setzt den Inhalt des Elements mit der "food"-ID auf einen leeren Text.
         * */
        function deleteFruits() {
            document.getElementById('food').innerHTML = '';
        }


        /**
         * Aufgabe 3 
         */
        function generatedCircle() {
            document.getElementById('generatedHTML').innerHTML = `
            <div class="circle"
                <b>${name}</b>    
            </div>
            `;
        }

        /**
         * Aufgabe 4 (Hilfsfunktion um den Namen zu ändern) 
         */
        function setName(n) {
            name = n;
        }



        /**
         * Aufgabe 5 
         */
        function sendMessage() {
            let message = document.getElementById('message'); // HTML Element mit ID message wird an die Variable 'message' zugewiesen. 
            let name = document.getElementById('name');

            let chat = document.getElementById('chat');

            if (message.value.length > 0) {
                chat.innerHTML += `
                    <div class="mb-20><i>${name.value || 'Unbekannt'}</i>: ${message.value}</div>
                `;

                message.value = ''; // Inhalt von Textfeld mit id "message" löschen
                name.value = '';
            }

        }
    </script>
</head>

<body>
    <h1>HTML Templates</h1>

    <p>1. In dem div-Container mit der ID <code>joke</code> sollen für jeden Button verschiedene Witze angezeigt werden.
        Die Buttons "Witz 1" und "Witz 2" funktionieren bereits.
        <br><br> 1.1. Implementiere die Funktion <code>joke3()</code> für den Button "Witz 3".

        <br> 1.2. Füge einen weiteren Button "Witz 4" hinzu.
    </p>

    <button onclick="joke1()">Witz 1</button>
    <button onclick="joke2()">Witz 2</button>
    <button onclick="joke3()">Witz 3</button>

    <div id="joke"></div>


    <p>
        2. Die verschiedenen Buttons fügen dem Container mit der ID <code>food</code> verschiedene Früchte hinzu.
        <br>
        <br> 2.1. Füge einen weiteren Button "Drachenfrucht" hinzu, der diese Frucht ebenfalls zu unserer Liste
        hinzufügt.
        <br> 2.2. Der Button <b>Alles Löschen</b> ruft die Funtion <code>deleteFruits()</code> auf. Was macht diese
        Funktion? Wie funktioniert sie?
        <br> 2.3. Erkläre den Unterschied von <code>=</code> und <code>+=</code>
        <br> 2.4. Stelle die Früchte in der Liste fett dar. Bearbeite die Funktion <code>addFruit(fruit)</code> so, dass
        jede Frucht in dem generierten HTML Code mit einem <code>&lt;b&gt;&lt;/b&gt;</code> umgeben ist.
    </p>

    <div><button onclick="addFruit('Apfel')">Apfel</button>
        <button onclick="addFruit('Banane')">Banane</button>
        <button onclick="addFruit('Clementine')">Clementine</button>
        <button onclick=addFruit('Drachenfrucht')">Drachenfrucht</button>
    </div>
    <div>
        <button onclick="deleteFruits()">Alles Löschen</button>
    </div>

    <div id="food"></div>

    <p>
        3. Wir wollen HTML Code generieren! Der nachfolgende Button generiert einen Kreis. Probiere ihn aus!
        <br><br> 3.1. Unser Kreis soll schöner aussehen: Fühe ihm die CSS Eigenschaft <code>box-shadow: -4px 9px 10px
            rgba(0, 0, 0,0.4);</code> hinzu. <i>Tipp: Hierzu brauchst du kein JavaScript.</i>
        <br> 3.2. Unser Kreis soll nicht einfach nur "Kreis" heißen. Bennene das Wort "Kreis" um in einen Namen, z.B.
        <b>Claus</b>.
        <br>3.3. Damit der Name deutlicher zu sehen ist, sollte er <b>Fett</b> geschrieben werden. Verwende dafür das
        &lt;b&gt;-Tag und füge den Namen in die Mitte ein.
    </p>

    <button onclick="generatedCircle()">Kreis generieren</button>

    <div id="generatedHTML"></div>

    <p>4. Variablen helfen uns, unsere Templates noch weiter zu dynamisieren. In dieser Aufgabe wollen wir unseren Kreis
        noch weiter optimieren.
        <br><br> 4.1. Die Funktion <code>generatedCircle()</code> aus Aufgabe 3 generiert einen Kreis. Der Name soll nun
        durch eine Variable ersetzt werden. Ersetze den namen der Kreises durch die Variable ${name}.<br> 4.2. Füge
        einen Button hinzu, der
        den Wert der Variable <code>name</code> zu "Henriette" ändert. Überprüfe, ob sich der Kreis noch verändert.
    </p>

    <button onclick="setName('Franz')">Franz</button>
    <button onclick="setName('Gundula')">Gundula</button>
    <button onclick="setName(Henriette)">Gundula</button>


    <p>
        5. Wir bauen einen Chat. Du kannst eine Nachricht in das Eingabefeld schreiben und auf senden klicken.
        Anschließend wird dem Container mit der ID <code>chat</code> ein neuer HTML Code hinzugefügt. Versuche die
        FUnktion nachzuvollziehen.
        <br><br> 5.1. Sorge dafür, dass das Wort "Unbekannt" vor jeder Chat-Nachricht <i>kursiv</i> angezeigt wird.
        <i>Tipp: Verwende das HTML Tag <code>&lt;i&gt;</code></i>
        <br>5.2. Füge ein weiteres Textfeld <b>vor</b> das Textfeld mit der ID <code>message</code> ein. Verwende als ID
        <code>name</code> und als placeholder den Text <code>Namen eingeben...</code>.
        <br>5.3. Vor jeder Chatnachricht steht aktuell das Wort <i>Unkekannt:</i>. Ersetze es durch den Namen, der in
        das Textfeld aus der letzten Aufgabe eingetragen wurde.
        <br> 5.4. Gebe den einzelnen div-Containern die CSS-Eigenschaft <code>margin-bottom: 20px;</code>
        <br> 5.5. Wenn das Textfeld mit der ID <code>message</code> leer ist, kann eine Nachricht immernoch gesendet
        werden. Sorge durch eine If-Abfrage dafür, dass ein Textfeld mit der ID <code>message</code> IMMER ausgefüllt
        sein muss.<br> <i>Tipp: mit <code>message.value.length</code> erhälst du die Länge des Textes, der in das
            Textfeld geschrieben wurde.</i>
    </p>
    <input type="text" id="name" placeholder="Namen eingeben....">
    <input type="text" id="message" placeholder="Nachricht eingeben..."> <button onclick="sendMessage()">Senden</button>
    <div id="chat">

    </div>

</body>

</html>
```
