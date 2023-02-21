#!/bin/bash

set -e

# Set GCP project and zone
gcloud config set project $GCP_PROJECT_ID
gcloud config set compute/zone us-west1-a

# Deploy Cloud Deployment Manager deployment
gcloud deployment-manager deployments create nimbus-cloud-bridge --config deployment-manager.yaml

echo "Nimbus-Cloud-Bridge deployed to GCP successfully!"
