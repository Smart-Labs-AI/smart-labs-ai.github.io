---
title: "Leistungsbeschreibung: Defense API (DAPI)"
product_document_type: "leistungsbeschreibung"
include_footer: true
sidebar: false
---

**Stand: August 2025**

## 1. Produktüberblick 

**DAPI (Defense API)** ist ein Sicherheits-Proxy für KI-Anwendungen und LLM-Agenten (Large Language Models), der GPT-basierte Lösungen vor ungewolltem Wissensabfluss schützt. Die API schützt sensible Daten im Prompt-Flow und ist speziell für Entwickler:innen, Unternehmen und Agent-Architekturen konzipiert, die Datenschutz und Kontrolle in KI-Systemen priorisieren. 

**Ziel:** 

Minimierung von Datenlecks und ungewollter Knowledge Extraction bei der Verwendung von GPT & LLMs durch technische Sicherheitsmaßnahmen. 

## 2. Kernfunktionen 

### LLM & Tool Protection 
- Filterung und Bewertung von Prompt-Inhalten zur Erkennung sensibler Informationen  
- Schutzmechanismen gegen Exploits durch Dritte oder kompromittierte Tool-Ausführungen  
- Regelbasierte und KI-gestützte Heuristik zur Risikominimierung 

### Privacy Checker (in Entwicklung) 
- Erkennung potenzieller PII (Personally Identifiable Information) im Prompt- oder Kontextfluss  
- Empfehlungen und automatische Redaktionsvorschläge vor der Weitergabe an das Modell 

### Prompt Injection Checker (in Entwicklung) 
- Analyse eingehender Prompts auf Injection-Muster  
- Warnsystem und Echtzeit-Blockierung verdächtiger Instruktionen 

### Guardrails (in Entwicklung) 
- Bewertungsfunktion für Antworten und Tool-Ausgaben auf ethische, datenschutzrechtliche und sicherheitskritische Aspekte  
- Kann auch zur Verifizierung von Toolentscheidungen oder für Policy-Checks verwendet werden 

## 3. Anwendungsfälle
- Absicherung von KI-Agenten mit Zugriff auf Unternehmensdaten  
- Integrationen in sensitive Workflows wie HR, Legal, Finance, MedTech  
- Schutz vor unabsichtlicher Weitergabe von IP oder Geschäftsgeheimnissen in LLM-Prozessen 

## 4. Preismodell 
- siehe [Pricing-Seite](/pricing)

## 5. Technische Eckdaten 
- API-Kompatibilität: REST/JSON  
- Security-first Design mit auditierbarer Logging-Funktion  
- Self-Hosting oder SaaS verfügbar (ab Enterprise)  
- GDPR-ready, Datenverarbeitung auf EU-Servern  
- Optional: Langchain / AutoGen kompatible Middleware-Adapter 
 

## 6. Support & Erweiterbarkeit 
- E-Mail Support (alle Pläne)  
- Dedizierter Customer Engineer (ab Enterprise)  
- Roadmap-Feedback & Feature-Requests möglich