#!/bin/bash

set -e

# Set AWS region
export AWS_DEFAULT_REGION=us-west-2

# Deploy CloudFormation stack
aws cloudformation deploy \
  --template-file cloudformation.yaml \
  --stack-name nimbus-cloud-bridge \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides AWS_S3_BUCKET_NAME=$AWS_S3_BUCKET_NAME

echo "Nimbus-Cloud-Bridge deployed to AWS successfully!"
