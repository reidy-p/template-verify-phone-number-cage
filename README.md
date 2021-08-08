# Verify Phone Number Cage
[Evervault](https://evervault.com) makes it easy to encrypt & process sensitive data — without it touching your app in plaintext.

This is a simple Evervault Cage example, to help get you up and running on the Evervault platform quickly.

## Getting started with Evervault

Evervault consists of two parts, encrypting your data at source, using either our Node SDK and then sending that encrypted data to a Cage to be processed securely.

This Cage takes a payload that should contain a `phone` key.

## The steps
1. Encrypt your data at source, using either our SDKs or [Relay](https://evervault.com/relay)
2. Process the encrypted data in a Cage

### Encrypting at source
```javascript
// This example uses the Evervault Node SDK.
const Evervault = require('@evervault/sdk');

// Initialize the client with your team’s API key
const evervault = new Evervault('<YOUR-API-KEY>');

// Encrypt your data
const encrypted = await evervault.encrypt({ phone: '+1 (415) 223-8720' });
```

### Process your encrypted data in a Cage
You should encrypt this payload using our SDKs or Relay, then run it in Cage

```javascript
// Process the encrypted data in a Cage
const result = await evervault.run('verify-phone-number', encrypted);
```

--- 
If you want to know more about Evervault, check out our [documentation](https://docs.evervault.com).
