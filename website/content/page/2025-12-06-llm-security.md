---
title: "Wie schützen Sie Ihr Unternehmen vor LLM-getriebenem Social Engineering und Shadow AI?"
date: 2025-12-06
layout: "page"
image: "page/images/2025-12-06-llm-security/hero.jpg"
summary: "LLM-Sicherheit, Prompt Injection und Shadow AI sind heute zentrale Risiken für Daten, Prozesse und Reputation. Dieses Whitepaper erklärt anhand realer Vorfälle und aktueller Forschung, warum klassische Cybersecurity-Konzepte nicht ausreichen, welche technischen und organisatorischen Maßnahmen State of the Art sind und wie ein pragmatisches Control Framework LLM- und Agenten-Nutzung in DACH-Unternehmen sicher macht. Zielgruppe: CIOs, CISOs und Innovationsmanager:innen."
include_footer: true
sidebar: true
categories: ["AI Sicherheit"]
---

{{< page-section >}}

{{< page-content >}}
# Warum ist LLM-getriebenes Social Engineering heute Ihre gefährlichste blinde Stelle? (Teil 1)

Stellen Sie sich einen Montagmorgen vor: Die Finanzchefin bittet den Copilot um eine Zusammenfassung wichtiger Mails zum M&A-Deal. Sekunden später fließen hochsensible Informationen über einen versteckten Bildlink an einen externen Server – ausgelöst durch eine präparierte E‑Mail.

Dieses Zero‑Click-Szenario wurde in der EchoLeak‑Analyse für Microsoft 365 Copilot beschrieben [1]. Dort zeigt sich, wie indirekte Prompt Injection E‑Mails, Dateien und Plugins kombinieren können, sodass ein Assistent seine Vertrauensgrenzen überschreitet.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Fokus dieser Einführung
> - Kurzes, greifbares Szenario mit einem kompromittierten Copilot.
> - EchoLeak als praktisches Beispiel für Zero‑Click Prompt Injection [1].
> - Ziel: Aufmerksamkeit für das Risiko, das aus der Interaktion von LLM, Daten und Aktionen entsteht.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Warum ist LLM-getriebenes Social Engineering heute Ihre gefährlichste blinde Stelle? (Teil 2)

Forschende weisen seit 2023 darauf hin, dass indirekte Prompt Injections—versteckte Anweisungen in Dokumenten, Webseiten oder Mails—LLM‑integrierte Anwendungen systematisch kompromittieren können [2]. OWASP führt Prompt Injection inzwischen als Top‑Risiko für LLM‑Anwendungen [3].

Parallel professionalisieren sich AI‑gestützte Social‑Engineering‑Kampagnen: mehrsprachige Phishing‑Mails, synthetische Stimmen und gefälschte Chats. Angreifer zielen direkt auf Ihre Assistenten und Automatisierungs‑Workflows.
{{< /page-content >}}

{{< page-outline >}}
> 💡 Kernaussage
> - Treat every externe Eingabe als potenziell feindlich.
> - LLMs verschieben Social Engineering weg vom Menschen hin zu KI‑Assistenten.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Warum reichen klassische Cybersecurity‑Konzepte für LLM‑Anwendungen nicht mehr aus? (Teil 1)

Traditionelle Architekturen trennen Zonen mit Firewalls, regeln Zugriffe über IAM und filtern E‑Mails. Moderne LLM‑Assistenten brechen diese Trennungen auf: Sie sind Übersetzer, Orchestrator und Interface zu internen und externen Quellen zugleich. Prompt Injection nutzt diese Vermischung aus, weil LLMs Inhalte und Anweisungen oft nicht sauber trennen [2][3].
{{< /page-content >}}

{{< page-outline >}}
✓ Dos & ✗ Don'ts

✓ Dos & ✗ Don'ts
- ✓ Erkläre, warum LLMs eine andere Sicherheitslogik benötigen als Web oder Mobile.
- ✓ Mache Prompt Injection für Entscheider:innen verständlich.
- ✗ Verliere dich nicht in Modellarchitektur‑Details.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Warum reichen klassische Cybersecurity‑Konzepte für LLM‑Anwendungen nicht mehr aus? (Teil 2)

Ein weiterer Treiber ist Shadow AI: Fachbereiche rollen PoCs ohne Security, Legal oder Compliance aus. So entstehen produktive LLM‑Workflows ohne Risikoanalyse, Trust Boundaries oder klare Policies — eine ideale Angriffsfläche für Social Engineering und Datenabfluss.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Governance‑Problem
> - Shadow AI entsteht meist durch Innovationsdruck in Fachbereichen.
> - Sicherheits‑ und Compliance‑Teams werden oft zu spät eingebunden.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Reale Bedrohungslandschaft für LLM‑Sicherheit und AI‑Agenten: Prompt Injection

Prompt Injection und Kontextmanipulation sind zentrale Gefahren: Versteckte Anweisungen in Webseiten oder Dokumenten können Antworten manipulieren, Daten abfließen lassen oder Aktionen auslösen. Forschungsarbeiten zeigen diese Angriffe bereits seit 2023 in Prototypen und realen Umgebungen [2][1].
{{< /page-content >}}

{{< page-outline >}}
> 💡 Kernelemente
> - Prompt Injection zielt auf die Schnittstelle Modell↔Daten↔Aktionen.
> - EchoLeak demonstriert Zero‑Click‑Risiken in Enterprise‑Systemen [1].
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Reale Bedrohungslandschaft: Beispiele aus Forschung und Praxis

Praxisfälle belegen die Risiken: Blue41 dokumentiert, wie Markenchatbots per Prompt Injection zu falschen Preisen, beleidigenden Antworten oder fehlerhaften AGB‑Angaben verleitet wurden [5]. Solche Vorfälle können rechtliche und finanzielle Folgen haben.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Praxisbeispiel
> - Blue41 beschreibt reale Prompt‑Injection‑Vorfälle an Kundenchatbots [5].
> - Konsequenz: Schäden für Reputation, Recht und Finanzen.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Reale Bedrohungslandschaft: Modell‑Schwachstellen

Wiederholte Token‑Sequenzen und spezialisierte Eingaben bringen generative Modelle in Divergenzmodi, in denen sie memorisierte Trainingsdaten wiedergeben. Dropbox dokumentiert solche Effekte und stellt Code‑Beispiele und Analysen bereit [6][7].
{{< /page-content >}}

{{< page-outline >}}
> 💡 Hinweis
> - Modell‑Verhalten kann zu unbeabsichtigten Datenleaks führen.
> - Tests und Fuzzing sind notwendig, um solche Schwachstellen zu finden.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Reale Bedrohungslandschaft: AI‑gestütztes Social Engineering

LLMs senken Hürden für glaubwürdige Phishing‑Kampagnen, CEO‑Fraud und Business‑Email‑Compromise. Angriffe kombinieren generierte Texte mit Deepfakes oder gefälschten Dialogen, um Freigaben oder Zahlungen zu erzwingen. Die Angriffsökonomie verändert sich dadurch grundlegend.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Trend
> - Automatisierung reduziert Kosten und erhöht Skalierbarkeit von Social‑Engineering‑Kampagnen.
> - Schutzmaßnahmen müssen Mensch, Prozess und Technik kombinieren.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Welche typischen Fehler befeuern Shadow AI und unsichere LLM‑Nutzung? (Teil 1)

In DACH‑Unternehmen wiederholen sich typische Muster:

- LLMs wie „bessere Suche“ behandeln und sensible Dokumente ungefiltert nutzen.
- Keine Trennung zwischen vertrauenswürdigen und untrusted Quellen in RAG‑Pipelines.
- PoCs ohne Logging, Rollenmodelle oder Red Teaming unternehmensweit ausrollen.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Typische Muster
> - Fehlende Datenklassifikation und Maskierung.
> - RAG‑Pipelines, die interne und externe Quellen mischen.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Welche typischen Fehler befeuern Shadow AI und unsichere LLM‑Nutzung? (Teil 2)

Weitere Fehler:

- Shadow AI: Mitarbeitende nutzen private Accounts oder Self‑Hosted Modelle ohne zentrale Kontrollmechanismen.
- Unrealistische Erwartungen an System Prompts und „sichere“ Modellvarianten. Reale Angriffe belegen deren Grenzen [5][1].
{{< /page-content >}}

{{< page-outline >}}
> 💡 Wirkung
> - Diese Muster erlauben LLMs den Zugriff auf kritische Prozesse ohne systematische Risikoanalyse.
> - Ergebnis: erhöhte Gefahr für Datenverlust und Compliance‑Brüche.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Rahmenwerke und Standards für sichere LLM‑Architekturen (Teil 1)

Vorhandene Frameworks bieten Orientierung:

- OWASP LLM‑Top‑Risiken als technische Checkliste [3].
- NIST AI Risk Management Framework für Governance, Datenqualität und Monitoring; in EchoLeak‑Analysen wird NIST zur Bewertung herangezogen [1].
{{< /page-content >}}

{{< page-outline >}}
> 💡 Praktische Nutzung
> - OWASP als technische Mindestbasis.
> - NIST verbindet Cybersecurity, Datenschutz und Geschäftsrisiken.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Rahmenwerke und Standards für sichere LLM‑Architekturen (Teil 2)

Weitere Hinweise:

- Branchenempfehlungen (z. B. Globant) raten, Trust Boundaries und Missbrauchspfade explizit zu modellieren [8].
- EU AI Act verlangt für Hochrisiko‑AI Dokumentation, Transparenz und Security by Design. Frühe Investitionen reduzieren späteren Compliance‑Aufwand.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Umsetzungstipp
> - Integrieren Sie Anforderungen des EU AI Act in Ihr ISMS.
> - Nutzen Sie Branchen‑Guidance als konkrete Architektur‑Checkliste [8].
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Technische Schutzmaßnahmen gegen Prompt Injection und Datenabfluss (Teil 1)

Erfolgreiche Ansätze folgen dem Prinzip Defense‑in‑Depth. Wichtige technische Patterns:

- Prompt Partitioning: System Prompt, Nutzeranfrage und externe Inhalte streng trennen.
- Provenance‑basiertes Retrieval: Quellen nach Sensitivität und Freigabe filtern.
- Input/Output‑Filter: Heuristiken und modellgestützte Detection stoppen typische Injection‑Muster [6][7].
{{< /page-content >}}

{{< page-outline >}}
✓ Dos & ✗ Don'ts

✓ Dos & ✗ Don'ts
- ✓ Betone Defense in Depth.
- ✓ Nenne konkrete Patterns, die Architekt:innen nutzen können.
- ✗ Versprich nicht, Prompt Injection vollständig zu eliminieren.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Technische Schutzmaßnahmen gegen Prompt Injection und Datenabfluss (Teil 2)

Weitere Maßnahmen:

- Strikte Content‑Security‑Policies und Egress‑Kontrolle; Render‑Oberflächen dürfen keine externen Skripte laden.
- Red Teaming und automatisiertes Fuzzing (Tools wie Garak, Hou Yi, PromptMap) identifizieren Schwachstellen vor dem Produktiveinsatz [8][6].
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Technik‑Fokus
> - Kontrollieren Sie ausgehende Verbindungen zentral über Proxies und Allowlists.
> - Automatisierte Tests sollten Teil der CI/CD‑Pipelines sein.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Smart AI Sparks Control Framework: Zielbild für DACH Unternehmen

Ein pragmatisches Control Framework umfasst:

- Zentrales AI Control Plane für alle LLM‑Zugriffe mit Logging und Policy‑Enforcement.
- Kontext‑Aware Policies statt pauschaler Verbote: Datenklassen, RAG‑Quellen und Agenten‑Befugnisse definieren.
- Security by Design, Self‑Service Kataloge und kontinuierliches Adversarial Testing.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Zielbild
> - Sicherheit, Governance und Innovation in einer gemeinsamen Schicht.
> - Shadow AI wird reduziert, weil sichere, attraktive Alternativen bereitstehen.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Welche nächsten Schritte sollten Sie als CIO oder CISO morgen einleiten? (Roadmap 90 Tage — Teil 1)

1. Ist‑Aufnahme: Inventar aller sichtbaren und vermuteten LLM‑Nutzungen (Copilots, Chatbots, PoCs, Plugins).

2. Schnellcheck: Grobe Bewertung Ihrer Top‑3 AI‑Use‑Cases gegen OWASP und NIST‑Kriterien [3][1].

3. AI Governance Board: Kleines, handlungsfähiges Gremium aus IT, Security, Legal und Fachbereichen bilden.
{{< /page-content >}}

{{< page-outline >}}
> 💡 Aktionsfokus
> - Beginnen Sie mit Inventar und Schnellcheck.
> - Setzen Sie ein kleines Governance‑Board für schnelle Entscheidungen.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Welche nächsten Schritte sollten Sie als CIO oder CISO morgen einleiten? (Roadmap 90 Tage — Teil 2)

4. Pilot AI Gateway: Starten Sie ein Pilotprojekt mit zentralem Gateway, Logging, Policy‑Enforcement und Basisschutz.

5. Sensibilisierung: Ergänzen Sie Security Awareness um AI‑Social‑Engineering‑Szenarien und messen Sie Wirkung.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Erwarteter Nutzen
> - Schnelle Risikominderung für priorisierte Use‑Cases.
> - Grundlage schaffen, um LLMs sicher in kritische Prozesse zu integrieren.
{{< /page-outline >}}

{{< /page-section >}}
{{< page-cta image="page/images/cta.png" alt="Jetzt starten" button-text="Jetzt unverbindlich anfragen" button-link="/contact" >}}
Jetzt starten: Bündeln Sie Ihre LLM‑Initiativen unter einem gemeinsamen Sicherheits‑ und Governance‑Dach.

- Benennen Sie eine verantwortliche Person für "AI Sicherheit und Governance" mit direkter Berichtslinie an CIO oder CISO.
- Initiieren Sie einen 2–3‑stündigen Workshop mit IT, Security, Legal und zwei Fachbereichen, um die 90‑Tage‑Roadmap anzupassen.
- Priorisieren Sie zwei LLM‑Use‑Cases für einen ersten Pilot mit AI‑Gateway, Prompt‑Injection‑Schutz und Monitoring.
- Vereinbaren Sie Messgrößen: reduzierte Shadow AI, Anzahl durchlaufener Architektur‑Reviews, Zeit bis zur sicheren Produktivsetzung.
{{< /page-cta >}}
{{< page-section >}}

{{< page-content >}}
## Quellen

1. [EchoLeak 2025 – Zero‑click prompt injection in Microsoft 365 Copilot](https://arxiv.org/html/2509.10540v1/)  
2. [Greshake et al. 2023 – Indirect Prompt Injection Paper](https://www.arxiv.org/abs/2302.12173?context=cs.AI)  
3. [OWASP – LLM Risks and Guidance](https://en.wikipedia.org/wiki/Jailbreaking_(AI))  
4. [TechTarget 2024 – Zenity CTO on Copilot prompt injections](https://www.techtarget.com/searchsecurity/news/366602358/Zenity-CTO-on-dangers-of-Microsoft-Copilot-prompt-injections)  
5. [Blue41 2024 – Real world attacks on LLM applications](https://blue41.cs.kuleuven.be/blog/real-world-attacks-on-llm-applications/)  
6. [Dropbox 2024 – Token attack analysis on ChatGPT models](https://dropbox.tech/machine-learning/bye-bye-bye-evolution-of-repeated-token-attacks-on-chatgpt-models)  
7. [Dropbox GitHub – llm security Repository](https://github.com/dropbox/llm-security)  
8. [Globant 2024 – Securing LLMs against prompt injection](https://stayrelevant.globant.com/en/technology/cybersecurity/prompt-injection-explained/)
{{< /page-content >}}

{{< page-outline image="page/images/references.png" >}}

{{< /page-outline >}}

{{< /page-section >}}