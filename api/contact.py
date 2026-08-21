"""
Vercel Serverless Function — /api/contact
Environment variables (isi di Vercel dashboard > Settings > Environment Variables):
- GMAIL_ADDRESS
- GMAIL_APP_PASSWORD
- CONTACT_RECEIVER
"""

import json
import os
import re
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from http.server import BaseHTTPRequestHandler

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


class handler(BaseHTTPRequestHandler):
    def _cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Type", "application/json")

    def _respond(self, status, payload):
        self.send_response(status)
        self._cors_headers()
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode())

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors_headers()
        self.end_headers()

    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            data = json.loads(self.rfile.read(length) or b"{}")
        except (ValueError, json.JSONDecodeError):
            return self._respond(400, {"status": "error", "detail": "Body tidak valid"})

        name = (data.get("name") or "").strip()
        email = (data.get("email") or "").strip()
        message = (data.get("message") or "").strip()

        if not name or not message:
            return self._respond(400, {"status": "error", "detail": "Nama dan pesan wajib diisi"})
        if not EMAIL_RE.match(email):
            return self._respond(400, {"status": "error", "detail": "Email tidak valid"})

        gmail_address = os.environ.get("GMAIL_ADDRESS")
        gmail_app_password = os.environ.get("GMAIL_APP_PASSWORD")
        receiver = os.environ.get("CONTACT_RECEIVER", gmail_address)

        if not gmail_address or not gmail_app_password:
            return self._respond(500, {"status": "error", "detail": "Konfigurasi email belum diatur di server"})

        msg = MIMEMultipart()
        msg["From"] = gmail_address
        msg["To"] = receiver
        msg["Subject"] = f"[Portofolio] Pesan baru dari {name}"
        msg["Reply-To"] = email
        msg.attach(MIMEText(f"Nama: {name}\nEmail: {email}\n\nPesan:\n{message}", "plain"))

        try:
            with smtplib.SMTP("smtp.gmail.com", 587) as server:
                server.starttls()
                server.login(gmail_address, gmail_app_password)
                server.sendmail(gmail_address, receiver, msg.as_string())
        except Exception as e:
            return self._respond(500, {"status": "error", "detail": f"Gagal mengirim email: {e}"})

        return self._respond(200, {"status": "sent"})
