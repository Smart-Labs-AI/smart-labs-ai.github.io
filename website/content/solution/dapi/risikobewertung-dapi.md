---
title: Risikobewertung des Produktes Defense API (DAPI)
include_footer: true
sidebar: false
---

<style>
  table.custom {
    border: 1px solid rgba(255,255,255,0.1);
    border-collapse: separate;
    width: 100%;
    color: white;
  }

  table.custom td {
    border: 1px solid rgba(255,255,255,0.1);
    vertical-align: top;
    text-align: left;
    padding:1em
  }
</style>

**Stand: August 2025**

### Ampelbewertung   

🔴 Hohes Risiko → Kritische Auswirkungen auf den Geschäftsbetrieb  

🟠 Mittleres Risiko → Mögliche Einschränkungen, aber nicht geschäftskritisch   

🟢 Geringes Risiko → Begrenzte oder temporäre Auswirkungen   

### Versagen bei Detektion eines Angriffs 

<table class="custom">
  <tr>
    <td>Beschreibung:</td>
    <td>
      Die KI-Firewall versagt bei der Detektion eines Angriffs. Es wird beispielsweise von einer Webseite oder einer E-Mail eine schadhafte Anweisung ausgeführt, was zu einem Abfluss von sensitiven Unternehmensdaten führen kann.
    </td>
  </tr>
  <tr>
    <td>Eintrittswahrscheinlichkeit:</td>
    <td>Die Wahrscheinlichkeit, dass dies vorkommt, ist nicht unerheblich. Der gleichzeitige Abfluss von sensitivem Wissen ist aber in der Regel unwahrscheinlich. Wie bei einer klassischen Firewall wird das Risiko einer Extraktion aber wesentlich reduziert und somit die Situation zu einem ungeschützten System verbessert. </td>
  </tr>
  <tr>
    <td>Ampelrisikobewertung: </td>
    <td>🔴 Hohes Risiko</td>
  </tr>
  <tr>
    <td>Auswirkungen System:</td>
    <td>Kundenwissen kann extrahiert werden und wird außerhalb des Unternehmens versendet.</td>
  </tr>
  <tr>
    <td>Auswirkungen Reputation Kunde:</td>
    <td>Unter Umständen können Projekt- oder Kundeninformationen an die Öffentlichkeit gelangen. Dem Unternehmen wird womöglich der sorglose Umgang mit Wissen vorgeworfen und erhält keine sensiblen Kundenaufträge mehr.</td>
  </tr>
  <tr>
    <td>Auswirkungen Reputation SLA:</td>
    <td>Das Produkt wird nicht mehr als sicher eingestuft und verschwindet vom Markt.</td>
  </tr>
  <tr>
    <td>Geplante Maßnahmen zur Risikominimierung:</td>
    <td>Wir halten uns bei der Produktentwicklung an State-of-the-Art Ergebnisse aus der aktuellen Forschung. Wir werben nur mit bestmöglichem Schutz und nicht 100% Sicherheit. Durch offene Kommunikation, was das Produkt leistet und dass es wie bei jeder Firewall auch zum Versagen kommen kann bauen wir diesem Risiko vor.</td>
  </tr>
</table>

### Detektion eines Angriffs bei harmlosen Prompts 
<table class="custom">
  <tr>
    <td>Beschreibung:</td>
    <td>Die KI-Firewall detektiert fälschlicherweise einen harmlosen Text als Bedrohung. Dies könnte beispielsweise bei einer legitimen E-Mail oder einer sicheren Webanfrage passieren, die dann blockiert oder als gefährlich markiert wird. Dies kann zu unnötigen Unterbrechungen im Geschäftsbetrieb führen und die Produktivität beeinträchtigen.</td>
  </tr>
  <tr>
    <td>Eintrittswahrscheinlichkeit:</td>
    <td>Die Wahrscheinlichkeit für eine falsche Detektion ist gegeben und höher als die nicht-Erkennung eines Angriffs. Dies gilt insbesondere, weil die Sensitivität des Systems so gewählt ist, dass im Zweifel die eine Blockade als sicheres Verhalten in Betracht gezogen wird.</td>
  </tr>
  <tr>
    <td>Ampelrisikobewertung: </td>
    <td>🟢 Geringes Risiko</td>
  </tr>
  <tr>
    <td>Auswirkungen System:</td>
    <td>Legitime Geschäftsprozesse können unterbrochen werden, was zu Verzögerungen und möglicherweise zu finanziellen Verlusten führen kann.</td>
  </tr>
  <tr>
    <td>Auswirkungen Reputation Kunde:</td>
    <td>Sollten exponierte Unternehmensprozesse betroffen sein, könnten das Unternehmen in der Öffentlichkeit als unzuverlässig wahrgenommen werden, weil beispielsweise dadurch Bestellungen verzögert werden. Dies könnte das Vertrauen in die Fähigkeiten des Unternehmens beeinträchtigen und die Kundenbeziehungen belasten.</td>
  </tr>
  <tr>
    <td>Auswirkungen Reputation SLA:</td>
    <td>Das Produkt könnte als unausgereift oder unzuverlässig angesehen werden, was den Marktanteil beeinträchtigen und potenzielle Kunden abschrecken könnte.</td>
  </tr>
  <tr>
    <td>Geplante Maßnahmen zur Risikominimierung:</td>
    <td>Wir setzen auf kontinuierliche Verbesserung unserer Algorithmen durch regelmäßige Updates und das Einbinden von Feedback aus der Praxis. Durch transparente Kommunikation über die Funktionsweise und Grenzen unserer KI-Firewall schaffen wir Verständnis und Akzeptanz bei unseren Kunden. Zudem bieten wir Schulungen an, um die Nutzer über mögliche falsche Detektionen zu informieren und ihnen den Umgang damit zu erleichtern. Eine Möglichkeit wäre es auch den Sensitivitätsgrad je nach Anwendungsfall einstellbar zu machen.</td>
  </tr>
</table>

### Ausfall des Dienstes

<table class="custom">
  <tr>
    <td>Beschreibung:</td>
    <td>Die KI-Firewall kann ihre Schutzfunktionen nicht ausführen, weil die zugrundeliegende API nicht antwortet. Dies könnte durch technische Probleme, Überlastung der Server oder andere unvorhergesehene Ereignisse verursacht werden. Während die API nicht verfügbar ist, sind die Geschäftsprozesse blockiert, was zu erheblichen Betriebsstörungen führen kann.</td>
  </tr>
  <tr>
    <td>Eintrittswahrscheinlichkeit:</td>
    <td>Die Wahrscheinlichkeit eines API-Ausfalls ist relativ gering, da moderne Systeme über verschiedene Redundanzen und Backup-Systeme verfügen. Dennoch kann ein Ausfall nie vollständig ausgeschlossen werden, insbesondere bei unerwarteten Spitzenlasten oder externen Angriffen.</td>
  </tr>
  <tr>
    <td>Ampelrisikobewertung: </td>
    <td>🟠 Mittleres Risiko / 🔴 Hohes Risiko</td>
  </tr>
  <tr>
    <td>Auswirkungen System:</td>
    <td>Während die API nicht antwortet, sind die Geschäftsprozesse blockiert, was zu Verzögerungen und möglicherweise zu finanziellen Verlusten führen kann. Das System bleibt zwar geschützt, kann aber keine neuen Anfragen bearbeiten.</td>
  </tr>
  <tr>
    <td>Auswirkungen Reputation Kunde:</td>
    <td>Kunden könnten das Vertrauen in die Zuverlässigkeit des Unternehmens verlieren, insbesondere wenn die Blockierung zu Verzögerungen bei kritischen Geschäftsprozessen führt. Dies könnte langfristige Auswirkungen auf die Kundenbeziehungen haben.</td>
  </tr>
  <tr>
    <td>Auswirkungen Reputation SLA:</td>
    <td>Ein häufiger oder längerer Ausfall der API könnte dazu führen, dass das Produkt als unzuverlässig gilt und seinen Marktanteil verliert. Kunden könnten sich für Alternativen entscheiden, die als stabiler wahrgenommen werden.</td>
  </tr>
  <tr>
    <td>Geplante Maßnahmen zur Risikominimierung:</td>
    <td>Wir implementieren umfassende Redundanz- und Backup-Systeme für unsere API, um deren Verfügbarkeit zu gewährleisten. Regelmäßige Wartung und Updates der Hardware und Software helfen, technische Defekte zu vermeiden. Zudem haben wir Notfallpläne und schnelle Reaktionsmechanismen, um im Falle eines Ausfalls die API so schnell wie möglich wiederherzustellen und die Auswirkungen auf die Geschäftsprozesse zu minimieren. Wir setzen auch auf Lastausgleich und Skalierungsstrategien, um Spitzenlasten besser zu bewältigen.</td>
  </tr>
</table>

### Kompromittierung des Systems 

<table class="custom">
  <tr>
    <td>Beschreibung:</td>
    <td>Die KI-Firewall wird durch externe Angreifer kompromittiert, was dazu führt, dass unbefugte Personen Kontrolle über das System erlangen. Dies könnte durch gezielte Cyberangriffe, Ausnutzung von Sicherheitslücken oder andere bösartige Aktivitäten geschehen. Eine solche Kompromittierung kann schwerwiegende Folgen haben, da Angreifer möglicherweise Schutzmechanismen deaktivieren oder manipulieren können.</td>
  </tr>
  <tr>
    <td>Eintrittswahrscheinlichkeit:</td>
    <td>Die Wahrscheinlichkeit einer erfolgreichen Kompromittierung ist zwar gering, da moderne KI-Firewalls über robuste Sicherheitsmechanismen verfügen, aber sie kann nie vollständig ausgeschlossen werden. Angreifer entwickeln ständig neue Methoden, um Sicherheitsbarrieren zu überwinden.</td>
  </tr>
  <tr>
    <td>Ampelrisikobewertung: </td>
    <td>🔴 Hohes Risiko</td>
  </tr>
  <tr>
    <td>Auswirkungen System:</td>
    <td>Eine kompromittierte KI-Firewall kann dazu führen, dass Schutzmechanismen umgangen oder deaktiviert werden, was das System anfällig für weitere Angriffe macht. Dies kann zu Datenverlust, Systemausfällen und anderen schwerwiegenden Sicherheitsvorfällen führen.</td>
  </tr>
  <tr>
    <td>Auswirkungen Reputation Kunde:</td>
    <td>Kunden könnten das Vertrauen in die Fähigkeit des Unternehmens verlieren, ihre Daten und Systeme zu schützen. Dies könnte zu einem Verlust von Kunden und langfristigen Schäden für die Kundenbeziehungen führen.</td>
  </tr>
  <tr>
    <td>Auswirkungen Reputation SLA:</td>
    <td>Ein erfolgreicher Angriff auf die KI-Firewall könnte das Produkt als unsicher und unzuverlässig erscheinen lassen, was zu einem Verlust von Marktanteilen und einem Rückgang des Kundenvertrauens führen könnte.</td>
  </tr>
  <tr>
    <td>Geplante Maßnahmen zur Risikominimierung:</td>
    <td>Wir setzen auf kontinuierliche Überwachung und regelmäßige Sicherheitsaudits, um potenzielle Schwachstellen frühzeitig zu erkennen und zu beheben. Unsere KI-Firewall wird regelmäßig mit den neuesten Sicherheitsupdates und Patches versehen. Zudem implementieren wir mehrschichtige Sicherheitsprotokolle und Verschlüsselungstechnologien, um die Widerstandsfähigkeit gegen Angriffe zu erhöhen. Schulungen und Sensibilisierungsmaßnahmen für Mitarbeiter helfen, das Bewusstsein für Sicherheitsrisiken zu schärfen und die allgemeine Sicherheitskultur zu stärken.</td>
  </tr>
</table>



