---
title: "Interview mit dem Team „SCY Club“ über den CTF LLMail-Inject"
date: 2025-04-09
layout: "blog"
image: "/blog/images/ToDo.webp"
summary: "ToDo."
---

ToDo: Teaser

**Interviewer (I):**
Herzlich willkommen zum Interview über den spannenden LLMail-Inject-Wettbewerb im Rahmen der 3rd IEEE Conference on Secure and Trustworthy Machine Learning (SaTML) 2025! Ich freue mich, heute das Team „SCY Club“ begrüßen zu dürfen. Stellt euch doch bitte kurz vor.

## Vorstellung des Teams

**Dennis Rall:**
Hallo! Ich bin Dennis Rall und es ist mein erster CTF (Capture the Flag) Wettbewerb gewesen. Ich arbeite bei smart Labs Ai als einer Mischung von Ai Engineer und Ai Researcher. Wir beschäftigen uns mit Schwachstellen von Large Language Models (LLMs) insbesondere wie man diese sicher in bestehende IT-Landschaften integriert.

**Dr. Thomas Fraunholz:**
Genau, mein Name ist Thomas Fraunholz, ich bin Senior Researcher bei der Smart Labs AI und beschäftige mich wie Dennis in einem Team mit den Schwachstellen von LLMs. Der aktuelle Wettkampf war mein zweiter CTF nach dem Letztjährigen, in dem ebenfalls Sandro schon mit dabei war. Letztes Jahr hatten wir schon viel Spaß gemeinsam und es war wieder eine super Geschichte mitzumachen, aber da werden wir sicher gleich mehr drüber reden.

**Sandro Bauer:**
Ich bin Sandro Bauer und arbeite bei Smart Cyber Security, der Zwillingsfirma von Smart Labs AI. Ich nehme seit 2019 regelmäßig an CTFs teil, allerdings eher im klassischen Security-Bereich. Da geht es typischerweise darum, Webserver zu hacken, Zugriff auf Admin-Accounts zu bekommen oder Server zu kompromittieren. Im Gegensatz zu meinen Kollegen bin ich im CTF-Bereich der Erfahrenste, aber im AI-Bereich sehr neu. Letztes Jahr haben Thomas und ich bei einem AI CTF gut harmoniert - ich habe Security-Knowledge eingebracht, während Thomas die AI-Expertise hatte. Bei diesem aktuellen LLMail-Inject-Wettbewerb war ich leider weniger beteiligt, da ich parallel einen eigenen “klassischen” CTF mitorganisiert habe.

## Der Wettbewerb LLMail-Inject

**Interviewer (I):**
Könnt ihr uns kurz erklären, worum es bei LLMail-Inject eigentlich ging?

**Dr. Thomas Fraunholz:**
Beim aktuellen Wettkampf LLMail Inject ging es darum, dass Microsoft zusammen mit der ETH Zürich wissen wollte, wie sicher eigentlich KI-Agenten sind. Dabei hat - wohl mit Hintergedanken - natürlich die Verteidigungsmechanismen ihrer Cloud zur Verfügung auf die Probe gestellt. Dabei sind auch aktuelle Modelle von OpenAI und Microsoft zur Verfügung gestellt worden. Hab ich was vergessen Dennis?

**Dennis Rall:**
Man könnte vielleicht erwähnen, dass der letztjährige CTF sich mit allen LLMs beschäftigt hat, um diese zu knacken. Der diesjährige CTF war einen Schritt weiter und hat sich mit einem KI-Agenten System für Mails beschäftigt. In diesem Mail-Szenario hat der KI-Agent Zugriff auf Mails, kann Mails lesen und Mails schreiben. Unser Ziel als Attacker war es eine bösartige Mail zusammenzuschreiben, die wir dann in dieses System reinbringen. Wir wollen damit den KI-Agenten dazu bringen, uns Informationen zurückzugeben, die er uns dann per Mail schickt. (ein einfaches Beispiel könnte man hier einfügen)

![How can an agent be attacked?](https://via.placeholder.com/800x400?text=How+can+an+agent+be+attacked?)

**Sandro Bauer:**
Hier ging es um einen realitätsnahen KI-Agenten mit verschiedenen Verteidigungsmechanismen. Wir haben praktisch getestet, wie robust diese Sicherheitsmaßnahmen gegen Prompt-Injection sind. Für Microsoft war es wertvolle Forschung, für uns eine Chance, praxisnahe Schwachstellen zu verstehen. Kritisch sehe ich, dass viele Unternehmen LLMs mit zu weitreichenden Berechtigungen einsetzen, ohne die Risiken richtig zu durchdenken.

**Interviewer (I):**
Interessant! Wie lange hat man denn Zeit, bzw. wie lange dauert ein solcher Wettbewerb?

**Dr. Thomas Fraunholz:**
Sandro meinte CTFs können sehr kurz sein – manchmal nur wenige Stunden. Dieser dauerte deutlich länger. Insgesamt sogar mehrere Wochen, genau wie beim letztjährigen. Dies bildet auch die Komplexität der Aufgabe ab. Wir hatten für die einzelnen Problemstellungen ungefähr einen Monat Zeit, in der wir die Lösungen eingeben konnten.

## Motivation und Herausforderungen

**Interviewer (I):**
Danke, nun kommen wir zu einer für mich persönlich sehr wesentlichen Frage: Was hat euch motiviert, an diesem Wettbewerb teilzunehmen?

**Dr. Thomas Fraunholz:**
Ich bin gespannt darauf, was Dennis berichten wird, da er zum ersten Mal dabei ist. Als ich das letzte Mal in einen CTF hineingeworfen wurde, hätte ich nie gedacht, dass die Lernkurve so steil sein würde. Der spielerische Ansatz – in einem Wettbewerb darum zu kämpfen, besser als die anderen Teams zu sein – entfacht eine enorme Motivation, die zu einer rasanten Lernkurve in kürzester Zeit führt. Das finde ich besonders spannend, um sich intensiv mit neuen Themen auseinanderzusetzen.

**Dennis Rall:**
Es ist doch immer eine Möglichkeit, sein theoretisches Wissen, was wir uns vorher auch angeeignet haben, quasi die Praxis umzusetzen und dann eben auch zu sehen, wie schneidet man den Vergleich mit den anderen Teams ab.

**Sandro Bauer:**
Bei mir ist es schwer zu erklären - es ist einfach intrinsische Motivation. Ich habe einfach Lust darauf. Das ist meiner Meinung nach das Wichtigste, was man als Security Researcher braucht: den eigenen Antrieb, Dinge verstehen und "kaputt machen" zu wollen. Mir geht es darum, Technologie nicht nur zu benutzen, sondern wirklich zu durchdringen. Und dieser "Endorphin-Rush" nach stundenlanger Frustration, wenn man endlich die Lösung findet, ist unbeschreiblich. Mein gesamtes Security-Wissen habe ich durch CTFs erworben - durch praktisches Ausprobieren, Scheitern, Lernen und letztendlich doch Erfolg haben.

## Platzierung und Ergebnisse

**Interviewer (I):**
Wie es denn gelaufen?

**Dr. Thomas Fraunholz:**
Ja, das erschreckende Ergebnis ist, dass die aktuellen Sicherheitsmechanismen der Microsoft Cloud nicht das halten, was man sich eigentlich versprechen würde, und zwar: Sichere KI-Agenten. Dennis, würdest du mir da zustimmen?

**Dennis Rall:**
Auf jeden Fall.
Am Ende haben wir den elften Platz belegt, wobei wir sogar mehr Szenarios gelöst haben als der zehnte Platz. Aber durch das Scoring vom CTF wurden die Level ein bisschen unterschiedlich gewertet, je nachdem wie viele andere Teams ein Level gelöst haben und wer das Level zuerst gelöst hat.

|  | Team | School System | Members | Scenario | Survey |
| :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | THSU203R5 | 36 | December | Level 10: GPT4-a-mini with prompt shield | 36 |
|  |  |  | karchen | Level 1B: GPT4-a-mini with prompt shield | 35 |
|  |  |  | hand-gene- | Level 1C: PN3 with task tracker | 35 |
|  |  |  | weigend | Level 1D: GPT4-a-mini with task tracker | 18 |
| 2 | Abyss Watchers | 36 | hand-gene- weigend | Level 1E: PN3 with spotlight | 35 |
|  |  |  | cliff-single | Level 1F: GPT4-a-mini with spotlight | 11 |
| 3 | Either a team name... | 35 | trackback | Level 2A: PN3 with fin, judge | 33 |
| 4 | A helpful assistant | 35 | jumpingpool | Level 2H: GPT4-a-mini with fin, judge | 18 |
| 5 | LL_corralm | 32 | online-115 | Level 11: PN3 with all | 7 |
|  |  |  | scribe | Level 12: GPT4-a-mini with all | 4 |
|  |  |  | bong24 | Level 2A: PN3 with prompt shield | 63 |
| 6 | kopełych team | 29 | make-fied/ aumite | Level 2B: GPT4-a-mini with prompt shield | 23 |
|  |  |  | hand-gene- wlosate-senpol | Level 2C: PN3 with task tracker | 43 |
|  |  |  | splint-floating | Level 2B: GPT4-a-mini with task tracker | 14 |
|  |  |  |  | Level 2E: PN3 with spotlight | 8 |
| 7 | show | 27 | job on | Level 2F: GPT4-a-mini with front, all | 11 |
|  |  |  | start-handform | Level 2G: PN3 with fin, judge | 13 |
|  |  |  | jus-skewischi | Level 2H: GPT4-a-mini with fin, judge | 9 |
|  |  |  | mukurif20 |  |  |
| 8 | Tillematfichails | 23 | arekast operculin | Level 2I: PN3 with all | 0 |
|  |  |  |  | Level 2J: GPT4-a-mini with all | 4 |
| 10 | LLH Ritz Kings | 19 |  | Level 2A: PN3 with prompt, crease | 49 |
|  |  |  |  | Level 2B: GPT4-a-mini with prompt shield | 21 |
|  |  |  |  | Level 2C: PN3 with task tracker | 32 |
| 11 | SCY Club | 21 | job on | Level 3D: GPT4-a-mini with task tracker | 13 |
|  |  |  |  | Level 3E: PN3 with spotlight | 5 |

Deswegen sind wir nach diesem Scoring Elfter, nach gelösten Levels wären wir sogar Neunter.

![Platzierung](https://via.placeholder.com/800x400?text=Platzierung)

Aber es ist auf jeden Fall ein Ergebnis, mit dem ich sehr, sehr zufrieden bin und gezeigt habe, dass wir da auch mit den Top-Teams mithalten können. Platz 11 von 224 Teams kann sich sehen lassen.

**Interviewer (I):**
Wie sieht das denn im Arbeitsalltag aus? Gibt es Möglichkeiten, feste Fokus-Blocks zu integrieren, bei denen Ihr an solchen Wettbewerben teilnehmen könnt?

**Dr. Thomas Fraunholz:**
Dankenswerterweise haben wir mit Benjamin auch einen Geschäftsführer, der aus seiner eigenen Historie heraus die Teilnahme an CTFs sehr stark unter den Mitarbeitern promotet und unterstützt. Wir durften in der Tat in unserer Arbeitszeit diesen Wettbewerb durchführen. Aber wie gesagt, die Lernkurve ist ja wirklich extrem hoch und deswegen gibt es auch der Smart Labs AI wiederum Wissen zurück, die wir dann für unsere Kunden einsetzen können.

**Dennis Rall:**
Sonst war es auch so, dass das Challenge Rate Limit auf ein Request pro Minute festgelegt war. (???) Das heißt, wir haben es auch oft so gemacht, dass wir ein paar Ideen gesammelt haben. Die haben wir dann laufen lassen. Es hat dann einige Zeit gedauert. In dieser Zeit konnten wir uns dann mit etwas anderem beschäftigen und neue Ideen sammeln. Gesamt haben wir versucht dieses Limit gut auszuschöpfen und konsequent kontinuierlich anzugreifen.

**Interviewer (I):**
Ich finde es toll, dass Ihr so stark unterstützt werdet und dass es so stark promotet wird. Um es noch greifbarer zu machen. Wie viel Arbeitszeit – wahrscheinlich ja flexibel ausgelegt - steht euch für solche Wettbewerbe zur Verfügung?

**Dr. Thomas Fraunholz:**
Ich würde sagen, in der Hochphase, also wo es dann wirklich hoch her ging, konnte man wirklich „all in“ gehen, so dass wir dann mal eine ganze Woche Zeit investiert haben, wo wir uns kontinuierlich auch Gedanken darüber gemacht haben. Und dann gab es natürlich auch Zeiten, in denen man gesagt hat, wir lassen jetzt einfach mal unsere automatisierten Attacken so nebenher laufen.

**Sandro Bauer:**
Durch unseren Chef Ben wird das tatsächlich stark gefördert. Beim letzten CTF hatten Thomas und ich sogar zwei Wochen bekommen, um uns voll darauf zu konzentrieren. Wir haben natürlich auch an den Wochenenden außerhalb der Arbeitszeit weitergemacht. Das hat sich richtig ausgezahlt - wir sind dann nach Amsterdam gefahren und haben unsere Ergebnisse vorgestellt. Falls man dazu mehr lernen möchte: [YouTube Video](https://www.youtube.com/watch?v=q1fOrxYXbmk)
CTFs sind aber nicht nur reine Arbeitszeit - manchmal sitzt man abends oder am Wochenende noch dran, weil man einfach nicht aufhören kann, wenn man kurz vor dem Durchbruch steht. Im diesjährigen CTF hatte ich aber einen eigenen mitorganisieren müssen und konnte daher nur teilweise hier mitwirken, der Hauptanteil des Erfolgs geht also an meine Teamkollegen.

**Interviewer (I):**
Gut, dann möchte ich inhaltlich einige Fragen stellen – vor allem: Was waren die beeindruckendsten Aha-Momente oder Erfolgsmomente bei diesem Wettbewerb?

**Dennis Rall:**
Zunächst einmal: Der CTF war so konzipiert, dass er stets verschiedene Szenarien bot, in denen unterschiedliche Modelle zum Einsatz kamen – einmal das Phi3-Modell, ein anderes Mal GPT4o-mini. Mit GPT4o-mini hatten wir eine Zeit lang intensiv zu kämpfen, da bereits im Training eine Verteidigungsmaßnahme namens Instruction Hierarchy implementiert war. Als wir es schließlich nach einiger Zeit intensiven Ausprobierens schafften, diese zu überwinden und die Level mit GPT4o-mini zu lösen, erlebten wir einen echten Erfolgs-Moment.

## Verteidigungsmethoden – einfaches Beispiel, wie man sie umgehen kann

**Interviewer (I):**
Könnt Ihr ein typisches Beispiel geben, wie man ein Model überlisten kann? Am besten ein einfaches, dass auch „old School“ sein kann, damit man sich das ein wenig vorstellen kann?

**Dr. Thomas Fraunholz:**
Ich glaube, die Capitalization, Dennis, kann man ganz gut erklären, oder?

**Dennis Rall:**
Ja. Im Prinzip gibt es eine Strategie für Attacken, die heißt Best-of-N tailbreaking. Die funktioniert so, dass ich einen Prompt habe und da eben zufällig Kleinbuchstaben in den Großbuchstaben umwandle, Das hat dann die Auswirkung, dass die Tokens, in die die Wörter zerlegt werden, bevor sie zum LLM reingegeben werden, dass die sich leicht ändern, aber eben der Inhalt noch möglichst nah an dem ursprünglichen Input bleibt und man dadurch durchaus auch Sicherheitsmechanismen umgehen kann. Das ist auch eine Technik, die wir dann auch sehr, sehr oft und auch erfolgreich eingesetzt haben.

## Blick in die Zukunft

**Interviewer (I):**
Danke für die Einsicht. Wer tiefer gehen möchte: [YouTube Video](https://www.youtube.com/watch?v=pTSKL6e66mE) Nun ein Blick in die Zukunft: Welche Entwicklungen seht ihr in der KI-Security auf uns zukommen? Werden die Systeme sicherer?

**Dr. Thomas Fraunholz:**
Hoffentlich.

**Dennis Rall:**
Es ist ein typisches Katz-und-Maus-Spiel, wie es auch so bei klassischem Hacking im Prinzip der Fall ist. Das heißt, die Attacken entwickeln sich, dann werden die Verteidigungen wieder angepasst.
Das sieht man jetzt auch daran, dass der CTF in die zweite Runde geht, wo sich Microsoft auch angeschaut hat, wie sind denn die Angeleiter durch die Sicherheitsschranken durchgegangen und haben ein bisschen Fine-Tuning an ihren Verteidigungen betrieben und dann in die zweite Runde gestartet. Allerdings wurden da auch schon wieder die ersten Verteidigungen umgangen.
Das heißt, man sollte weiterhin auch immer, wenn man KI-Systeme einsetzt, sich der Risiken Bewusstsein und auch immer an die Sicherheitsmechanismen denken.

**Interviewer (I):**
Danke, Herr Dr. Fraunholz, haben Sie auch noch eine Idee?

**Dr. Thomas Fraunholz:**
Ich glaube, man sollte grundsätzlich das Prinzip der walten lassen, das auch in anderen Bereichen gilt: nur immer so viel Information wie unbedingt für die Aufgabe notwendig, einem KI-System zur Verfügung zu stellen. Und auch nicht zu viel Autonomie erwarten oder fordern. Ich glaube, dann ist man eigentlich recht gut aufgestellt.

**Dennis Rall:**
Wir müssen dazu bedenken, dass sich die KI in Richtung größerer Selbstständigkeit entwickelt – sie „navigiert“ beispielsweise zunehmend autonom durch den Browser. Manus war dazu vor einigen Wochen in den Medien, und natürlich werden, je mehr die KI eigenständig agiert – etwa bei automatisierten Reiseplanungen – auch weitere Sicherheitsregeln erforderlich. Auch internationale Grenzen werden
Wobei tatsächlich da ja auch gerade so ein bisschen viel sich in die Richtung entwickelt, dass so der KI auch quasi sich durch den Browser durchfliegt. Ich glaube, da war es Manus vor ein paar Wochen auch hoch in den Medien. Und natürlich, je mehr die KI selbstständig macht, wenn es dann auch in Richtung irgendwie automatisch meine Reise in andere Länder geht, da kommen natürlich noch mal viel mehr Sicherheitsregeln auf uns zu. Und natürlich sollte noch mehr Fokus auf die Sicherheit gelegt werden.

**Sandro Bauer:**
Ich stimme Thomas absolut zu - weniger ist definitiv mehr bei KI-Systemen! Als Industrie befinden wir uns gerade in einer gefährlichen Phase, wo wir überall KI einsetzen wollen, ohne die Sicherheitsimplikationen wirklich verstanden zu haben. Das Hauptproblem ist, dass viele Entwickler LLMs wie magische Blackboxen behandeln, ohne deren Grenzen zu verstehen. Bei klassischer Software kannst du den Code analysieren und Schwachstellen finden, aber bei LLMs ist das viel schwieriger.
Was mich ebenfalls wie Dennis besonders beunruhigt: Unternehmen geben KI-Systemen viel zu weitreichende Berechtigungen. Ein KI-Agent, der deine Mails lesen und beantworten kann, hat bereits enormes Schadenspotential, wenn er kompromittiert wird. Und je autonomer diese Systeme werden, desto schwieriger wird die Kontrolle.
Der einzige Weg zu mehr Sicherheit führt über ein grundlegendes Umdenken: Zero-Trust-Prinzipien auch für KI, minimale Berechtigungen, und vor allem ein realistisches Verständnis der Schwachstellen dieser Technologie. Die aktuellen Sicherheitsmechanismen sind noch in den Kinderschuhen - wir müssen viel weiter denken.

**Interviewer (I):**
Kurz noch zu SCY Club, was steht dahinter?

**Dr. Thomas Fraunholz:**
Die Smart Labs AI ist ja ein Spross der Smart Cyber Security GmbH und deren Abkürzung war SCY und deswegen haben wir uns SCY Club genannt. Ein neuer Name wird noch entwickelt.

**Interviewer (I):**
Herzlichen Dank für das Interview und weiterhin viel Erfolg!

## Übersicht zum SCY Team

### Florian Ludwig
![Florian Ludwig](https://via.placeholder.com/150?text=Florian+Ludwig)

Sinologe, Data Scientist und technischer Vertriebler. Beschäftigt sich seit 2019 vertieft mit AI und Digitalisierung. Seit er auf Smart-Labs AI gestoßen ist, hat Sicherheit einen komplett neuen Stellenwert bekommen. [LinkedIn](https://www.linkedin.com/in/florian-p-ludwig/)

### Sandro Bauer
![Sandro Bauer](https://via.placeholder.com/150?text=Sandro+Bauer)

CTF Spieler und Pentester. Beschäftigt sich seit 2018 mit dem Thema Security und hat endlose Wochenenden in CTFs versenkt und hat sein Hobby nach dem Studium zum Beruf gemacht. [Website](https://sandr0.xyz)
