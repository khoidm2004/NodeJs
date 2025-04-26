# HTTP Method + Messages

## 1. CRUD Operations are fundamental operations for interacting db

- **Create**: Add new items (POST)
- **Read**: Retrieve items (GET)
- **Update**: Modify existing items (PUT)
- **Delete**: Remove items (DELETE)

## 2. HTTP messages

1.  **Request Message** is sent by client => server to request resources or perform actions.

- **Request Line** contains the http method, the request URI, and http version (Example: GET /index.html HTTP/1.1)
- **Headers** provide additional in4 about request

  - Some common HTTP request Headers:

    1. **Host**: Specifies the domain name server <br/>
       `Host: www.example.com` <br/>

    2. **User-Agent**: Contains in4 about the client browser making request <br/>
       `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36` <br/>

    3. **Accept**: Indicates the content types that client is willing to receive <br/>
       `Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` <br/>

    4. **Authorization**: Contains credential for authenicating the client with server <br/>
       `Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l` <br/>

    5. **Content-Type**: Indicates the media type of the request body (used with POST & PUT requests) <br/>
       `Content-Type: application/json` <br/>

    6. **Cookies**: Contains stored HTTP cookies associated with the domain <br/>
       `Cookie: sessionId=abc123; userId=42` <br/>

- **Body (Payload)** contains the data sent to the server

2.  Response Message is sent by server to client in response to an HTTP request

- **Status line**:
  - Contains HTTP version, status code, status text (Example: HTTP/1.1 200 OK)
- **Headers** provide additional in4 about response
- Some common HTTP response Headers:

  1. **Content-Type**: Indicates the media type of response body <br/>
     `Content-Type: text/html; charset=UTF-8` <br/>

  2. **Content length**: Specifies the size of response body in bytes <br/>
     `Content-Length: 138` <br/>

  3. **Set-Cookie**: Sets an HTTP cookie tobe stored by the client <br/>
     `Set-Cookie: sessionId=abc123; Path=/; HttpOnly` <br/>

  4. **Cache-Control**: Directive for caching mechanisms in both req & res <br/>
     `Cache-Control: no-cache, no-store, must-revalidate` <br/>

  5. **Location**: Indicates the URL to redirect the client to another location <br/>
     `Location: https://www.example.com/newpage` <br/>

  6. **Server**: Contains in4 about the server software<br/>
     `Server: Apache/2.4.41 (Ubuntu)` <br/>

- **Body (Response Payload)** contains the data sent from the server to client
