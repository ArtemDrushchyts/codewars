function createSecretHolder(secret) {
    let obj = {
        secrets: secret,
        getSecret() { return this.secrets; },
        setSecret(value) { this.secrets = value; }

    }
    return obj;
}