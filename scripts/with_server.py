#!/usr/bin/env python3
"""with_server.py — Helper to launch a local server, wait for port readiness,
run a target command, and ensure server shutdown on exit.
"""
import argparse
import socket
import subprocess
import sys
import time

def wait_for_port(port: int, host: str = "127.0.0.1", timeout: float = 30.0) -> bool:
    start = time.time()
    while time.time() - start < timeout:
        try:
            with socket.create_connection((host, port), timeout=1.0):
                return True
        except (OSError, ConnectionRefusedError):
            time.sleep(0.5)
    return False

def main():
    parser = argparse.ArgumentParser(description="Run command with background server")
    parser.add_argument("--server", required=True, help="Command to start server")
    parser.add_argument("--port", type=int, default=4321, help="Port to wait for")
    parser.add_argument("cmd", nargs=argparse.REMAINDER, help="Command to run after server starts")

    args = parser.parse_args()
    cmd = args.cmd
    if cmd and cmd[0] == "--":
        cmd = cmd[1:]

    if not cmd:
        print("Error: No command specified to run.", file=sys.stderr)
        sys.exit(1)

    print(f"Starting server: {args.server}")
    proc = subprocess.Popen(args.server, shell=True)
    try:
        print(f"Waiting for port {args.port}...")
        if not wait_for_port(args.port):
            print(f"Timeout waiting for server on port {args.port}", file=sys.stderr)
            sys.exit(1)
        print(f"Server is ready on port {args.port}. Running target command...")
        res = subprocess.run(cmd)
        sys.exit(res.returncode)
    finally:
        print("Shutting down server...")
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()

if __name__ == "__main__":
    main()
