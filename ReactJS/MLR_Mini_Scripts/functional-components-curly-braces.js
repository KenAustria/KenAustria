// When using multi-line

// Because of,  setting a variable,  using (wrapping) parenthesis will error.
// But,  since wrapping { ... } is used,  then,  a return statement must be added.
myMethod = () => {
    let myVariable = "Good-bye";
    return (
        <Fragment>
            <div>Hello</div>
            <div>{myVariable}</div>
        </Fragment>
    );
};
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
