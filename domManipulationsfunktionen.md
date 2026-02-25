**DOM Manipulationsfunktionen**

DOM-Manipulation ermöglicht mit JavaScript das dynamische Verändern von HTML- Inhalt, 
-Strukturen und -Stilen ohne Neuladen der Seite. Wichtige Funktionen umfassen das Erstellen
(createElemente), Auswählen (querySelector), Hinzufügen (appendChild) und Löschen (removeChild)
von Knoten sowie das Ändern von Attributen (setAttribute) und Stilen (sytel, classList).

***Hier ist eine Übersicht der wichtigsten DOM-Manipulationsfunktionen:***

1. Elemente auswählen
- document.getElementById(): Wählt ein Element über seine eindeutige ID aus.
- document.querySelector(cssSelector): Wählt das erste Element aus, das auf den CSS Selektor passt.
- document.querySelectorAll(cssSelector): Wählt alle passenden Elemente aus. 

2. Elemente erstellen und hinzufügen
- document.createElement(tagName): Erstellt ein neues HTML-Element(zB <div></div>).
- element.appendChild(childNode): Fügt ein Element als letztes Kind an ein übergeordnetes Element an.
- element.insertBefore(newNode, referenceNode): Fügt ein neues Element vor einem bestehenden Kindelement ein.
- document.createTextNode(text): Erstellt einen neuen Textknoten.

3. Inhalt und Attribute ändern
- element.textContent = "...": Ändert oder setzt den Textinhalt eines Elements.
- element.innerHTML = "...": Ändert den HTML-Inhalt innerhalb eines Elements.
- element.setAttribut(name, value): Setzt ein Attribut (zB src, href).
- element.getAttribut(name): Ruft den Wert eines Attributs ab.

4. Stile und Klassen bearbeiten
- element.style.property = "value": Ändert CSS Stile direkt (zB el.style.color = 'red').
- element.classList.add('className'): Fügt eine CSS-Klasse hinzu.
- element.classList.remove('className'): Entfernt eine CSS-Klasse.
- element.classList.toggle('className'): Wechselt zwischen Hinzufügen und Entfernen einer Klasse.

  
