#!/usr/bin/env python3
# ==============================================================================
# Sensor Reports Exporter
# File: /config/scripts/extract_sensors.py
# Purpose: Export current HA states to daily CSV for archival/reporting
# Output:  /config/sensor_reports/sensors_YYYYMMDD.csv
# Auth:    Reads ha_long_lived_token from /config/secrets.yaml
# URL:     Defaults to http://192.168.1.30:8123 (override with HA_URL env var)
# ==============================================================================

import os
import sys
import csv
import json
import datetime as dt

try:
    import requests
    import yaml
except Exception as e:
    print(f"[ERROR] Missing dependency: {e}", file=sys.stderr)
    sys.exit(2)

CONFIG_DIR = "/config"
SECRETS_PATH = os.path.join(CONFIG_DIR, "secrets.yaml")
DEFAULT_URL = os.environ.get("HA_URL", "http://192.168.1.30:8123")
REPORT_DIR = os.path.join(CONFIG_DIR, "sensor_reports")


def load_token_from_secrets(secrets_path: str, key: str = "ha_long_lived_token") -> str:
    if not os.path.exists(secrets_path):
        raise FileNotFoundError(f"Secrets file not found: {secrets_path}")
    with open(secrets_path, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f) or {}
    token = data.get(key)
    if not token:
        raise KeyError(f"Secret '{key}' not found in {secrets_path}")
    return token


def fetch_states(base_url: str, token: str):
    url = f"{base_url.rstrip('/')}/api/states"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }
    resp = requests.get(url, headers=headers, timeout=20)
    resp.raise_for_status()
    return resp.json()


def ensure_dir(path: str):
    os.makedirs(path, exist_ok=True)


def to_iso(ts: str) -> str:
    # Home Assistant returns ISO timestamps; keep them as-is for portability
    return ts or ""


def write_csv(states, out_path: str):
    # Define export columns (stable, human-usable)
    fieldnames = [
        "domain",
        "entity_id",
        "name",
        "state",
        "unit_of_measurement",
        "device_class",
        "state_class",
        "last_changed",
        "last_updated",
    ]

    with open(out_path, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for s in states:
            entity_id = s.get("entity_id", "")
            domain = entity_id.split(".", 1)[0] if "." in entity_id else ""
            attrs = s.get("attributes", {}) or {}
            row = {
                "domain": domain,
                "entity_id": entity_id,
                "name": attrs.get("friendly_name", ""),
                "state": s.get("state", ""),
                "unit_of_measurement": attrs.get("unit_of_measurement", ""),
                "device_class": attrs.get("device_class", ""),
                "state_class": attrs.get("state_class", ""),
                "last_changed": to_iso(s.get("last_changed", "")),
                "last_updated": to_iso(s.get("last_updated", "")),
            }
            writer.writerow(row)


def main():
    try:
        token = os.environ.get("HA_TOKEN") or load_token_from_secrets(SECRETS_PATH)
    except Exception as e:
        print(f"[ERROR] Unable to read token: {e}", file=sys.stderr)
        sys.exit(3)

    base_url = os.environ.get("HA_URL", DEFAULT_URL)

    try:
        states = fetch_states(base_url, token)
    except Exception as e:
        print(f"[ERROR] Failed to fetch states from {base_url}: {e}", file=sys.stderr)
        sys.exit(4)

    ensure_dir(REPORT_DIR)
    today = dt.datetime.now().strftime("%Y%m%d")
    out_file = os.path.join(REPORT_DIR, f"sensors_{today}.csv")

    try:
        write_csv(states, out_file)
    except Exception as e:
        print(f"[ERROR] Failed to write CSV: {e}", file=sys.stderr)
        sys.exit(5)

    print(f"[OK] Exported {len(states)} entities to {out_file}")
    sys.exit(0)


if __name__ == "__main__":
    main()