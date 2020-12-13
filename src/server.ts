import { apollo } from './handlers';
import { setCors } from './utils';

const graphQLOptions = {
  baseEndpoint: '/',
  cors: true,
  forwardUnmatchedRequestsToOrigin: false,
  debug: true,
};

const handleRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  try {
    console.log('url.pathname', url.pathname)
    if (url.pathname === graphQLOptions.baseEndpoint) {
      const response =
          request.method === 'OPTIONS' ? new Response(null, { status: 204 }) : await apollo(request, graphQLOptions);
      console.log('request.method', request.method)
      if (graphQLOptions.cors) {
        setCors(response as Response, graphQLOptions.cors);
      }
      return response as Response;
    } else if (graphQLOptions.forwardUnmatchedRequestsToOrigin) {
      return fetch(request);
    } else {
      return new Response('Not found', { status: 404 });
    }
  } catch (err) {
    return new Response(graphQLOptions.debug ? err : 'Something went wrong', { status: 500 });
  }
};

// eslint-disable-next-line no-restricted-globals
addEventListener('fetch', (event: FetchEvent) => {
  console.log('server')
  event.respondWith(handleRequest(event.request));
});
