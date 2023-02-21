# Installation

This guide will walk you through the installation process for Nimbus Cloud Bridge.

## Prerequisites

Before you begin, make sure you have the following prerequisites:

- Java Development Kit (JDK) 11 or later
- Node.js version 12 or later
- npm (the Node.js package manager)
- A valid account with at least one of the following cloud providers: Amazon Web Services (AWS), Google Cloud Platform (GCP), or Microsoft Azure.

## Installation Steps

1. Clone the Nimbus Cloud Bridge repository:
```
git clone https://github.com/tensornetics/nimbus-cloud-bridge.git
```
2. Install the required Node.js dependencies:
```
cd nimbus-cloud-bridge/web
npm install
```
 3. Build the web application:
```
npm run build
```
4. Install the required Java dependencies:
```
cd ../api
./gradlew build
```
5. Deploy the application to your chosen cloud provider:
* **AWS**: Run the following command from the root directory of the repository:
```
cd deployment/aws
./deploy.sh
```
* **GCP**: Run the following command from the root directory of the repository:
```
cd deployment/gcp
./deploy.sh
```
* **Azure**: Run the following command from the root directory of the repository:
```
cd deployment/azure
./deploy.ps1
```
6. Follow the on-screen instructions to complete the deployment process.

## Conclusion
Congratulations! You have successfully installed Nimbus Cloud Bridge. If you encounter any issues during the installation process, please refer to the troubleshooting guide or contact our support team for assistance.
