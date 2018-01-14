FROM arm32v7/python:3.7.0a4-stretch

# Copy the Python Script to blink LED
COPY led_blinker.py ./

# Intall the rpi.gpio python module
RUN pip install --no-cache-dir rpi.gpio

# Trigger Python script
CMD ["python", "./led_blinker.py"]