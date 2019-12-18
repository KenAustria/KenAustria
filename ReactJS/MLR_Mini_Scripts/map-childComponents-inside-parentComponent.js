// output multiple child components inside of parent component

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.Less}>Less</div>
      <div className={classes.More}>More</div>
    </div>
  );
}


const buildControls = (props) => {
  const controls = [
    { label: "Lettuce", type: "lettuce" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" }
  ];

  return (
    <div className={classes.BuildControls}>
      controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};
