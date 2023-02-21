#!/bin/bash

# Set environment variables
export AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
export AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
export DATABASE_URL=<your-database-url>
export DATABASE_USERNAME=<your-database-username>
export DATABASE_PASSWORD=<your-database-password>

# Create persistent volume for data storage
kubectl apply -f data-pvc.yaml

# Deploy Nimbus-Cloud-Bridge application
kubectl apply -f deployment.yaml

echo "Nimbus-Cloud-Bridge deployed successfully!"
