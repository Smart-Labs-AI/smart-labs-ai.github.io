// smartdragon-chat.js — Web Component mit neuem CI (Smart Dragon)

(function () {
  class SmartDragonChat extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      // ---- Attribute / Config ----
      const ATTR = (name, fallback = "") => (this.getAttribute(name) || fallback).trim();

      this.cfg = {
        avatarSrc: ATTR("avatar-src", "https://chatbot.f-abc.de/chat/avatar.png"),
        webhookUrl: ATTR("webhook-url", "https://n8n.infra.smart-labs.ai/webhook/5c2012cb-985d-4e65-bbc4-308999ffff93/chat"),
        termsUrl: ATTR("terms-url", "#"),
        title: ATTR("title", "Smart Dragon"),
        subtitle: ATTR("subtitle", "Experte für TPK Vermögensverwaltungs KG"),
        streaming: ATTR("streaming", "false").toLowerCase() === "true",

        businessSessionId: ATTR("business-session-id", "smart-dragon-website"),
        clientSessionKey: ATTR("client-session-key", "smartdragon_client_session_v1"),
        uiOpenKey: ATTR("ui-open-key", "smartdragon_ui_open_v1"),
        hintSeenKey: ATTR("hint-seen-key", "smartdragon_hint_seen_v1"),
      };

      // ---- Styles (neues CI: Orange dominant) ----
      const style = document.createElement("style");
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;600;700;800&display=swap');
        :host { all: initial; font-family: var(--chat--font-family, 'Libre Franklin'), system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
        *, *::before, *::after { box-sizing: border-box; }

        :root, .root{
          --chat--color-primary: #F37536;
          --chat--color-primary-shade-50: #DF6337;
          --chat--color-primary-shade-100: #DF6337;
          --chat--color-secondary: #13403B; /* leicht heller als #0B3437 für Lesbarkeit */
          --chat--color-secondary-shade-50: #0B3437;

          /* Panel/Ink/Borders (Light Defaults) */
          --panel:#ffffff; 
          --ink:#0f172a; 
          --border:#d8e2ee; 
          --shadow:0 12px 30px rgba(2,6,23,.14);

          /* >>> Hintergrund-Variablen (werden von index.html durchgereicht) */
          --bg-base-1: var(--chat--bg-base-1, #FFFDFC);
          --bg-base-2: var(--chat--bg-base-2, #FFF6F0);
          --bg-accent: var(--chat--bg-accent, rgba(243,117,54,.08));
          --bg-accent-2: var(--chat--bg-accent-2, rgba(11,52,55,.06));
        }

        /* Toggle */
        .chat-toggle{
          position:fixed; bottom:24px; right:24px; z-index:9998;
          width:64px; height:64px; border-radius:50%; border:none; cursor:pointer;
          background:var(--chat--color-primary); display:grid; place-items:center;
          box-shadow:0 6px 18px rgba(243,117,54,.25);
          transition:transform .2s ease, box-shadow .2s; overflow:hidden;
        }
        .chat-toggle:not(.hidden){ animation:pulse-bubble 2.8s ease-in-out infinite; }
        .chat-toggle:hover{ transform:scale(1.05); box-shadow:0 10px 24px rgba(243,117,54,.32); }
        .chat-toggle img{ width:100%; height:85%; object-fit:cover; border-radius:90%; }

        @keyframes pulse-bubble{
          0%,100%{ transform:scale(1); box-shadow:0 6px 18px rgba(243,117,54,.25); }
          50%{ transform:scale(1.08); box-shadow:0 10px 24px rgba(243,117,54,.35); }
        }

        /* Box */
        .chatbox{
          position:fixed; right:24px; bottom:20px;
          background:var(--panel);
          width: var(--chat--window--width, 400px);
          border:1px solid var(--border); border-radius:24px;
          box-shadow:var(--shadow); display:flex; flex-direction:column; overflow:hidden; z-index:9999;
          opacity:0; pointer-events:none; transform:translateY(20px); transition:all .25s ease;
          height: var(--chat--window--height, 600px);
        }
        .chatbox.open{ opacity:1; pointer-events:auto; transform:translateY(0); }

        /* Header — Orange dominant */
        .chat-header{
          position:sticky; top:0; z-index:10; display:flex; align-items:center; gap:12px;
          padding:14px 16px; color:#fff;
          background:linear-gradient(180deg, var(--chat--color-primary-shade-50) 0%, var(--chat--color-primary) 100%);
          border-bottom:3px solid var(--chat--color-secondary);
        }
        .brand-avatar{ width:44px; height:44px; border-radius:50%; overflow:hidden; flex:0 0 44px;
          border:2px solid rgba(243,117,54,.9); background:#fff; display:grid; place-items:center; }
        .brand-avatar img{ width:100%; height:100%; object-fit:cover; }
        .titles{ display:flex; flex-direction:column; line-height:1.2; gap:2px; }
        .title{ font-weight:800; font-size:1.02rem; }
        .subtitle{ font-size:.86rem; opacity:.92; }
        .close-btn{ margin-left:auto; background:none; border:none; color:#fff; font-size:22px; cursor:pointer; line-height:1; }

        /* Body ––– Premium Hintergrund
          Layer 1/2: warme, sehr feine Vertikalverläufe
          Layer 3/4: subtile "Ring"-Echos (Orange & Grün) wie im Website-Hero
        */
        .chat-body{
          flex:1; min-height:0; overflow-y:auto; overscroll-behavior:contain; -webkit-overflow-scrolling:touch;
          padding:8px 14px 14px;

          background:
            radial-gradient(720px 380px at 110% 120%, var(--bg-accent), transparent 60%),
            radial-gradient(520px 280px at -20% -40%, var(--bg-accent-2), transparent 65%),
            linear-gradient(180deg, var(--bg-base-1) 0%, var(--bg-base-2) 100%);
        }

        /* DARK THEME (explizit über Attribut) */
        :host([theme="dark"]) .root{
          --panel:#0F1718;
          --ink:#E8EEF6;
          --border:#1f2a30;
          --shadow:0 16px 36px rgba(0,0,0,.45);
        }
        :host([theme="dark"]) .chat-body{
          background:
            radial-gradient(700px 360px at 110% 120%, var(--bg-accent), transparent 60%),
            radial-gradient(520px 280px at -20% -40%, var(--bg-accent-2), transparent 65%),
            linear-gradient(180deg, var(--bg-base-1, #0E1719) 0%, var(--bg-base-2, #0A1214) 100%);
        }
        :host([theme="dark"]) .row.bot .bubble{ background:var(--chat--color-secondary); color:#EAF2F4; }

        /* AUTO THEME (folgt System) */
        @media (prefers-color-scheme: dark) {
          :host([theme="auto"]) .root{
            --panel:#0F1718; --ink:#E8EEF6; --border:#1f2a30;
            --shadow:0 16px 36px rgba(0,0,0,.45);
          }
          :host([theme="auto"]) .chat-body{
            background:
              radial-gradient(700px 360px at 110% 120%, var(--bg-accent), transparent 60%),
              radial-gradient(520px 280px at -20% -40%, var(--bg-accent-2), transparent 65%),
              linear-gradient(180deg, var(--bg-base-1, #0E1719) 0%, var(--bg-base-2, #0A1214) 100%);
          }
        }

        .row{ display:flex; gap:10px; margin:10px 0; }
        .row.user{ justify-content:flex-end; }
        .row.bot{ justify-content:flex-start; }

        /* Bubbles */
        .bubble{
          max-width:82%; padding:12px 14px; border-radius:16px; background:#fff; color:var(--ink);
          border:1px solid var(--border); line-height:1.55; font-size:15.5px; white-space:pre-wrap; word-break:break-word;
          opacity:0; transform:translateY(6px) scale(.99); animation:bubble-in .18s ease forwards; box-shadow:0 6px 18px rgba(2,6,23,.08);
        }
        .row.bot .bubble{ background:var(--chat--color-secondary); color:#fff; border-color:transparent; }
        .row.bot .bubble a{ color:var(--chat--color-primary); text-decoration:underline; }
        .row.user .bubble{ background:#fff; color:var(--ink); border-color:#e6edf6; }
        @keyframes bubble-in{ to{ opacity:1; transform:translateY(0) scale(1); } }

        /* Pulse Glow */
        .bubble.new { animation: bubble-in .18s ease forwards, pulseGlow 2s ease; }
        @keyframes pulseGlow { 0% { box-shadow:0 0 0 rgba(243,117,54,0); } 40%{ box-shadow:0 0 18px rgba(243,117,54,.65); } 100%{ box-shadow:0 0 0 rgba(243,117,54,0); } }

        /* Quick Replies */
        .btns{ display:flex; flex-direction:column; gap:8px; margin-top:10px; }
        .qr{
          appearance:none; border:1px solid rgba(11,52,55,.25); border-radius:999px;
          background:linear-gradient(180deg,#ffffff,#fff6f0); color:#0B3437; font-weight:800;
          padding:11px 13px; text-align:left; cursor:pointer; transition:transform .05s ease, box-shadow .2s, background .2s;
          box-shadow:0 4px 14px rgba(11,52,55,.10);
        }
        .qr:hover{ background: var(--chat--color-primary, #F37536); color: var(--chat--color-on-primary, #FFF); box-shadow:0 6px 18px rgba(11,52,55,.14); }
        .qr:active{ transform:scale(.985); }
        .qr:disabled{ opacity:.6; cursor:not-allowed; }

        /* Composer */
        .chat-input{ display:flex; gap:8px; padding:10px; border-top:1px solid var(--border); background:#fff; }
        :host([theme="dark"]) .chat-input{ background:#0F1718; }
        .chat-input input{ flex:1; border:1px solid var(--border); border-radius:12px; padding:11px 12px; font-size:15px; outline:none; background:#fff; color:var(--ink); }
        :host([theme="dark"]) .chat-input input{ background:#0B1214; color:#E8EEF6; }
        .chat-input button{ min-width:96px; border:0; border-radius:12px; font-weight:800; color:#fff;
          background:linear-gradient(180deg, var(--chat--color-primary), var(--chat--color-primary-shade-50)); box-shadow:0 6px 16px rgba(243,117,54,.35); cursor:pointer; }
        .chat-input button:disabled{ filter:grayscale(.2); opacity:.85; cursor:not-allowed; }

        /* Loader Dots */
        .dots-loader{ display:flex; align-items:center; gap:6px; height:20px; }
        .dot{ width:8px; height:8px; border-radius:50%; background:var(--chat--color-primary); animation:dot-bounce 1.4s infinite; box-shadow:0 0 0 4px rgba(243,117,54,.18); }
        .dot:nth-child(2){ animation-delay:.15s } .dot:nth-child(3){ animation-delay:.30s }
        @keyframes dot-bounce{ 0%,80%,100%{ transform:translateY(0) scale(.8); opacity:.6 } 40%{ transform:translateY(-3px) scale(1); opacity:1 } }

        /* Hint Bubble */
        .hint-bubble{
          position:fixed; bottom:100px; right:24px; background:var(--chat--color-primary); color:#00143a;
          padding:8px 12px; border-radius:14px; font-size:14px; font-weight:700;
          box-shadow:0 4px 12px rgba(0,0,0,.18); opacity:0; transform:translateY(10px);
          transition:all .4s ease; z-index:10000; pointer-events:none; white-space:nowrap;
        }
        .hint-bubble.show{ opacity:1; transform:translateY(0); }

        /* Skeleton für die startende Bot-Bubble */
        .bubble.skeleton {
        position: relative;
        background: linear-gradient(90deg, #eef3f9 25%, #f6f9ff 37%, #eef3f9 63%);
        background-size: 400% 100%;
        animation: shimmer 1.2s ease-in-out infinite;
        border-color: transparent;
        min-height: 56px;
        }
        @keyframes shimmer { 0%{background-position:100% 0} 100%{background-position:-100% 0} }

        /* Blinkender Caret beim Streamen */
        .typing-caret {
        display:inline-block; width:8px; height:1.1em; margin-left:2px; transform:translateY(2px);
        box-shadow: inset 0 0 0 1px rgba(255,255,255,.0);
        border-left: 2px solid currentColor;
        animation: caretBlink 1s steps(2, start) infinite;
      }
      @keyframes caretBlink { 0%, 49%{opacity:1} 50%, 100%{opacity:0} 
      
      /* --- ADD to <style> (Streaming UX) --- */
      .bubble.streaming{
        position:relative;
        background: var(--chat--color-secondary);
        color:#fff;
        border-color:transparent;
        overflow:hidden;
        box-shadow:0 8px 22px rgba(2,6,23,.10);
        animation: bubbleBreathe 3s ease-in-out infinite;
      }
      @keyframes bubbleBreathe {
        0%,100%{ box-shadow:0 8px 22px rgba(2,6,23,.10) }
        50%{ box-shadow:0 10px 26px rgba(2,6,23,.16) }
      }
      .stream-wrap{ display:inline; }
      .stream-text .unit{ opacity:0; animation: unitIn .24s ease forwards; }
      @keyframes unitIn{ from{opacity:.1;filter:blur(.4px)} to{opacity:1;filter:blur(0)} }
      .bubble.done{ animation:pulseGlow 1.2s ease; }
      }

      /* === ADD: Streaming-UX 2.0 (ruhiger, seniorenfreundlich) === */

    /* Sanftere Typografie in Bot-Bubbles (etwas größer + mehr Zeilenhöhe) */
    .row.bot .bubble{
      font-size:16px;
      line-height:1.7;
    }

    /* Streaming-Bubble: Höhe sanft über Transition verändern (kein "Jump") */
    .bubble.streaming{
      transition: height 180ms ease, box-shadow 3s ease-in-out;
    }

    /* Ruhigeres Caret (langsameres Blinken) */
    .typing-caret{
      animation: caretBlink 1.2s steps(2, start) infinite;
    }

    /* Motion-Respekt: Weniger Animation für Nutzer mit Reduzierter Bewegung */
    @media (prefers-reduced-motion: reduce){
      .bubble.streaming{ transition: height 0ms linear; animation:none; }
      .bubble.done{ animation:none; }
      .typing-caret{ animation:none; }
    }
      `;

      // ---- Markup ----
      const wrap = document.createElement("div");
      wrap.className = "root";
      wrap.innerHTML = `
        <button class="chat-toggle" aria-label="Chat öffnen">
          <img src="${this.cfg.avatarSrc}" alt="Chatbot"/>
        </button>

        <div class="chatbox" aria-live="polite" aria-label="Smart Dragon Chat">
          <div class="chat-header">
            <div class="brand-avatar"><img src="${this.cfg.avatarSrc}" alt="Smart Dragon"/></div>
            <div class="titles">
              <div class="title">${this.cfg.title}</div>
              <div class="subtitle">${this.cfg.subtitle}</div>
            </div>
            <button class="close-btn" aria-label="Chat schließen" title="Schließen">&times;</button>
          </div>

          <div class="chat-body"></div>

          <div class="chat-input">
            <input type="text" placeholder="Was möchtest du wissen?" />
            <button>Senden</button>
          </div>
        </div>

        <div class="hint-bubble" hidden></div>
      `;

      this.shadowRoot.append(style, wrap);

      // ---- Refs ----
      this.$toggle = this.shadowRoot.querySelector(".chat-toggle");
      this.$box    = this.shadowRoot.querySelector(".chatbox");
      this.$close  = this.shadowRoot.querySelector(".close-btn");
      this.$body   = this.shadowRoot.querySelector(".chat-body");
      this.$input  = this.shadowRoot.querySelector(".chat-input input");
      this.$send   = this.shadowRoot.querySelector(".chat-input button");
      this.$hint   = this.shadowRoot.querySelector(".hint-bubble");

      // ---- Eingabe aktiv/gesperrt schalten ----
      this._setInputEnabled = (enabled) => {
        if (!this.$input || !this.$send) return;
        this.$input.disabled = !enabled;
        this.$send.disabled  = !enabled || this.sending === true;
        this.$input.placeholder = enabled ? "Was möchtest du wissen?" : "Bitte zuerst Nutzungsbedingungen bestätigen";
      };

      // ---- State ----
      this.open = false;
      this.sending = false;
      this.consent = false;

      // Eingabe initial sperren (kein Consent)
      this._setInputEnabled(false);

      // ---- Quick Replies (TPK) ----
        this.suggestions = [
            { label: "📘 AuA24", value: "Ich suche Informationen zur AuA24" },
            { label: "💹 Aktienkauf", value: "Wie kann ich Aktien der AuA24 kaufen?" },
            { label: "💰 Dividendensteuer", value: "Wie werden Dividenden versteuert?" },
            { label: "📊 Aktienwert", value: "Was ist der Nennwert auf meiner Aktie?" }
        ];

        // ---- Init UI ----
      this._bot("Herzlich willkommen! 👋 Ich bin <strong>Smart Dragon</strong> – dein Assistent für die <strong>TPK Vermögensverwaltungs KG</strong>. Hier verbinden wir <strong>Innovation</strong> und <strong>familiäre Werte</strong> im Einklang. Wie kann ich Ihnen helfen?", null, {highlight:true});
      this._bot(`Bitte bestätigen Sie unsere <a href="${this.cfg.termsUrl}" target="_blank" rel="noopener noreferrer">Nutzungsbedingungen</a>, um den Chat zu starten.`, [
        {label:"✅ Einverstanden – Chat starten", value:"consent"}
      ]);

      // ---- Persistenter UI-Status ----
      try {
        const wasOpen = (localStorage.getItem(this.cfg.uiOpenKey) === "1");
        if (wasOpen) this.openChat();
      } catch {}

      // ---- Events ----
      this.$toggle.addEventListener("click", () => this.openChat());
      this.$close .addEventListener("click", () => this.closeChat());
      this.$send  .addEventListener("click", () => this._handleSend());
      this.$input .addEventListener("keydown", (e) => { if (e.key === "Enter") this._handleSend(); });

      // ESC global (Host)
      window.addEventListener("keydown", (e) => { if (e.key === "Escape") this.closeChat(); });

      // Hint nach kurzer Zeit
      setTimeout(() => this._showHintOnce("💬 Frag mich was!"), 2500);
    }

    // ---- Public API ----
    openChat() {
      if (this.open) return;
      this.open = true;
      this.$box.classList.add("open");
      this.$toggle.classList.add("hidden");
      this.$toggle.style.display = "none";
      try { localStorage.setItem(this.cfg.uiOpenKey, "1"); } catch {}
      setTimeout(() => this.$input?.focus(), 60);
    }
    closeChat() {
      if (!this.open) return;
      this.open = false;
      this.$box.classList.remove("open");
      this.$toggle.classList.remove("hidden");
      this.$toggle.style.display = "grid";
      try { localStorage.setItem(this.cfg.uiOpenKey, "0"); } catch {}
    }

    // ---- UI helpers ----
    _bot(html, buttons=null, {highlight=false} = {}) {
      const row = document.createElement("div");
      row.className = "row bot";
      const bubble = document.createElement("div");
      bubble.className = highlight ? "bubble new" : "bubble";
      bubble.innerHTML = html;

      if (buttons && buttons.length) {
        const btns = document.createElement("div");
        btns.className = "btns";
        buttons.forEach(b => {
          const btn = document.createElement("button");
          btn.className = "qr";
          btn.textContent = b.label;
          btn.addEventListener("click", () => this._handleQuick(b.value, btn));
          btns.appendChild(btn);
        });
        bubble.appendChild(btns);
      }

      row.appendChild(bubble);
      this.$body.appendChild(row);
      this._scrollToEnd();

      if (highlight) {
        setTimeout(() => { bubble.classList.remove("new"); }, 2000);
        setTimeout(() => this._showHintOnce("👉 Schau dir unsere Werte an!"), 2500);
      }
      return bubble;
    }

    _user(text) {
      const row = document.createElement("div");
      row.className = "row user";
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.textContent = text;
      row.appendChild(bubble);
      this.$body.appendChild(row);
      this._scrollToEnd();
    }

    _loaderRow() {
      const row = document.createElement("div");
      row.className = "row bot";
      row.innerHTML = `<div class="bubble"><div class="dots-loader"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div></div>`;
      this.$body.appendChild(row);
      this._scrollToEnd();
      return row;
    }

    _stripButtonsFromLastBot() {
      const nodes = Array.from(this.$body.querySelectorAll(".row.bot .bubble"));
      for (let i = nodes.length - 1; i >= 0; i--) {
        const b = nodes[i].querySelector(".btns");
        if (b) { b.remove(); break; }
      }
    }

    _scrollToEnd() { this.$body.scrollTop = this.$body.scrollHeight; }

    _showHintOnce(text="👋 Frag mich was!") {
      try {
        if (localStorage.getItem(this.cfg.hintSeenKey) === "1") return;
        if (this.$box.classList.contains("open")) return;
        this.$hint.textContent = text;
        this.$hint.hidden = false;
        requestAnimationFrame(() => this.$hint.classList.add("show"));
        setTimeout(() => {
          this.$hint.classList.remove("show");
          setTimeout(() => { this.$hint.hidden = true; }, 400);
        }, 7500);
        localStorage.setItem(this.cfg.hintSeenKey, "1");
      } catch {}
    }

    // ---- Interaktionen ----
    async _handleQuick(value, btnEl) {
      if (value === "consent") {
        this.consent = true;
        this._stripButtonsFromLastBot();
        this._setInputEnabled(true);
        this._bot(
          "Super! 🎉 Danke für dein Vertrauen. Wähle ein Thema oder schreibe direkt unten im Chat:",
          this.suggestions,
          { highlight: true }
        );
        setTimeout(() => this.$input?.focus(), 50);
        return;
      }

      if (btnEl) btnEl.disabled = true;
      this._stripButtonsFromLastBot();
      this.suggestions = this.suggestions.filter(s => s.value !== value);
      this._user(value);

      if (this.consent) {
        await this._sendToWebhook(value);
        if (this.suggestions.length > 0) {
          this._bot("Weitere Themen? ↓", this.suggestions, { highlight: false });
        }
      }
    }

    async _handleSend() {
      const text = (this.$input.value || "").trim();
      if (!text || this.sending) return;
      this.$input.value = "";
      this._user(text);

      if (this.consent) {
        this.suggestions = this.suggestions.filter(s => s.value !== text);
        await this._sendToWebhook(text);
        if (this.suggestions.length > 0) {
          this._bot("Weitere Themen? ↓", this.suggestions, { highlight: false });
        }
      }
    }

    // ---- Helpers / Networking ----
    _uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = Math.random()*16|0, v = c === "x" ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    }
    _clientSessionId() {
      try {
        const k = this.cfg.clientSessionKey;
        let id = localStorage.getItem(k);
        if (!id) { id = this._uuid(); localStorage.setItem(k, id); }
        return id;
      } catch { return this._uuid(); }
    }
    _escape(str){ return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
    _escapeAttr(str){ return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
    _linkify(str){
      // Do not linkify inside existing anchors
      const parts = String(str).split(/(<a\b[^>]*>[\s\S]*?<\/a>)/gi);
      const urlRe = /(https?:\/\/[^\s<]+)/gi;
      const emailRe = /(?:^|[^\w@.])([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
      return parts.map((part) => {
        if (/^<a\b/i.test(part)) return part; // keep anchors intact
        let out = part;
        out = out.replace(urlRe, (m) => `<a href="${m}" target="_blank" rel="noopener noreferrer">${m}</a>`);
        out = out.replace(emailRe, (m, p1) => m.replace(p1, `<a href="mailto:${p1}">${p1}</a>`));
        return out;
      }).join("");
    }
    _markdownLite(str){
      const input = String(str);
      // Tokenize Markdown links [text](url)
      const tokens = [];
      const withPh = input.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, text, url) => {
        const idx = tokens.push({ text: String(text), url: String(url).trim() }) - 1;
        return `@@LINK_${idx}@@`;
      });
      // Escape everything
      let s = this._escape(withPh);
      // Bold and italic
      s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      s = s.replace(/\*(.+?)\*/g, "<em>$1</em>");
      // Restore link tokens with safe attributes and formatted inner text
      s = s.replace(/@@LINK_(\d+)@@/g, (m, idx) => {
        const t = tokens[Number(idx)] || {text:"", url:""};
        const href = this._escapeAttr(t.url);
        let inner = this._escape(t.text);
        inner = inner.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        inner = inner.replace(/\*(.+?)\*/g, "<em>$1</em>");
        const needTarget = /^https?:\/\//i.test(t.url);
        const isMailTo = /^mailto:/i.test(t.url);
        const isTel = /^tel:/i.test(t.url);
        const targetAttrs = needTarget ? ' target="_blank" rel="noopener noreferrer"' : '';
        const safeHref = isMailTo || isTel || needTarget ? href : href;
        return `<a href="${safeHref}"${targetAttrs}>${inner}</a>`;
      });
      // Markdown hard line breaks: two spaces at end of line
      s = s.replace(/\s{2,}\n/g, '<br/>\n');
      // Also convert Windows-style newlines if present with two trailing spaces
      s = s.replace(/\s{2,}\r\n/g, '<br/>\r\n');
      // Auto-link remaining plain URLs and emails outside anchors
      s = this._linkify(s);
      return s;
    }

    async _sendToWebhook(text) {
      if (!this.cfg.webhookUrl) {
        this._bot("⚠️ <strong>Fehler:</strong> Kein <code>webhook-url</code> gesetzt.");
        return;
      }
      this.sending = true;
      this._setInputEnabled(this.consent && !this.sending);
      const loader = this._loaderRow();

      try {
        const payload = {
          action: "sendMessage",
          sessionId: this._clientSessionId(),
          chatInput: text,
          metadata: { sessionId: this.cfg.businessSessionId }
        };
        const res = await fetch(this.cfg.webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": "Basic c21hcnRsYWJzOkpmOXR0biEmIWRxJk01bkFFUTNSeENkITNyQ3B6eHBr" },
          body: JSON.stringify(payload)
        });

        // Streaming branch (NDJSON) if enabled
        if (this.cfg.streaming) {
          if (!res.ok) {
            const rawErr = await res.text().catch(() => "");
            loader.remove();
            this._bot(`⚠️ <strong>Fehler:</strong> HTTP ${res.status}${rawErr ? ` – ${this._escape(rawErr).slice(0, 180)}` : ""}`);
            return;
          }

          const reader = res.body && res.body.getReader ? res.body.getReader() : null;
          if (!reader) {
            // Fallback to non-stream handling when body isn't readable
            const raw = await res.text();
            let data = {};
            try { data = JSON.parse(raw); } catch {}
            loader.remove();
            const reply = data.text || data.answer || data.message || data.output || data.reply || raw || "…";
            this._bot(this._markdownLite(reply), null, {highlight:true});
            return;
          }

          const decoder = new TextDecoder();
          let buffer = "";
          let rawAll = "";
          let bubble = null;
          let streamEl = null;  // <div class="stream-text">
          let caretEl = null;   // <span class="typing-caret">
          let accum = "";           // flushed, safe-to-render accumulated text
          let lastRendered = "";     // last rendered HTML snapshot
          let gotSomething = false;

          // New: buffering to reduce markdown jitter
          let pending = "";          // buffer waiting to be flushed

          // Flush on spaces and punctuation; defer if markdown is unfinished
          // Helper: determine if markdown is at a safe boundary (not inside unclosed tags)
          const isMarkdownBalanced = (s) => {
            // Track fenced code blocks (``` or ~~~)
            let inFence = null; // "```" or "~~~"
            for (let i = 0; i < s.length; i++) {
              const ch = s[i];
              const prev = i > 0 ? s[i - 1] : "";
              if (ch === '`' && prev !== '\\') {
                if (s.substr(i, 3) === "```") {
                  if (inFence === "```") { inFence = null; } else if (!inFence) { inFence = "```"; }
                  i += 2;
                  continue;
                }
              } else if (ch === '~' && prev !== '\\') {
                if (s.substr(i, 3) === "~~~") {
                  if (inFence === "~~~") { inFence = null; } else if (!inFence) { inFence = "~~~"; }
                  i += 2;
                  continue;
                }
              }
            }
            if (inFence) return false;

            // Inline code: require even number of unescaped single backticks when not in fences
            let inlineTicks = 0;
            for (let i = 0; i < s.length; i++) {
              if (s[i] === '`' && s[i - 1] !== '\\') inlineTicks++;
            }
            if (inlineTicks % 2 !== 0) return false;

            // Emphasis markers: avoid flushing in the middle of *, **, _, __ sequences
            // Check that counts from last newline are balanced enough to render progressively.
            const checkEmphasisBalanced = (txt, marker) => {
              // Count unescaped markers in tail segment (last 200 chars window to be pragmatic)
              const tail = txt.slice(-200);
              let count = 0;
              for (let i = 0; i < tail.length; i++) {
                if (tail[i] === marker && tail[i - 1] !== '\\') count++;
              }
              // odd count suggests we are inside emphasis
              return (count % 2 === 0);
            };
            if (!checkEmphasisBalanced(s, '*')) return false;
            if (!checkEmphasisBalanced(s, '_')) return false;

            // Lists/tables/headers are safe to stream as text; no special gating required
            return true;
          };

          // Helper: smooth scroll without touching _scrollToEnd()
          const smoothScrollEnd = () => {
            const el = this.$body;
            if (!el) return;
            if (typeof el.scrollTo === "function") {
              el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
            } else {
              el.scrollTop = el.scrollHeight;
            }
          };

          // Create defined streaming bubble with caret
          const ensureBubble = () => {
            if (bubble) return;
            if (loader.isConnected) loader.remove();
            bubble = this._bot(`<div class="stream-wrap"><div class="stream-text"></div><span class="typing-caret"></span></div>`, null, {highlight:true});
            bubble.classList.add("streaming");
            streamEl = bubble.querySelector(".stream-text");
            caretEl  = bubble.querySelector(".typing-caret");
            bubble.style.minHeight = "56px"; // stabilize layout
          };

          // Update HTML rendering based on current accum
          const updateHTML = () => {
            const fullHTML = this._markdownLite(accum);

            // Find tail without using lookbehind (robust)
            let tailHTML = "";
            if (fullHTML.startsWith(lastRendered)) {
              tailHTML = fullHTML.slice(lastRendered.length);
            } else {
              let i = 0, a = lastRendered, b = fullHTML, L = Math.min(a.length, b.length);
              while (i < L && a.charCodeAt(i) === b.charCodeAt(i)) i++;
              tailHTML = fullHTML.slice(i);
              lastRendered = fullHTML.slice(0, i);
            }

            streamEl.innerHTML = lastRendered + (tailHTML ? `<span class="unit">${tailHTML}</span>` : "");
            lastRendered = fullHTML;
            smoothScrollEnd();
          };

          // Decide flush breakpoints: spaces and gentle punctuation
          const breakpointRegex = /[ \t]|([,;:])(?=\s)|([.!?])(?=\s|$)|(\n)/g;

          // Simple, robust detectors for ongoing URLs/emails at the buffer tail
          const looksLikePartialUrl = (txt) => {
            // Find the last "wordy" run at the end (no whitespace)
            const m = txt.match(/([^\s<>"'(){}\[\]]+)$/);
            if (!m) return false;
            const tail = m[1];

            // Heuristics:
            // - starts with http:// or https:// but no trailing safe breaker
            if (/^https?:\/\//i.test(tail)) {
              // Completed URL should usually end with a breaker or common terminator
              return !/[)\].,;:!?](?:\s|$)|\s$/.test(tail);
            }

            // - www. prefix but no TLD yet (or clearly mid-domain)
            if (/^www\.[^\s]+$/i.test(tail)) {
              return !/\.[a-z]{2,}(?:[\/?#:]|$)/i.test(tail);
            }

            // - domain-like without scheme (foo.bar) but missing a safe end
            if (/^[^\s@]+\.[a-z]{2,}[^\s]*$/i.test(tail)) {
              // If it has path/query and no breaker, treat as partial
              return !/[\/?#](?:.*\s|$)|\s$/.test(tail) && !/[)\].,;:!?](?:\s|$)/.test(tail);
            }

            return false;
          };

          const looksLikePartialEmail = (txt) => {
            // Grab last run without whitespace
            const m = txt.match(/([^\s<>"'(){}\[\]]+)$/);
            if (!m) return false;
            const tail = m[1];

            // If it contains an @ but no domain end yet, likely partial
            if (/@/.test(tail)) {
              // Completed email usually has a dot-TLD; if missing, treat as partial
              if (!/@[^\s@]+\.[a-z]{2,}$/i.test(tail)) return true;
              // If it’s completed but not followed by a breaker, still allow flush
              return false;
            }
            return false;
          };

          // Time-based safeguard: flush at least every N ms if markdown balanced and no partial URL/email
          let lastFlushAt = performance.now();
          const FLUSH_MAX_LATENCY = 180; // ms

          // Flush pending buffer at breakpoints when markdown is balanced
          const flushIfReady = (force = false) => {
            if (!pending) return false;

            const now = performance.now();
            if (force) {
              // Even on force, avoid committing if we clearly end with a partial URL/email.
              if (!looksLikePartialUrl(accum + pending) && !looksLikePartialEmail(accum + pending)) {
                accum += pending;
                pending = "";
                updateHTML();
                lastFlushAt = now;
                return true;
              }
              return false;
            }

            // If the current combined text ends with a partial URL/email, do not flush yet.
            if (looksLikePartialUrl(accum + pending) || looksLikePartialEmail(accum + pending)) {
              return false;
            }

            let flushed = false;
            let start = 0;
            let m;
            breakpointRegex.lastIndex = 0;
            while ((m = breakpointRegex.exec(pending)) !== null) {
              const cut = m.index + (m[0].length); // include breakpoint char
              const portion = pending.slice(start, cut);
              const candidate = accum + portion;

              if (!isMarkdownBalanced(candidate)) {
                // stop at the first unsafe boundary
                break;
              }
              // commit this portion
              accum = candidate;
              start = cut;
              flushed = true;
            }

            if (flushed) {
              pending = pending.slice(start);
              updateHTML();
              lastFlushAt = now;
              return true;
            }

            // If nothing flushed and latency exceeded, try a conservative flush on whole pending if safe
            if (now - lastFlushAt > FLUSH_MAX_LATENCY && isMarkdownBalanced(accum + pending)) {
              accum += pending;
              pending = "";
              updateHTML();
              lastFlushAt = now;
              return true;
            }

            return false;
          };

          // Render new delta: buffer and flush in chunks
          const renderDelta = (delta) => {
            if (!delta) return;
            ensureBubble();
            gotSomething = true;

            pending += delta;

            // Try to flush at safe breakpoints when markdown is balanced
            flushIfReady(false);
          };

          // Finalize: flush remainder, remove caret, add done state
          const finalizeStream = () => {
            if (!bubble) return;
            // Force-flush any remaining buffered text (best effort)
            flushIfReady(true);
            if (caretEl && caretEl.isConnected) caretEl.remove();
            bubble.classList.remove("streaming");
            bubble.classList.add("done");
            bubble.style.minHeight = "";
          };

          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            const chunkText = decoder.decode(value, { stream: true });
            rawAll += chunkText;
            buffer += chunkText;
            const lines = buffer.split(/\r?\n/);
            buffer = lines.pop() || "";
            for (let line of lines) {
              line = (line || "").trim();
              if (!line) continue;
              if (line.startsWith("data:")) line = line.slice(5).trim();
              if (!line) continue;
              try {
                const obj = JSON.parse(line);
                const t = obj.type || obj.event || "";
                if (t === "begin") { ensureBubble(); gotSomething = true; continue; }
                if (t === "item") {
                  const c = obj.content ?? obj.data ?? obj.delta ?? "";
                  if (typeof c === "string" && c) renderDelta(c);
                  continue;
                }
                if (t === "end") { /* will finish after loop */ continue; }
                if (obj.content) renderDelta(String(obj.content));
              } catch {
                // Non-JSON line: append as raw text
                renderDelta(line + "\n");
              }
            }
          }

          // Trailing buffer
          let tail = (buffer || "").trim();
          if (tail) {
            if (tail.startsWith("data:")) tail = tail.slice(5).trim();
            try {
              const obj = JSON.parse(tail);
              const c = obj.content ?? obj.data ?? obj.delta ?? obj.text ?? "";
              if (c) renderDelta(String(c));
            } catch {
              renderDelta(tail);
            }
          }

          if (!gotSomething) {
            // Fallback: whole body as single message
            const raw = rawAll;
            let data = {};
            try { data = JSON.parse(raw); } catch {}
            if (loader.isConnected) loader.remove();
            const reply = data.text || data.answer || data.message || data.output || data.reply || raw || "…";
            this._bot(this._markdownLite(reply), null, {highlight:true});
          } else {
            if (loader.isConnected) loader.remove();
            finalizeStream();
          }

          return;
        }

        // Non-streaming (original) path
        const raw = await res.text();
        let data = {};
        try { data = JSON.parse(raw); } catch {}
        loader.remove();

        if (!res.ok) {
          this._bot(`⚠️ <strong>Fehler:</strong> HTTP ${res.status}${raw ? ` – ${this._escape(raw).slice(0, 180)}` : ""}`);
          return;
        }
        const reply = data.text || data.answer || data.message || data.output || data.reply || raw || "…";
        this._bot(this._markdownLite(reply), null, {highlight:true});
      } catch (e) {
        loader.remove();
        this._bot("⚠️ <strong>Fehler:</strong> Keine Antwort vom Server.");
      } finally {
        this.sending = false;
        this._setInputEnabled(this.consent && !this.sending);
      }
    }
  }

  customElements.define("smartdragon-chat", SmartDragonChat);
})();