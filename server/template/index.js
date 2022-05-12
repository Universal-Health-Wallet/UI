/* eslint-disable max-len */
const htmlTemplate = (markup, styles, initialState = {}, helmet) => {
  return (`
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <style>${styles}</style>
      <script type="text/javascript">
        window.__INITIAL_STATE__=${JSON.stringify(initialState)}
      </script>
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${markup}</div>
      <script src="/static/js/client.js" defer></script>
    </body>
  </html>`);
};

export default htmlTemplate;
