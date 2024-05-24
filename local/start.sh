echo "Starting portphonix..."
docker-compose up --build -d

echo "Application is running in http://127.0.0.1:8087..."
echo "View logs..."
docker logs -f portphonix