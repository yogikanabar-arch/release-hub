#!/bin/bash
cd "$(dirname "$0")"
echo "Starting Release Hub..."
python3 -m http.server 8765 &
sleep 1
open "http://localhost:8765/index.html"
echo "Release Hub is running at http://localhost:8765/index.html"
echo "Close this window to stop the server"
wait
