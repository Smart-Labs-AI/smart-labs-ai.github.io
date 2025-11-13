---
title: Datenschutzerklärung für Defense API (DAPI)
product_document_type: "datenschutz"
include_footer: true
sidebar: false
layout: "plain"
---


## 1. Verantwortlicher Anbieter 
Verantwortlicher im Sinne der Datenschutzgesetze für das SaaS-Produkt **Defense API (DAPI)** ist die 

**Smart Labs AI GmbH**

Nordport Towers

Südportal 3 

22848 Norderstedt 

Deutschland 

E-Mail: [<kontakt@smart-labs.ai>]

Vertretungsberechtigte Geschäftsführer: Benjamin Gnahm, Tobias P. Metz, Stefan A. Fenn, Fabian D. Bühler 

**Stand: August 2025**

## 2. Datenschutzbeauftragter
Wir haben einen Datenschutzbeauftragten bestellt: 

**Herr Dr. Uwe Nolte**

E-Mail: [<dsb@smart-labs.ai>]

Bei Fragen zum Datenschutz oder zur Verarbeitung Ihrer personenbezogenen Daten können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden.

## 3. Gegenstand dieser Datenschutzerklärung und Beschreibung des Dienstes 

Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir im Rahmen der Nutzung unseres SaaS-Produkts *Defense API (DAPI)* verarbeiten, zu welchen Zwecken dies geschieht und welche Rechte Ihnen dabei zustehen.  

DAPI ist ein Dienst, der als Proxy zwischen KI-Agenten (Ihrer Anwendung) und großen Sprachmodellen (LLMs) fungiert, um **sensible Wissensextraktion („Knowledge Extraction“) sowie andere Angriffe oder unerwünschtes Verhalten** zu verhindern. Hierfür bietet DAPI verschiedene technische und organisatorische Schutzmechanismen, wie: 

- Filterfunktionen (Überprüfung und Kontrolle von Anfragen und Antworten) 
- Erkennung von Missbrauchsmustern 
- Privacy Checker (in Planung) 
- Prompt Injection Checker (in Planung) 
- LLM as a Judge 
- Weitere Sicherheitsmaßnahmen 

Die jeweils aktuellen und geplanten Schutzmechanismen können der Dokumentation entnommen werden. 

**Wichtig:**

Die Defense API verarbeitet zwar Inhalte, die zwischen Ihrem System und dem LLM ausgetauscht werden, jedoch **werden keine Nutzerdaten dauerhaft gespeichert**. Sämtliche über die API gesendeten Inhalte werden nur temporär zum Zwecke der Prüfung und Weiterleitung genutzt. Es werden lediglich **statistische und anonymisierte Nutzungsdaten** erfasst, um die Stabilität des Dienstes zu überwachen und die Nutzung abzurechnen bzw. zu analysieren. 

## 4. Verarbeitung personenbezogener Daten im Rahmen der DAPI-Nutzung 

### 4.1 Kundenkonto und API-Schlüssel (Keycloak) 
Zur Nutzung der Defense API müssen Kunden ein Benutzerkonto anlegen. Die Verwaltung der Kundenkonten erfolgt über **Keycloak**, das wir in unserer Cloud-Infrastruktur betreiben (gehostet bei Scaleway in Frankreich). 

Bei der Registrierung und Führung des Kontos verarbeiten wir personenbezogene **Kundenstammdaten** wie Name, Unternehmensname (sofern zutreffend), E-Mail-Adresse sowie Zugangsdaten (Benutzername und Passwort). In Keycloak werden zudem die für Ihr Konto generierten **API-Schlüssel** gespeichert. 

Diese Daten verarbeiten wir, um Ihnen den Zugang zu unserem Dienst zu ermöglichen und zu verwalten. 

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen). 

### 4.2 Nutzungsprotokollierung und Monitoring 
Im Rahmen der Nutzung der Defense API fallen **Nutzungsdaten** an. Wir protokollieren diese Daten, um den Dienst bereitzustellen, die Systemleistung zu überwachen und die Nutzung abzurechnen. Zu diesen Nutzungsdaten zählen insbesondere: 

- Anzahl der API-Anfragen 
- Zeitstempel der Anfragen 
- Größe der übermittelten Daten 
- Verbrauchtes Kontingent 

Diese Informationen werden in unserer internen Datenbank gespeichert, die bei **Scaleway** (Frankreich/EU) betrieben wird. Die protokollierten Daten beziehen sich auf Ihren API-Schlüssel bzw. Ihr Kundenkonto, **nicht** auf konkrete Inhaltsdaten der API-Anfragen. Inhalte der API-Kommunikation (Prompts/Antworten) werden nicht gespeichert. 

**Rechtsgrundlage**: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). 

### 4.3 Zahlungsabwicklung (Stripe) 
Für kostenpflichtige Pläne oder verbrauchsabhängige Abrechnung nutzen wir den Zahlungsdienst Stripe. Im Rahmen des Bezahlvorgangs werden – je nach gewählter Zahlungsmethode – personenbezogene Daten wie Name, Rechnungsadresse, E-Mail-Adresse sowie Zahlungsinformationen erhoben und direkt an Stripe übermittelt. 

**Verbrauchsdaten:** 

Zur Durchführung der verbrauchsabhängigen Abrechnung werden die entsprechenden Nutzungs- und Verbrauchsdaten (z.B. Anzahl der API-Aufrufe, genutztes Kontingent) an Stripe übermittelt. Stripe verwendet diese Daten ausschließlich zur Erstellung der Abrechnung und zur Zahlungsabwicklung. 

Stripe ist ein US-amerikanischer Dienstleister; für Kunden im EWR erfolgt die Zahlungsabwicklung in der Regel über Stripe Payments Europe Ltd. in Irland. Weitere Informationen finden Sie in der [Datenschutzerklärung von Stripe](https://stripe.com/de/privacy). 

**Rechtsgrundlage**: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). 

*Hinweis*: Stripe kann Daten in den USA verarbeiten. Wir haben mit Stripe Standardvertragsklauseln abgeschlossen, um ein angemessenes Datenschutzniveau zu gewährleisten. 

### 4.4 Speicherdauer 

Ihre personenbezogenen Daten werden nur so lange gespeichert, wie dies für die Erfüllung der vertraglichen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Nach Wegfall des Zwecks oder Ablauf der gesetzlichen Aufbewahrungsfristen werden Ihre Daten gelöscht. 

## 5. Einsatz von Drittanbietern und Open-Source-Technologien 

Zur Bereitstellung unseres Dienstes verwenden wir verschiedene Open-Source-Komponenten und technische Tools, die ausschließlich auf unseren eigenen Servern oder unter unserer Kontrolle betrieben werden. Dazu gehören: 

- Kubernetes (Container-Orchestrierung), 
- Docker (Container-Virtualisierung), 
- Python, PyTorch, Rust (Softwareentwicklung), 
- Grafana (Monitoring und Visualisierung), 
- Postgres (Monitoring). 

Einige Kunden nutzen LLMs, die in Deutschland gehostet werden. Wenn Sie externe KI-Dienste außerhalb der EU anbinden, erfolgt diese Datenübermittlung **in Ihrer eigenen Verantwortung** als Kunde. 

## 6. Internationale Datenübermittlungen
Wir verarbeiten Ihre Daten grundsätzlich **innerhalb der EU/des EWR**. 

Datenübermittlungen in Drittländer können stattfinden, wenn: 

- Sie Stripe für die Zahlungsabwicklung nutzen (Datenübermittlung an Stripe, USA). 

Für die genannten Übermittlungen wurden entsprechende **Standardvertragsklauseln** abgeschlossen. 

**Scaleway** (Frankreich/EU) ist unser primärer Hosting-Anbieter für ERPNext und weitere Dienste; es erfolgt hier **keine Übermittlung in Drittländer**.

## 7. Rechte der betroffenen Personen 

Sie haben gemäß DSGVO folgende Rechte: 

- **Recht auf Auskunft** (Art. 15 DSGVO), 
- **Recht auf Berichtigun**g (Art. 16 DSGVO), 
- **Recht auf Löschun**g (Art. 17 DSGVO), 
- **Recht auf Einschränkung der Verarbeitun**g (Art. 18 DSGVO), 
- **Recht auf Datenübertragbarkeit** (Art. 20 DSGVO), 
- **Recht auf Widerspruch** (Art. 21 DSGVO). 

Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen. 

Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). 

Zur Ausübung Ihrer Rechte oder bei Fragen zur Datenverarbeitung können Sie uns schriftlich oder per E-Mail kontaktieren (siehe oben) oder sich direkt an den Datenschutzbeauftragten wenden: [<dsb@smart-labs.ai>].

## 8. Datensicherheit 
Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. Die Kommunikation mit der Defense API erfolgt verschlüsselt (HTTPS/TLS). Interne Daten sind nur autorisierten Personen zugänglich. 

## 9. Änderungen dieser Datenschutzerklärung 
Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte rechtliche oder tatsächliche Verhältnisse anzupassen. Die jeweils aktuelle Version finden Sie auf unserer Webseite. Bei wesentlichen Änderungen informieren wir Sie in geeigneter Weise. 