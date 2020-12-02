export function response(statusCode, contentType, body) {
  return {
    statusCode: statusCode,
    headers: { 'Content-Type': contentType },
    body: body,
    isBase64Encoded: false,
  };
}
