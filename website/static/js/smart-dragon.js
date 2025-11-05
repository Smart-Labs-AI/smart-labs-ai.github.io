// smartdragon-chat.js 
(function () {
  class SmartDragonChat extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      const ATTR = (name, fallback = "") => (this.getAttribute(name) || fallback).trim();
      this.cfg = {
        avatarSrc: ATTR("avatar-src", "/images/smart-dragon/smart-dragon-icon.svg"),
        sendButtonSrc: ATTR("avatar-src", "/images/smart-dragon/send-icon.svg"),
        webhookUrl: ATTR("webhook-url", "https://n8n.infra.smart-labs.ai/webhook/5c2012cb-985d-4e65-bbc4-308999ffff93/chat"),
        termsUrl: ATTR("terms-url", "/solution/smart-dragon/nutzungsbedingungen-smart-dragon/"),
        streaming: ATTR("streaming", "true").toLowerCase() === "true",
        businessSessionId: ATTR("business-session-id", "smart-dragon-website"),
        clientSessionKey: ATTR("client-session-key", "smartdragon_client_session_v1"),
        uiOpenKey: ATTR("ui-open-key", "smartdragon_ui_open_v1"),
        consentKey: ATTR("consent-key", "smartdragon_consent_v1"),
      };

      const style = document.createElement("style");
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;600;700;800&display=swap');
        :host {
          all: initial;
          font-family: var(--chat--font-family, 'Libre Franklin'), system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }
        *, *::before, *::after { box-sizing: border-box; }

        .smart-dragon-overlay {
          position: fixed; inset: 0;
          backdrop-filter: blur(15px) saturate(110%);
          -webkit-backdrop-filter: blur(15px) saturate(110%);
          background: rgba(24, 24, 64, 0.7);
          z-index: 900; opacity: 0; pointer-events: none;
          transition: opacity 0.4s ease-in-out;
        }
        .smart-dragon-overlay.active { opacity: 1; pointer-events: auto; }

        .smart-dragon-chat {
          display: flex; flex-direction: column; gap: 1rem;
          padding: 2rem 7rem; margin: 5rem auto 0 auto;
          overflow-y: auto; max-height: 70vh;
        }

        .smart-dragon-message {
          font-size: 16px; line-height: 1.6; word-wrap: break-word;
        }
        .smart-dragon-message.user {
          padding: 0.6rem 1rem; border-radius: 99px;
          background-color: rgba(255, 255, 255, 0.2); color: white;
          align-self: flex-end;
        }
        .smart-dragon-message.ai {
          color: white; align-self: flex-start; white-space: pre-wrap;
        }
        .smart-dragon-message.ai a {
          color: rgba(255, 255, 255, 0.9); text-decoration: underline;
        }

        /* CONSENT CHECKBOX */
        .consent-box {
          display: flex; align-items: flex-start; gap: 0.75rem;
          padding: 1rem; margin: 0.5rem 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 65%; align-self: flex-start;
        }
        .consent-box input[type="checkbox"] {
          margin-top: 0.2rem; cursor: pointer;
          width: 20px; height: 20px; flex-shrink: 0;
          accent-color: #F37536;
        }
        .consent-box label {
          color: white; font-size: 15px; line-height: 1.5;
          cursor: pointer; user-select: none;
        }
        .consent-box label a {
          color: #F37536; text-decoration: underline;
        }

        .typing-caret {
          display: inline-block; width: 8px; height: 1.1em;
          margin-left: 2px; transform: translateY(2px);
          border-left: 2px solid currentColor;
          animation: caretBlink 1.2s steps(2, start) infinite;
        }
        @keyframes caretBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }

        .smart-dragon-box {
          display: flex; flex-direction: row; align-items: center;
          max-width: 320px; max-height: 40px; width: 320px; height: 40px;
          position: fixed; bottom: 1rem; left: 50%; transform: translateX(-50%);
          z-index: 1000; padding: 7px;
          border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 99px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 43, 0.37);
          transition: max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .smart-dragon-box::before {
          content: ''; position: absolute; inset: 0; border-radius: inherit;
          background: linear-gradient(0deg, rgba(0, 0, 43, 0.3), rgba(0, 0, 43, 0.3)),
                      linear-gradient(137.77deg, rgba(168, 27, 88, 0.25) 0.21%, rgba(60, 49, 152, 0.25) 99.6%);
          backdrop-filter: blur(10px); z-index: -1;
        }
        .smart-dragon-box::after {
          content: ''; position: absolute; inset: 0; border-radius: inherit;
          background: linear-gradient(0deg, rgba(0, 0, 43, 0.2), rgba(0, 0, 43, 0.2)),
                      linear-gradient(137.77deg, rgba(168, 27, 88, 0.15) 0.21%, rgba(60, 49, 152, 0.15) 99.6%);
          backdrop-filter: blur(10px) saturate(150%); z-index: -1;
        }

        .smart-dragon-box.expanded {
          max-width: calc(100% - 1em); max-height: 120px;
          width: 620px; height: 120px; padding: 12px; border-radius: 24px;
          align-items: flex-start;
        }
        .smart-dragon-box.expanded .input textarea {
          height: 80px; overflow-y: auto;
        }

        .logo {
          max-width: 20px; max-height: 20px; flex-shrink: 0; z-index: 1;
        }
        .logo img { width: 100%; height: 100%; object-fit: contain; }

        .send-button {
          max-width: 24px; max-height: 24px; flex-shrink: 0;
          cursor: pointer; z-index: 1; opacity: 1;
          transition: opacity 0.2s;
        }
        .send-button:hover { opacity: 0.8; }
        .send-button.disabled { opacity: 0.3; pointer-events: none; }

        .input {
          margin: 0 0.5rem; flex-grow: 1; z-index: 1;
        }
        .input textarea {
          all: unset; width: 100%; height: 20px;
          font-family: inherit; font-size: 13px; color: white;
          resize: none; overflow: hidden;
          transition: height 0.4s;
          line-height: 20px;
          padding-top: 3px;
        }
        .input textarea::placeholder { color: rgba(255, 255, 255, 0.5); font-size: 13px; }
        .input textarea:disabled { opacity: 0.5; }

        .smart-dragon-box .input {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s, pointer-events 0s;
        }

        .smart-dragon-box:not(.expanded) .input {
          opacity: 0;
          pointer-events: none;
        }

        .smart-dragon-chat::-webkit-scrollbar { width: 8px; }
        .smart-dragon-chat::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .smart-dragon-chat::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 4px; }

        @media (max-width: 768px) {
          .smart-dragon-chat { padding: 2rem; }
        }
      `;

      const wrap = document.createElement("div");
      wrap.className = "root";
      wrap.innerHTML = `
        <div class="smart-dragon-overlay">
          <div class="smart-dragon-chat"></div>
        </div>
        <div class="smart-dragon-box">
          <div class="logo"><img src="${this.cfg.avatarSrc}" alt="Logo" /></div>
          <div class="input"><textarea placeholder="Smart Dragon fragen" disabled></textarea></div>
          <div class="send-button disabled"><img src="${this.cfg.sendButtonSrc}" alt="Send" /></div>
        </div>
      `;

      this.shadowRoot.append(style, wrap);

      this.$box = this.shadowRoot.querySelector(".smart-dragon-box");
      this.$overlay = this.shadowRoot.querySelector(".smart-dragon-overlay");
      this.$chat = this.shadowRoot.querySelector(".smart-dragon-chat");
      this.$input = this.shadowRoot.querySelector(".input textarea");
      this.$send = this.shadowRoot.querySelector(".send-button");

      this.stage = 1;
      this.sending = false;
      this.consent = false;

      this._loadConsent();
      this._initUI();
      this._attachEvents();
    }

    _loadConsent() {
      try {
        this.consent = localStorage.getItem(this.cfg.consentKey) === "1";
      } catch {}
      this._updateInput();
    }

    _saveConsent() {
      try {
        localStorage.setItem(this.cfg.consentKey, "1");
      } catch {}
    }

    _updateInput() {
      const ok = this.consent && !this.sending;
      this.$input.disabled = !ok;
      this.$send.classList.toggle("disabled", !ok);
    }

    _initUI() {
      this._addBot("Herzlich willkommen! 👋 Ich bin <strong>Smart Dragon</strong> – dein Assistent.");

      if (!this.consent) {
        const box = document.createElement("div");
        box.className = "consent-box";
        box.innerHTML = `
          <input type="checkbox" id="terms-check" />
          <label for="terms-check">
            Ich akzeptiere die <a href="${this.cfg.termsUrl}" target="_blank">Nutzungsbedingungen</a>
          </label>
        `;
        this.$chat.appendChild(box);

        const cb = box.querySelector("#terms-check");
        cb.addEventListener("change", () => {
          if (cb.checked) {
            this.consent = true;
            this._saveConsent();
            this._updateInput();
            box.remove();
            this._addBot("Super! Sie können jetzt Fragen stellen. 😊");
            this._enterStage3();
          }
        });
      }
    }

    _attachEvents() {
      this.$box.addEventListener("click", (e) => {
        if (this.stage === 1) {
          this.$chat.children.length ? this._enterStage3() : this._enterStage2();
        }
        e.stopPropagation();
      });

      document.addEventListener("click", (e) => {
        if (!e.composedPath().includes(this.$box) && this.stage === 2) this._enterStage1();
      });

      this.$send.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!this.$send.classList.contains("disabled")) this._send();
      });

      this.$overlay.addEventListener("click", () => this._enterStage2());

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") this._enterStage1();
      });

      this.$input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          if (!this.$send.classList.contains("disabled")) this._send();
        }
      });
    }

    _enterStage1() {
      this.stage = 1;
      this.$box.classList.remove("expanded");
      this.$overlay.classList.remove("active");
    }

    _enterStage2() {
      this.stage = 2;
      this.$box.classList.add("expanded");
      this.$overlay.classList.remove("active");
      this.$input.focus();
    }

    _enterStage3() {
      this.stage = 3;
      this.$box.classList.add("expanded");
      this.$overlay.classList.add("active");
      this.$input.focus();
    }

    _addUser(text) {
      const d = document.createElement("div");
      d.className = "smart-dragon-message user";
      d.textContent = text;
      this.$chat.appendChild(d);
      this.$chat.scrollTop = this.$chat.scrollHeight;
    }

    _addBot(html) {
      const d = document.createElement("div");
      d.className = "smart-dragon-message ai";
      d.innerHTML = html;
      this.$chat.appendChild(d);
      this.$chat.scrollTop = this.$chat.scrollHeight;
      return d;
    }

    async _send() {
      const txt = this.$input.value.trim();
      if (!txt || !this.consent || this.sending) return;

      this.$input.value = "";
      this._addUser(txt);

      if (this.stage !== 3) this._enterStage3();

      this.sending = true;
      this._updateInput();

      const loader = this._addBot('<span class="typing-caret"></span>');

      try {
        const res = await fetch(this.cfg.webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic c21hcnRsYWJzOkpmOXR0biEmIWRxJk01bkFFUTNSeENkITNyQ3B6eHBr"
          },
          body: JSON.stringify({
            action: "sendMessage",
            sessionId: this._session(),
            chatInput: txt,
            metadata: { sessionId: this.cfg.businessSessionId }
          })
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        // STREAMING
        if (this.cfg.streaming && res.body) {
          loader.remove();
          await this._stream(res.body);
        } else {
          const raw = await res.text();
          let data = {};
          try { data = JSON.parse(raw); } catch {}
          loader.remove();
          const reply = data.text || data.answer || data.message || raw || "…";
          this._addBot(this._md(reply));
        }

      } catch (e) {
        loader.remove();
        this._addBot("⚠️ Fehler beim Senden.");
      } finally {
        this.sending = false;
        this._updateInput();
        this.$input.focus();
      }
    }

    async _stream(body) {
      const reader = body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let text = "";

      const msg = this._addBot('<span class="txt"></span><span class="typing-caret"></span>');
      const txtEl = msg.querySelector(".txt");
      const caret = msg.querySelector(".typing-caret");

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r?\n/);
        buffer = lines.pop() || "";

        for (let line of lines) {
          line = line.trim();
          if (!line || line.startsWith("data:")) continue;

          try {
            const obj = JSON.parse(line);
            if (obj.type === "item" && obj.content) {
              text += obj.content;
              txtEl.innerHTML = this._md(text);
              this.$chat.scrollTop = this.$chat.scrollHeight;
            }
          } catch {}
        }
      }

      if (caret) caret.remove();
      txtEl.innerHTML = this._md(text);
    }

    _session() {
      try {
        let id = localStorage.getItem(this.cfg.clientSessionKey);
        if (!id) {
          id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
          });
          localStorage.setItem(this.cfg.clientSessionKey, id);
        }
        return id;
      } catch {
        return "temp-session";
      }
    }

    _esc(s) {
      return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    _md(s) {
      let o = this._esc(s);
      o = o.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      o = o.replace(/\*(.+?)\*/g, "<em>$1</em>");
      o = o.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, u) => {
        return `<a href="${this._esc(u).replace(/&amp;/g, "&")}" target="_blank">${this._esc(t)}</a>`;
      });
      return o;
    }
  }

  customElements.define("smartdragon-chat", SmartDragonChat);
})();