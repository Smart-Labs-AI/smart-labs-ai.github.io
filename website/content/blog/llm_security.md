---
title: "Gefährliche KI-Modelle entdeckt"
date: 2025-02-10
layout: "blog"
image: "images/llm_security.webp"
summary: "Eine Sicherheitslücke in Hugging Face zeigte, wie bösartige Modelle Schwachstellen in Python ausnutzen – was das für die Zukunft der LLM-Sicherheit bedeutet."
---


Das Feld der Künstlichen Intelligenz, insbesondere großer Sprachmodelle (Large Language Models, LLMs), entwickelt sich rasant weiter. Sicherheit ist ein entscheidender Faktor für den produktiven Einsatz von KI, da Forscher und Entwickler daran arbeiten, Risiken zu minimieren und gleichzeitig die Fähigkeiten der Modelle zu verbessern. Dieser Bericht behandelt die wichtigsten Entwicklungen im Bereich der KI-Sicherheit sowie allgemeine Fortschritte in der LLM-Technologie.

## Constitutional Classifiers

Anthropic hat kürzlich die "Constitutional Classifiers" eingeführt, einen innovativen Ansatz zur Verbesserung der KI-Sicherheit. Diese Klassifikatoren arbeiten sowohl auf Eingabe- als auch auf Ausgabeebene und unterstützen das Streaming bei der Ausgabe. Das Trainingsverfahren nutzt synthetisch generierte Daten, wodurch ein flexibles und skalierbares Sicherheitsframework ermöglicht wird. Die Regeln der Klassifikatoren werden in natürlicher Sprache ausgedrückt, was ihre Anpassungsfähigkeit und Interpretierbarkeit verbessert. Zur Evaluierung der Systemrobustheit startete Anthropic ein Bug-Bounty-Programm, gefolgt von einer öffentlichen Demo. Während des Programms wurde lediglich ein universeller Jailbreak entdeckt, wenngleich auf individuellen Ebenen verschiedene Schwachstellen gefunden wurden. Ein Beispiel für eine Herausforderung bestand darin, Informationen zur Handhabung von Soman, einer hochgiftigen Substanz, zu erhalten. Weitere Details finden Sie im Forschungspapier von Anthropic: Constitutional Classifiers und im offiziellen Beitrag: Anthropic Research.

## Schadhafte Open-Source-Modelle auf Hugging Face

Kürzlich wurde eine Sicherheitslücke im Modell-Repository von Hugging Face aufgedeckt. Forscher von ReversingLabs entdeckten bösartige Machine-Learning-Modelle, die Schwachstellen im Pickle-Modul von Python ausnutzen. Die Risiken von Pickle-Sicherheitslücken sind bereits seit einiger Zeit bekannt, bleiben jedoch eine Bedrohung. Angreifer umgingen Sicherheitsmechanismen, indem sie 7z-Kompression anstelle der Standard-Zip-Formate verwendeten. Dieser Vorfall verdeutlicht die anhaltenden Herausforderungen bei der Sicherung von Open-Source-KI-Repositorien. Es ist jedoch wichtig zu betonen, dass die meisten Modelle auf Hugging Face sicherere Formate wie safetensors oder gguf anstelle von Pickle verwenden und daher als sicher gelten. Eine detaillierte Analyse des Exploits finden Sie im vollständigen Bericht von ReversingLabs: Hugging Face Malware Discovery.

## Weitere KI-Entwicklungen

Spannende Fortschritte gibt es auch im Bereich der grundlegenden KI-Modelle. Berichten zufolge arbeitet OpenAI an GPT-4.5, das intern den Codenamen "Onion" trägt. Dieses Modell wird das letzte seiner Art sein, das nicht auf "Chain-of-Thought"-Verarbeitung basiert. Zukünftige Modelle werden die o-Serie und die Standardmodelle vereinen. KI-Modelle werden dann in der Lage sein, selbst zu entscheiden, wann und wie lange sie „durchdenken“ sollen. Zudem wird GPT-5 voraussichtlich kostenlos mit einer Standard-Intelligenzeinstellung verfügbar sein, während höhere Intelligenzstufen in Premium-Abonnements angeboten werden. Lesen Sie die vollständige Ankündigung von Sam Altman.

## Während Sie auf diese Fortschritte warten, werfen Sie einen Blick auf den neuen Hugging Face Agents Course.

Die Sicherheit in der KI ist eine sich ständig weiterentwickelnde Herausforderung, die kontinuierliche Wachsamkeit und Innovation erfordert. Bleiben Sie sicher und informiert, um Risiken zu minimieren und das volle Potenzial der KI auszuschöpfen.
