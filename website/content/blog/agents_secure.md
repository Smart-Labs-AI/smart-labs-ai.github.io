---
title: "Sind KI-Agenten sicher?"
date: 2025-02-01
layout: "blog"
image: "/blog/images/agents_secure.jpg"
summary: "LLMs und KI-Agenten sind anfällig für Manipulationen, weshalb robuste Sicherheitsmaßnahmen, kontinuierliche Überwachung und die Einhaltung neuer regulatorischer Anforderungen wie dem EU AI Act entscheidend sind."
include_footer: true
sidebar: true
---

Große Sprachmodelle (LLMs) sind nicht von Natur aus sicher. Die von ihnen ausgehenden Risiken beschränken sich nicht nur auf Halluzinationen oder fehlerhafte Ausgaben – LLMs können manipuliert werden. Traditionelle Sicherheitsmaßnahmen wie Inhaltsfilterung und Zugriffskontrolle haben sich als nicht robust genug erwiesen, um Angriffe zu verhindern. Beispielsweise können „Jailbreak“-Techniken genutzt werden, um Einschränkungen zu umgehen und ein LLM dazu zu bringen, Aktionen auszuführen, die es eigentlich vermeiden sollte.

Doch was passiert, wenn ein LLM mit einem KI-Agenten verbunden wird, der über die reine Textgenerierung hinaus Aufgaben ausführen kann – wie das Versenden von E-Mails, das Ausführen von Code oder das Bearbeiten von Dokumenten? Dies führt zu einer völlig neuen Dimension von Sicherheitsbedenken. Wenn das zugrunde liegende Modell selbst verwundbar ist, wie kann dann ein darauf aufbauender KI-Agent sicher sein?

## Untersuchung der Sicherheit von KI-Agenten
Die Herausforderung bei der Sicherung von KI-Agenten besteht darin, unbefugte oder unbeabsichtigte Aktionen zu verhindern. Ein herausragendes Beispiel für dieses Problem zeigt sich in der aktuellen Sicherheitsforschung zur KI-gesteuerten Aufgabenausführung. Insbesondere konzentrieren sich aktuelle Angriffe darauf, ob ein KI-Agent dazu gebracht werden kann, Aufgaben auszuführen, für die er nie vorgesehen war.

Ein Beispiel hierfür ist der Wettbewerb „Adaptive Prompt Injection: LLMail Inject“, der die Risiken einer unbefugten E-Mail-Komposition und -Übertragung aufzeigt. In diesem Szenario wird untersucht, ob ein Angreifer subtil Einfluss auf einen KI-Agenten nehmen kann, sodass dieser eine E-Mail mit bestimmten Inhalten versendet – obwohl der Benutzer lediglich eine Zusammenfassung angefordert hat. Solche Sicherheitslücken verdeutlichen die Notwendigkeit robuster Abwehrmaßnahmen.

## Abwehrmechanismen in modernen KI-Systemen
Um diese Risiken zu minimieren, wurden mehrere Sicherheitsschichten vorgeschlagen und implementiert, darunter:

- **LLM-Judges:** Mechanismen, die Ausgaben auf Richtlinienverstöße prüfen, bevor sie ausgeführt werden.
- **Task-Drift-Überwachung:** Systeme, die erkennen, wenn ein KI-Agent von seiner vorgesehenen Funktion abweicht.
- **Prompt Shields:** Techniken zur Bereinigung und Filterung von Eingabeaufforderungen, um manipulative Angriffe zu verhindern.
- **Spotlighting und Instruktionshierarchie:** Strategien, die strukturierte und kontextbewusste Interaktionen erzwingen, um potenzielle Angriffe zu begrenzen.

Diese Methoden werden in cloudbasierten Umgebungen wie Azure AI eingesetzt, können jedoch auch in On-Premises-Lösungen unter Verwendung von Open-Source-Technologien implementiert werden. Dennoch bietet keine dieser Ansätze einen vollständigen Schutz, sodass kontinuierliche Bewertung und Verbesserung entscheidend sind.

## Compliance und zukünftige Auswirkungen
Ab August 2025 wird der EU AI Act die Implementierung modernster Sicherheitsmaßnahmen für allgemeine KI-Systeme, einschließlich LLMs, vorschreiben. Diese Regulierung unterstreicht die Dringlichkeit, KI-Agenten gegen neue Bedrohungen abzusichern.

Angesichts dieser Entwicklungen müssen Unternehmen und Forschende ihre KI-gestützten Workflows gründlich evaluieren, um festzustellen, ob ihre Agenten wirklich sicher sind. Die entscheidende Frage bleibt: **Ist Ihr KI-Agent wirklich sicher?** Die Antwort erfordert kontinuierliches Testen, Überwachen und Anpassen von Sicherheitsmaßnahmen, um sich gegen sich entwickelnde Bedrohungen zu wappnen.
