---
title: "Vertrauen unter Strom: LLM-Sicherheit und Shadow-IT im Zeitalter autonomer KI-Agenten"
date: 2025-12-02
layout: "page"
image: "page/images/2025-12-02-llm-sicherheit-agenten-shadow-it/hero.jpg"
summary: "Die zunehmende Nutzung von LLMs und autonomen Agenten katapultiert Unternehmen 2025 an eine neue Schwelle: Mehr Innovation, aber auch mehr Risiken. Dieses Whitepaper deckt die wichtigsten Schwachstellen und Shadow-IT-Gefahren systematisch auf und bietet konkrete Schutzmaßnahmen, Handlungsrichtlinien und praxiserprobte Fallbeispiele für IT-Verantwortliche."
include_footer: true
sidebar: true
categories: ["AI Sicherheit"]
---

{{< page-section >}}

{{< page-content >}}
# Kollektiver KI-Nervenkitzel: Risiken, die in der Luft liegen

Im Spannungsfeld zwischen Chance und Risiko erleben Unternehmen mit dem Einsatz von LLMs eine innovative, dynamische, aber auch äußerst herausfordernde Ära. Jenseits etablierter IT-Grenzen betreten Organisationen Neuland – voller Potenziale, aber auch versteckter Gefahren.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Einstieg in das Whitepaper mit Fokus auf die neuen Dynamiken und Unsicherheiten rund um den KI-Einsatz in Unternehmen.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Was haben wir übersehen? Die Komfortfalle der alten IT-Welt

Warum wurden zentrale Risiken und Schwachstellen trotz jahrelanger technischer Entwicklung übersehen? Innovationsdruck, unbekannte Tools und unbeachtete Shadow-IT haben Angriffsflächen geschaffen. Heute treten Compliance-Lücken, Datenleaks und prompt-injizierte Angriffe offen zutage.
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Kritische Reflexion über systemische Denkfehler und unbeachtete Risiken bei der Implementierung von LLMs und Shadow-IT.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Der Reality-Check: Typische Risiken, blinde Flecken und wachsende Angriffsflächen

- **Prompt Injection & Output Handling**: Angreifer manipulieren LLMs durch gezielte Prompts oder über Schnittstellen (z. B. Kalender- oder E-Mail-Anbindungen).
- **Shadow-AI & Schatten-IT**: Mitarbeitende nutzen nicht autorisierte LLM-Tools, wodurch sensible Daten unkontrolliert abfließen können.
- **Supply Chain & Open Source**: Angriffe auf LLM-Lieferketten, unsichere Bibliotheken, kompromittierte Plugins erhöhen die Unsichtbarkeit der Risiken.

**Studien**: 73% der Unternehmen verzeichnen mindestens eine KI-bezogene Sicherheitsverletzung, davon sind 41% prompt injection-basiert.[1][2][3]
{{< /page-content >}}

{{< page-outline >}}
**Dos & ✗ Don'ts**
- ✓ Schatten-IT und KI-Inventar aktiv überwachen
- ✓ Red-Teaming und Adversarial Testing umsetzen
- ✗ Ungeprüfte Open-Source-Modelle einsetzen
- ✗ KI-Ausgaben automatisiert ohne Qualitätssicherung nutzen
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Shadow-IT und „Agenten-Wildwuchs“: Das unterschätzte Risiko im LLM-Alltag

Immer mehr Problemlösungen mit KI erfolgen an der IT vorbei: Apps wie ChatGPT und Copilot werden eigenmächtig genutzt. Hauptrisiken sind:
- Unkontrollierter Datenabfluss durch inoffizielle APIs
- Compliance-Verstöße („Bring Your Own AI“)
- Fehlsteuerung durch Halluzinationen und toxische Ausgaben

Empfohlene Maßnahmen:
- KI-Nutzungsinventare erstellen
- IAM-Richtlinien anpassen
- AI-Governance und regelmäßige Zugriffs-Audits etablieren [3][4][10]
{{< /page-content >}}

{{< page-outline >}}
> 💡 Tipp: Eigene KI-Discovery-Tools einsetzen und Shadow-AI systematisch auditieren. Security Champions in jeder Abteilung fördern.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# OWASP LLM Top 10: Das neue Standardwerk für KI-Risiko-Management

Der OWASP Top-10-Katalog setzt 2025 neue Standards für LLM-Sicherheit:
1. Prompt Injection
2. Sensitive Information Disclosure
3. Supply Chain
4. Data & Model Poisoning
5. Improper Output Handling
6. Excessive Agency
7. System Prompt Leakage
8. Vector/Embedding Weaknesses
9. Misinformation
10. Unbounded Consumption

Jede Kategorie erfordert spezifische Gegenmaßnahmen wie RLHF, Input-/Output-Filter oder Audit-Trails.[7][9]
{{< /page-content >}}

{{< page-outline >}}
**Dos & ✗ Don'ts**
- ✓ OWASP-Top-10-Checklisten heranziehen
- ✓ Model-Monitoring & Incident-Response verankern
- ✗ Nur die LLM-API schützen, ohne Infrastrukturblick
- ✗ Fehlende Dokumentation von Sicherheitsmaßnahmen
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Leitplanken statt Bremsklötze: Guidance und Orientierungsmodelle für 2025

Unternehmen profitieren von mehrschichtigen Schutzmechanismen:
- **Layered Defense**: Monitoring, Red-Teaming, Quality Gates
- **RAG- & Plugin-Schutz**: API-Gateways, Schutz sensibler Vektorbanken
- **AI-Governance**: Transparenz, regelmäßige Audits, Zugriffsmanagement
Neue Tools ermöglichen die gezielte Aufdeckung von Schatten-LLMs und das Schließen von Compliance-Lücken – wenn Technik, Governance und Kultur Hand in Hand arbeiten.[4][6][10]
{{< /page-content >}}

{{< page-outline >}}
> 💡 Layered Defense: Mehrstufige Schutzmechanismen und regelmäßige Red-Teaming-Szenarien kombinieren.
{{< /page-outline >}}

{{< /page-section >}}

{{< page-section >}}

{{< page-content >}}
# Sicherheit als Innovationsbeschleuniger – Vertrauen Sie dem Neuen!

Sichere und transparente KI-Umgebungen beschleunigen Innovationen. Wer heute in Security by Design investiert, fördert nicht nur Effizienz, sondern auch Kundenschutz und Vertrauen. Starten Sie jetzt den Wandel!
{{< /page-content >}}

{{< page-outline >}}
> ℹ️ Abschluss: Stärkt Zuversicht, Eigenverantwortung und den Aufbruch zur sicheren KI-Nutzung.
{{< /page-outline >}}

{{< /page-section >}}
{{< page-cta image="page/images/cta.png" alt="Jetzt starten" button-text="Jetzt unverbindlich anfragen" button-link="/contact" >}}
**Jetzt handeln:**
- Führen Sie ein KI- und Shadow-AI-Inventar ein.
- Implementieren Sie eine cross-funktionale AI-Governance.
- Richten Sie Incident-Response und Red-Teaming für KI ein.
- Holen Sie sich Unterstützung von erfahrenen KI-Security-Teams.

_Unser Team hilft Ihnen bei der sicheren Umsetzung von KI-Projekten – vom Discovery bis zum Risiko-Assessment. Kontaktieren Sie uns für ein unverbindliches Erstgespräch._
{{< /page-cta >}}
{{< page-section >}}

{{< page-content >}}
## Quellen

1. [LLM Security 101: Protecting Large Language Models from Cyber Threats – Qualys](https://blog.qualys.com/product-tech/2025/02/07/llm-security-101-protecting-large-language-models-from-cyber-threats)  
2. [LLM Security: Best Practices, Risks & Solutions – Deepchecks](https://www.deepchecks.com/llm-security-best-practices-risks-solutions/)  
3. [How LLMs can be compromised in 2025 – Kaspersky](https://www.kaspersky.com/blog/new-llm-attack-vectors-2025/54323/)  
4. [The Rise of Shadow AI: Auditing Unauthorized AI Tools in the Enterprise – ISACA](https://www.isaca.org/resources/news-and-trends/industry-news/2025/the-rise-of-shadow-ai-auditing-unauthorized-ai-tools-in-the-enterprise)  
5. [OWASP Top 10 for LLMs 2025: Key Risks and Mitigation Strategies – Invicti](https://www.invicti.com/blog/web-security/owasp-top-10-risks-llm-security-2025/)  
6. [Key security trends for CISOs in 2025 – GitLab](https://about.gitlab.com/the-source/security/key-security-trends-for-cisos-in-2025/)  
7. [Open Source — Latest AI Security News – The Hacker News](https://thehackernews.com/search/label/Open%20Source?m=1&hl=ru)  
8. [Whitepaper: LLM-Sicherheit und Shadow-IT 2025](https://smart-labs.ai/page/2025-12-02-llm-sicherheit-agenten-shadow-it)
{{< /page-content >}}

{{< page-outline image="page/images/references.png" >}}

{{< /page-outline >}}

{{< /page-section >}}