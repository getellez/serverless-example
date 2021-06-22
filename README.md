

# Install Serverless framework package
```
npm i -g serverless@1.54.0
```

## Create serverless project
```
serverless create --template aws-nodejs --path aws-lambda-api
```

## Run lambda function locally
```
serverless invoke local -f hello
```

## Set serverless settings
```
sls config credentials --provider aws --key <aws_key_id> --secret <aws_key_secret> --profile <aws_user>
```

## Deploy lambda function
```
sls deploy --stage dev --verbose
```

## Remove application
```
sls remove -s dev -r sa-east-1
```