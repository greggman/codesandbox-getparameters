# codesandbox-getparameter

The `getParameter` for codesandbox for using the POST method of creating
a new sandbox.

Example:

```
import cs from 'https://greggman.github.io/codesandbox-getparameters/dist/codesandbox-getparameters.module.js';

const files = {
  'index.html', {
    content: '<script>console.log("hello world");</script>',
  },
};
const parameters = cs.getParameters({files});
const elem = document.createElement('div');
elem.innerHTML = `
  <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank" class="hidden">
    <input type="hidden" name="parameters">
    <input type="submit">
  </form>
`;
elem.querySelector('input[name=parameters]').value = parameters;
document.body.appendChild(elem);
elem.querySelector('form').submit();
```

# License: MIT
