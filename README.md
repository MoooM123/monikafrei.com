# Monika Frei – Portfolio

Eine responsive Website für Theaterpädagogik, Vermittlung und Kinderliteratur. Das Projekt ist vollständig statisch: HTML, CSS, JavaScript, optimierte WebP-Bilder und das Original-Konzept als PDF. Keine Installation, kein Build-Schritt und keine externen Schrift- oder Skriptdienste erforderlich.

## Sofort ansehen

`index.html` im Browser öffnen. Navigation, Filter, Bildergalerien und PDF-Links funktionieren auch lokal. Für eine lokale HTTP-Vorschau im Projektordner:

```sh
python3 -m http.server 8000
```

Danach `http://localhost:8000` öffnen. Mit Ctrl+C beenden.

## Auf GitHub Pages veröffentlichen

1. Ein GitHub-Repository anlegen, zum Beispiel `portfolio`.
2. Den **Inhalt dieses Ordners** ins Repository übernehmen. `index.html` muss direkt im Hauptverzeichnis des Repositorys liegen, nicht in einem zusätzlichen Unterordner.
3. Unter **Settings → Pages → Build and deployment** die Quelle **Deploy from a branch** wählen.
4. Den Branch **main** und den Ordner **/(root)** auswählen und speichern.
5. Nach erfolgreicher Bereitstellung zeigt GitHub Pages die Website-Adresse an.

Die Datei `.nojekyll` gehört zum Projekt und verhindert eine unnötige Jekyll-Verarbeitung. Alle internen Links und Assets verwenden relative Pfade; die Website funktioniert deshalb auch unter `https://BENUTZERNAME.github.io/portfolio/`.

Die Dateien wurden lokal vorbereitet; es wurde noch nichts zu GitHub hochgeladen oder veröffentlicht.

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Enthalten

- Startseite mit Projektfilter, Kinderliteratur, Über-mich-Einblick und Kontakt
- 13 Projektseiten mit 50 Bildern in der Leserichtung der Fotoübersicht
- Eigene Seite für «gemeinsam Kompliz:innen» mit drei zusätzlichen Bildern
- PDF-Vorschau und PDF-Download des unveränderten Originaldokuments
- Vollständige Biografie und Projektverzeichnis
- Impressum und technische Datenschutzinformationen
- Tastaturbedienbare Bildergalerie mit Pfeiltasten und Escape
- Mobiles Menü, reduzierte Bewegung entsprechend der Geräteeinstellung

Kontakt: **monikafrei@bluewin.ch**. Bestätigte Jahreszahlen: **Fundbüro 25 – 2025**, **Äggsgüsi – 2024**.

## Inhalte bearbeiten

Die HTML-Dateien lassen sich direkt bearbeiten. Das Erscheinungsbild steht in `assets/style.css`, das Verhalten in `assets/main.js`.

Zusätzlich sind die Erstellungsquellen im Ordner `tools/` enthalten:

- `content.py`: Projekttexte, Jahreszahlen, Biografie und Kategorien
- `image-manifest.json`: Bildzuordnung und Reihenfolge
- `build.py`: gemeinsame Seitenvorlagen und weitere Seitentexte

Optional alle HTML-Seiten aus diesen Quellen neu erzeugen:

```sh
python3 tools/build.py
```

Dabei werden vorhandene HTML-Dateien überschrieben. Deshalb entweder die Quellen bearbeiten und neu erzeugen oder die HTML-Dateien direkt pflegen. CSS, JavaScript, Bilder und PDF werden vom Generator nicht verändert.

## Redaktionelle Entscheidungen

«Text Website» bildet die Inhaltsgrundlage. Doppelte Entwurfsabschnitte wurden zusammengeführt, offensichtliche Tippfehler geglättet und interne Kommentare nicht veröffentlicht. Der Kinderliteratur-Bereich basiert auf den Angaben der Biografie; es wurden keine Buchtitel oder Veröffentlichungen ergänzt.

Die Bildfolge folgt der Fotoübersicht von links nach rechts, danach der nächsten Bildzeile. Für «gemeinsam Kompliz:innen» enthält die Übersicht keine Bildfolge; hier sind die drei bereitgestellten Bildschirmfotos chronologisch nach Dateinamen angeordnet. Bekannte Fotograf:innen sind auf den jeweiligen Projektseiten genannt. Die WebP-Dateien enthalten keine übernommenen EXIF-Daten.

## Projektstruktur

```text
index.html
ueber-mich.html
projektverzeichnis.html
gemeinsam-komplizinnen.html
impressum.html
projekte/                  Projektseiten
assets/style.css           Gestaltung
assets/main.js             Menü, Filter und Bildergalerie
assets/images/             55 optimierte Bilder
assets/downloads/          Konzept-PDF
tools/                     Optionale Erstellungsquellen
.nojekyll
```
