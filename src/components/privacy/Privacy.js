import React, { useEffect } from "react";


import BackTo from "../0_0_uiElements/button/BackTo"
import FooterRedirection from "../0_1_layout/footer/FooterRedirection"

const Privacy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div id="service" >
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <h3 className="service_title"> Datenschutz </h3>
      </div>

      <div className='container'>

        <h3>1. Erhebung, Verarbeitung und Nutzung personenbezogener Daten</h3>
        <h4>
          Bei einem Besuch dieser Website erheben wir keine personenbezogenen Daten von Ihnen.
          Personenbezogene Daten werden nur erhoben, wenn Sie uns diese selbst über unser Kontaktformular mitteilen.
          Diese Daten werden ausschliesslich zur Beantwortung Ihres Anliegens genutzt und danach wieder gelöscht.
        </h4>
        <br />

        <h3>2. Verwendung von eigenen Cookies</h3>
        <h4>
          Beim Aufruf bestimmter Seiten wird ein so genanntes «Session-Cookie» gesetzt.
          Hierbei handelt es sich um eine kleine Textdatei, die nach Ende der Browser-Sitzung automatisch wieder von Ihrem Computer gelöscht wird.
          Diese Datei dient ausschliesslich dazu, bestimmte Applikationen nutzen zu können.
          Sie können bei den meisten Webbrowsern die Einstellungen so ändern, dass Ihr Browser neue Cookies nicht akzeptiert oder Sie können erhaltenen Cookies löschen lassen.
          Wie dies konkret für Ihren Browser funktioniert, kann in der Regel über dessen Hilfe-Funktion in Erfahrung gebracht werden.
         </h4>
        <br />
        <h3>3. Server-Log-Dateien</h3>
        <h4>
          Wie bei jeder Verbindung mit einem Webserver protokolliert und speichert der Server unseres Webhosting-Anbieters cyon in Basel,
          Schweiz (bitte prüfen und allenfalls auf eigenen Hosting-Anbieter abändern), bestimmte technische Daten.
          Zu diesen Daten gehören die IP-Adresse und das Betriebssystem Ihres Geräts, die Daten, die Zugriffszeit,
          die Art des Browsers sowie die Browser-Anfrage inklusive der Herkunft der Anfrage (Referrer).
          Dies ist aus technischen Gründen erforderlich, um Ihnen unsere Website zur Verfügung zu stellen.
          Der Webhosting-Anbieter schützt diese Daten mit technischen und organisatorischen Massnahmen vor unerlaubten Zugriffen und gibt sie nicht an Dritte weiter.
          Soweit wir dabei personenbezogene Daten verarbeiten, tun wir dies aufgrund unseres Interesses,
          Ihnen die bestmögliche Nutzererfahrung zu bieten und die Sicherheit und Stabilität unserer Systeme zu gewährleisten.
            </h4>
        <br />
        <h3>4. Google Analytics (falls vorhanden)</h3>
        <h4>
          Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc.,
          1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics verwendet sog. «Cookies»,
          d.h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.

          Google nutzt diese Informationen, um im Auftrag des Betreibers dieser Website Ihre Nutzung der Website auszuwerten,
          um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
          verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser
          übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.

          Durch eine entsprechende Einstellung in Ihrem Browser können Sie die Speicherung der Cookies verhindern oder wieder löschen.
         </h4>
        <br />
        <h3>5. Newsletter (falls vorhanden)</h3>
        <h4>
          Wenn Sie sich für unseren Newsletter mit Ihrer E-Mail-Adresse angemeldet haben,
          speichern und nutzen wir Ihre E-Mail-Adresse für die Übersendung unseres Newsletters
          mit Informationen und Werbung über uns, bis Sie sich von unserem Newsletter abgemeldet haben.

          Für unseren Newsletter-Service nutzen wir den Newsletter-Dienst «Mailchimp» der Rocket Sience Group LLC, 675 Ponce de Leon Ave NE, Suite 5000 Atlanta, GA 30308.

          Wenn Sie Ihre E-Mail-Adresse für den Erhalt des Newsletters eintragen,
          wird diese zunächst bei MailChimp für den Zweck gespeichert, dem Inhaber eine E-Mail zuzusenden,
          in der er/sie die Anmeldung zu dem Newsletterversand bestätigen kann («Double-Opt-In»).
          Nach einer solchen Bestätigung wird die E-Mail-Adresse dauerhaft beim MailChimp gespeichert,
          bis sie sich von dem Newsletterempfang abgemeldet haben oder sie von uns gelöscht wird.
          MailChimp speichert das Datum der Anmeldung sowie die IP-Adresse, unter der die Anmeldung erfolgt ist.
          Eine weiterführende Nutzung ihrer IP-Adresse erfolgt nicht.

          Wir weisen darauf hin, dass die Daten, die über MailChimp erhoben und genutzt werden,
          auf Rechnern in den USA gespeichert und verarbeitet werden. Mit Ihrer Einwilligung in den Empfang unseres Newsletters erklären Sie sich hiermit einverstanden.
          Darüber hinaus haben wir einen Datenverarbeitungsvertrag mit MailChimp auf Basis der sog.
          EU-Standardvertragsklauseln geschlossen. Eine sonstige Weitergabe Ihrer E-Mail-Adresse an Dritte erfolgt nicht.

          Sie können sich jederzeit von unserem Newsletter abmelden. In jeder E-Mail mit unserem Newsletter ist ein Abmeldelink enthalten.
          Sie können auch jederzeit Ihre Einwilligung in die Nutzung ihrer E-Mail-Adresse für die Zukunft uns gegenüber widerrufen.
          Nutzen Sie hierzu bitte die unten angegeben Kontaktmöglichkeiten.
            </h4>
        <br />
        <h3>6. Webshop (falls vorhanden)</h3>
        <h4>
          Wir weisen darauf hin, dass zum Zweck des einfacheren Einkaufsvorganges und zur späteren Vertragsabwicklung vom Webshop-Betreiber
          im Rahmen von Cookies die IP-Daten des Anschlussinhabers gespeichert werden, ebenso wie Name, Anschrift und Zahlungsmittel des Käufers.

          Darüber hinaus werden zum Zweck der Vertragsabwicklung folgende Daten auch bei uns gespeichert: (bitte Daten ergänzen).
          Die von Ihnen bereit gestellten Daten sind zur Vertragserfüllung bzw. zur Durchführung vorvertraglicher Massnahmen erforderlich.
          Ohne diese Daten können wir den Vertrag mit Ihnen nicht abschliessen. Eine Datenübermittlung an Dritte erfolgt nicht,
          mit Ausnahme der Übermittlung der Kreditkartendaten an die abwickelnden Bankinstitute/Zahlungsdienstleister zum Zwecke
          der Abbuchung des Einkaufspreises, an das von uns beauftragte Transportunternehmen/Versandunternehmen zur Zustellung der
          Ware sowie an unseren Steuerberater zur Erfüllung unserer steuerrechtlichen Verpflichtungen.

          Nach Abbruch des Einkaufsvorganges werden die bei uns gespeicherten Daten gelöscht.
          Im Falle eines Vertragsabschlusses werden sämtliche Daten aus dem Vertragsverhältnis
          bis zum Ablauf der steuerrechtlichen Aufbewahrungsfrist (10 Jahre) gespeichert.
          Die Daten Name, Anschrift, gekaufte Waren und Kaufdatum werden darüber hinaus gehend bis zum Ablauf der Produkthaftung (10 Jahre) gespeichert.
            </h4>
        <br />
        <h3>7. Ihre Rechte</h3>
        <h4>
          Ihnen stehen grundsätzlich die Rechte auf Auskunft,
          Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit,
          Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen
          das Datenschutzrecht verstösst oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind,
          können Sie sich bei der Aufsichtsbehörde beschweren.
            </h4>
        {/* Sie erreichen uns unter folgenden Kontaktdaten: */}

      </div>

      <FooterRedirection />
    </div >
  )

};

export default Privacy;



