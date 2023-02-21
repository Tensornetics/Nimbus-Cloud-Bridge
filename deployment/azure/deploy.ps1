param(
    [Parameter(Mandatory=$true)][string]$ResourceGroupName,
    [Parameter(Mandatory=$true)][string]$StorageAccountName,
    [Parameter(Mandatory=$true)][string]$Location
)

# Set subscription
Set-AzContext -Subscription $SubscriptionId

# Create resource group
New-AzResourceGroup -Name $ResourceGroupName -Location $Location

# Deploy ARM template
$deployParameters = @{
    resourceGroupName = $ResourceGroupName
    templateFile = 'arm-template.json'
    templateParameterObject = @{
        storageAccountName = $StorageAccountName
        location = $Location
    }
}

New-AzResourceGroupDeployment @deployParameters

echo "Nimbus-Cloud-Bridge deployed to Azure successfully!"
