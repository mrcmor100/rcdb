# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV RCDB_HOME=/app
ENV PYTHONPATH="/app:/app/python:/app/rcdb_web"
ENV PATH="$RCDB_HOME:$RCDB_HOME/bin:$PATH"
ENV HOST=0.0.0.0
ENV PORT=5000

# Create a working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
# Install Python dependencies for both rcdb and rcdb_web
RUN pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir -r rcdb_web/requirements.txt

# Expose port 5000 for the Flask app
EXPOSE ${PORT}

# Command to run the Flask app
CMD ["python", "start_www.py"]
