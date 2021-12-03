const hasCrypto = () => typeof window !== "undefined" && window["crypto"] !== undefined;

export { hasCrypto as h };
