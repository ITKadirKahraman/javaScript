/*
****** HTML TEMPLATES
*/

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
        }

        div {
            margin-bottom: 20px;
        }
    </style>

    <script>
        let name = 'Claus'; // Für Aufgabe 4

        /*
         * Aufgabe 1 
         */
        function joke1() {
            document.getElementById('joke').innerHTML =
                `Wie viele Windows-Anwender braucht man um eine Glühbirne zu wechseln? 100! Einer wechselt die Birne, 99 klicken die Fehlermeldungen weg.`;
        }

        function joke2() {
            document.getElementById('joke').innerHTML =
                `Linux wird nie das meistinstallierte Betriebssystem sein, wenn man bedenkt, wie oft man Windows neu installieren muss!`;
        }

        function joke3(){
            document.getElementById('joke').innerHTML = 
            `Ein Programmierer wird im Supermarkt von seiner Frau geschickt:
            <br>„Kauf bitte ein Brot. Und wenn sie Eier haben, bring 10 mit.“
            <br> Der Programmierer kommt nach Hause… mit 10 Broten.
            <br>Seine Frau: „Warum hast du denn 10 Brote gekauft?!“
            <br>Der Programmierer:
            <br>„Sie hatten Eier.“ 🥚➡️🍞`;
        }

        function joke4() {
            document.getElementById('joke').innerHTML = 
            `Ein Programmierer geht zum Arzt.
            <br>Arzt: „Sie müssen mehr an die frische Luft gehen, sich bewegen und weniger vor dem Computer sitzen.“
            <br>Der Programmierer nickt und sagt:
            <br>„Okay.“
            <br>Der Arzt: „Gut. Ich schreibe Ihnen 3 Spaziergänge pro Tag auf.“
            <br>Der Programmierer:
            <br>„Alles klar… aber in welcher Version?
            <br>Spaziergang 1.0, 2.0 oder gleich 3.0?“ 💻🚶‍♂️`;
        }

        /*
         * Aufgabe 2 
         */
        // Erkläre den Unterschied von = und +=
        // Der Unterschied ist, dass der einzelene = Operator für die Zuweisung ist und der 
        // += Operator für das hinzufügen mit addieren operiert
        function addFruit(fruit) {
            document.getElementById('food').innerHTML += `Frucht hinzugefügt: <strong> ${fruit} </strong><br>`;
        }

        // Was macht diese Funktion? 
        // Sie löscht die Elemente von einem bestimmten ID
        // Wie funktioniert sie?
        // mit der DOM Methode: document.getElementById suchen wir nach einem spezifischen ID in diesem Fall: food
        // mit innerHTML fügen wir dem inneren vom HTML Element was hinzu in diesem Fall einen leeren String ''
        // dadurch löscht diese Funktion die vorhandene Liste
        function deleteFruits() {
            document.getElementById('food').innerHTML = '';
        }

        /*
         * Aufgabe 3 
         */
        function generatedCircle() {    
            document.getElementById('generatedHTML').innerHTML = `
            <div class="circle">
                <b>${name}</b>    
            </div>
            `;
        }

        /*
         * Aufgabe 4 (Hilfsfunktion um den Namen zu ändern) 
         */
        function setName(n) {
            name = n;
            generatedCircle();
        }

        /*
         * Aufgabe 5
         */
        function sendMessage() {
            let message = document.getElementById('message'); // HTML Element mit ID message wird an die Variable 'message' zugewiesen. 
            let chat = document.getElementById('chat');
            let name = document.getElementById('name');

            if(message.value.length > 0){
                chat.innerHTML += `
                <div><i>${name.value}</i>: ${message.value}</div>
                `;
            }

            message.value = ''; // Inhalt von Textfeld mit id "message" löschen
        }
    </script>
</head>

<body>
    <h1>HTML Templates</h1>

    <p>1. In dem div-Container mit der ID <code>joke</code> sollen für jeden Button verschiedene Witze angezeigt werden. Die Buttons "Witz 1" und "Witz 2" funktionieren bereits.
        <br><br> 1.1. Implementiere die Funktion <code>joke3()</code> für den Button "Witz 3".

        <br> 1.2. Füge einen weiteren Button "Witz 4" hinzu.
    </p>

    <button onclick="joke1()">Witz 1</button>
    <button onclick="joke2()">Witz 2</button>
    <button onclick="joke3()">Witz 3</button>
    <button onclick="joke4()">Witz 4</button>

    <div id="joke"></div>


    <p>
        2. Die verschiedenen Buttons fügen dem Container mit der ID <code>food</code> verschiedene Früchte hinzu.
        <br>
        <br> 2.1. Füge einen weiteren Button "Drachenfrucht" hinzu, der diese Frucht ebenfalls zu unserer Liste hinzufügt.
        <br> 2.2. Der Button <b>Alles löschen</b> ruft die Funktion <code>deleteFruits()</code> auf. Was macht diese Funktion? Wie funktioniert sie?
        <br> 2.3. Erkläre den Unterschied von <code>=</code> und <code>+=</code>
        <br> 2.4. Stelle die Früchte in der Liste fett dar. Bearbeite die Funktion <code>addFruit(fruit)</code> so, dass jede Frucht in dem generierten HTML Code mit einem <code>&lt;b&gt;&lt;/b&gt;</code> umgeben ist.
    </p>

    <div>
        <button onclick="addFruit('Apfel')">Apfel</button>
        <button onclick="addFruit('Banane')">Banane</button>
        <button onclick="addFruit('Clementine')">Clementine</button>
        <button onclick="addFruit('Drachenfrucht')">Drachenfrucht</button>
    </div>
    <div>
        <button onclick="deleteFruits()">Alles löschen</button>
    </div>

    <div id="food"></div>

    <p>
        3. Wir wollen HTML Code generieren! Der nachfolgende Button generiert einen Kreis. Probiere ihn aus!
        <br><br> 3.1. Unser Kreis soll schöner aussehen: Füge ihm die CSS Eigenschaft <code>box-shadow: -4px 9px 10px
            rgba(0, 0, 0,0.4);</code> hinzu. <i>Tipp: Hierzu brauchst du kein JavaScript.</i>
        <br> 3.2. Unser Kreis soll nicht einfach nur "Kreis" heißen. Benenne das Wort "Kreis" um in einen Namen, z.B. <b>Claus</b>.
        <br>3.3. Damit der Name deutlicher zu sehen ist, sollte er <b>Fett</b> geschrieben werden. Verwende dafür das &lt;b&gt;-Tag und füge den Namen in die Mitte ein.
    </p>

    <button onclick="generatedCircle()">Kreis generieren</button>

    <div id="generatedHTML"></div>

    <p>4. Variablen helfen uns, unsere Templates noch weiter zu dynamisieren. In dieser Aufgabe wollen wir unseren Kreis noch weiter optimieren.
        <br><br> 4.1. Die Funktion <code>generatedCircle()</code> aus Aufgabe 3 generiert einen Kreis. Der Name soll nun durch eine Variable ersetzt werden. Ersetze den Namen des Kreises durch die Variable ${name}.<br> 4.2. Füge einen Button hinzu, der
        den Wert der Variable <code>name</code> zu "Henriette" ändert. Überprüfe, ob sich der Kreis noch verändert.
    </p>

    <button onclick="setName('Franz')">Franz</button>
    <button onclick="setName('Gundula')">Gundula</button>
    <button onclick="setName('Henriette')">Henriette</button>


    <p>
        5. Wir bauen einen Chat. Du kannst eine Nachricht in das Eingabefeld schreiben und auf "senden" klicken. Anschließend wird dem Container mit der ID <code>chat</code> ein neuer HTML Code hinzugefügt. Versuche die Funktion nachzuvollziehen.
        <br><br> 5.1. Sorge dafür, dass das Wort "Unbekannt" vor jeder Chat-Nachricht <i>kursiv</i> angezeigt wird. <i>Tipp: Verwende das HTML Tag <code>&lt;i&gt;</code></i>
        <br>5.2. Füge ein weiteres Textfeld <b>vor</b> das Textfeld mit der ID <code>message</code> ein. Verwende als ID <code>name</code> und als Placeholder den Text <code>Namen eingeben...</code>.
        <br>5.3. Vor jeder Chatnachricht steht aktuell das Wort <i>Unkekannt:</i>. Ersetze es durch den Namen, der in das Textfeld aus der letzten Aufgabe eingetragen wurde.
        <br> 5.4. Gebe den einzelnen div-Containern die CSS-Eigenschaft <code>margin-bottom: 20px;</code>
        <br> 5.5. Wenn das Textfeld mit der ID <code>message</code> leer ist, kann eine Nachricht immernoch gesendet werden. Sorge durch eine If-Abfrage dafür, dass ein Textfeld mit der ID <code>message</code> IMMER ausgefüllt sein muss.<br> <i>Tipp: mit  <code>message.value.length</code> erhälst du die Länge des Textes, der in das Textfeld geschrieben wurde.</i>
    </p>

    <input type="text" id="name" placeholder="Namen eingeben...">
    <input type="text" id="message" placeholder="Nachricht eingeben..."> <button onclick="sendMessage()">Senden</button>
    <div id="chat">

    </div>

</body>

</html>
