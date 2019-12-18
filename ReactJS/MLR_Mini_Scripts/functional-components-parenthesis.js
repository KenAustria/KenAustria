// When using one line

const layout = () => (
  // Parenthesis are used as a wrapper for multiline content.
  // especially if you want your content to be placed on the line below the  =>
  // Also, the default return still works.
  <Fragment>
    <div> ... </div>
      { ... }
  </Fragment>
);
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// This works.
const layout = () => <div>Hello</div>;

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// This works, but the parenthesis are redundant.
const layout = () => (
  <div>Hello</div>
);

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// In more complicated situations, this won't work,  because of line-breaks.
const layout = () =>
  <div>Hello</div>;

// In more complicated situations, the parenthesis allow the line-breaks & additional code.
// With line-breaks,  it's good practice to use the parenthesis.
const layout = () => (
  <div>Hello</div>
);

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
